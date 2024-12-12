import { FC, useState } from 'react';
import styled from 'styled-components';
import { uploadDocumentApi } from './../../utils/api/document';
import { DocFileApiType } from './../../utils/types/api';
import Upload from './upload';
import Loader from './../loader_v3';

interface Props {
  title: string;
  subtitle?: string;
  files: DocFileApiType[];
  handleAddFile: (v: DocFileApiType) => void;
  handleDeleteFile: (id: string) => void;
  document_category: DocFileApiType['document_category'];
}

const DocumentUpload: FC<Props> = ({ title, subtitle, files, handleAddFile, document_category }) => {
  const [apiUploadStatus, setApiUploadStatus] = useState<'loading' | 'error' | 'success' | 'none'>('none');

  const _handleAddFile = async (f: File) => {
    try {
      setApiUploadStatus('loading');
      const res = await uploadDocumentApi({
        file: f,
        proposal_id: '',
        type: document_category,
        document_type: 'retail_porting_existing_policy',
        description: 'Policy document upload',
        journey: 'retail_porting',
        reference_id: '',
      });
      const data = await res?.json();
      const fileId = data.data.document_category[0].documents[0].id;
      const fileUrl = data.data.document_category[0].documents[0].document_url.split('?')[0];
      const fileName = data.data.document_category[0].documents[0].metadata.file_name;

      handleAddFile({
        document_category,
        name: fileName,
        id: fileId,
        url: fileUrl,
        journey: 'retail_porting',
        reference_type: 'USER',
      });
      setApiUploadStatus('success');
    } catch (e) {
      console.error(e);
      setApiUploadStatus('error');
    }
  };
  const policyDocFiles = files.filter((f) => f.document_category === document_category);
  return (
    <Container>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Upload
        uploadStatus={apiUploadStatus}
        deleteStatus="success"
        limit={5}
        handleAddFile={_handleAddFile}
        handleDeleteFile={() => {}}
        files={policyDocFiles}
      />
      {apiUploadStatus === 'loading' && policyDocFiles.length > 0 && (
        <LoaderWrapper>
          <Loader /> &ensp;Uploading your document...
        </LoaderWrapper>
      )}
    </Container>
  );
};

const LoaderWrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #040222;
`;
const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #5b5675;
  margin-top: 8px;
`;

export default DocumentUpload;
