// FileUpload.tsx
import React, { ChangeEvent, useRef } from 'react';
import './style.css';
import UploadDocumentIcon from '../../icons/uploadDocument';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      console.log('uploaded document: ', result);
      onUploadSuccess?.(file);
    } catch (error) {
      if (error instanceof Error) {
        onUploadError?.(error);
      }
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (validateFile(selectedFile)) {
        uploadFile(selectedFile);
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <div className="report-card">
      <div className="upload-icon">
        <UploadDocumentIcon />
      </div>
      <h3>We don’t have your medical reports right now</h3>
      <p>
        Your <span className="highlight">profile is locked right now</span>, upload medical reports to see your health trends
      </p>
      <button className="upload-button" onClick={handleButtonClick}>Upload reports</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />
    </div>
  );
};

export default FileUpload;
