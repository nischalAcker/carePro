// FileUpload.tsx
import React, { useState, ChangeEvent } from 'react';
import '../../FileUpload.css';

interface FileUploadProps {
  proposalId: string;
  onUploadSuccess?: (file: File) => void;
  onUploadError?: (error: Error) => void;
}

export interface UploadResponse {
  success: boolean;
  urls?: string[];
  error?: string;
}

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 10MB in bytes
//const ALLOWED_TYPES = ['application/pdf'];

const FileUpload: React.FC<FileUploadProps> = ({ proposalId, onUploadSuccess, onUploadError }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const validateFile = (file: File): boolean => {
    // Check if it's a PDF by file extension regardless of MIME type
    const isPDF = file.name.toLowerCase().endsWith('.pdf');

    if (!isPDF) {
      alert('Only PDF files are allowed');
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert('File size should not exceed 15MB');
      return false;
    }

    return true;
  };

  const uploadFile = async (file: File): Promise<void> => {
    setUploading(true);
    setProgress(0);

    try {
      const documentRequest = {
        lob: 'health',
        entity_name: 'proposal',
        entity_id: proposalId,
        attribute: 'medical_documents',
        modified_by: 'user_id',
        journey: 'endorsement',
        document_type: 'endorsement_supporting_documents',
        document_list: [
          {
            allow_duplicate: true,
            document_type: 'endorsement_supporting_documents',
            identifier_number: proposalId,
            file_name: file.name,
            metadata: {
              file_name: file.name,
              proposal_id: proposalId,
              description: 'Endorsement document upload',
              document_category: 'DOB_PROOF',
            },
          },
        ],
        associate_entity_to_document: true,
      };

      const formData = new FormData();
      formData.append(
        'documentGroupCreateRequest',
        new Blob([JSON.stringify(documentRequest)], { type: 'application/json' }),
      );
      formData.append('documents', file);

      const response = await fetch(
        'https://health-documentation-service-uat.internal.ackodev.com/api/v1/documentation/upload-many',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      setProgress(100);
      onUploadSuccess?.(file);
    } catch (error) {
      if (error instanceof Error) {
        onUploadError?.(error);
      }
      setFile(null);
    } finally {
      setUploading(false);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        uploadFile(selectedFile);
      }
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-section">
        <input type="file" onChange={handleFileInput} accept=".pdf" disabled={uploading} className="file-input" />

        {uploading && (
          <div className="upload-progress">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <span>Uploading... {progress}%</span>
          </div>
        )}
      </div>

      {file && (
        <div className="file-info">
          <p>Selected file: {file.name}</p>
          <p>Size: {(file.size / (1024 * 1024)).toFixed(2)} MB</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
