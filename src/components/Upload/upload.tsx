// todo : add error state
// todo : add loading state
// todo : add reload action

import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FileRejection, useDropzone } from 'react-dropzone';

import Loader from './../loader_v3';
import { DocFileApiType } from './../../utils/types/api';

interface Props {
  limit?: number;
  files: DocFileApiType[];
  handleAddFile: (v: File) => void;
  handleDeleteFile: (documentId: string) => void;
  uploadStatus: 'loading' | 'error' | 'success' | 'none';
  deleteStatus: 'loading' | 'error' | 'success' | 'none';
}

// @ Doctype Section
const Doctype: FC<Props> = ({ handleAddFile, files = [], limit, uploadStatus }) => {
  const [error, setError] = useState('');
  // ? handle On drop
  const onDrop = (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (acceptedFiles.length) {
      handleAddFile(acceptedFiles[0]);
    } else {
      fileRejections.forEach((file) => {
        file.errors.forEach((err: { code: string }) => {
          if (err.code === 'file-too-large') {
            setError(`Error: Max allowed size is 25MB`);
          }
        });
      });
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(''), 4000);
    }
  }, [error]);

  // ? use react-dropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
    maxSize: 2.5e7, // 25MB
  });

  // maxSize: 2621440 2.5e7

  return (
    <Container>
      {files.length === 0 && (
        <>
          <AddContainer {...getRootProps()}>
            {uploadStatus === 'loading' ? (
              <>
                <Loader />
              </>
            ) : (
              <>Upload policy document</>
            )}
            <input {...getInputProps()} />
          </AddContainer>
          <ExtensionNote>Files allowed: .jpeg, .jpg, .png, .pdf</ExtensionNote>
        </>
      )}
      {files?.map((file) => (
        <FileContainer key={file?.id} isLoading={uploadStatus === 'loading'}>
          <div style={{ flexShrink: 0, width: 24, height: 24 }}>{uploadStatus !== 'error' && <span>done</span>}</div>

          <PathName>{file?.name}</PathName>
        </FileContainer>
      ))}
      {files?.length > 0 && (limit ? files.length < limit : true) && uploadStatus !== 'loading' && (
        <>
          <ExtensionNote>Files allowed: .jpeg, .jpg, .png, .pdf</ExtensionNote>
          <AddMoreContainer {...getRootProps()}>
            Add More
            <input {...getInputProps()} />
          </AddMoreContainer>
        </>
      )}
      {error && <InputError>{error}</InputError>}
    </Container>
  );
};

// @ styles

const ExtensionNote = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #5b5675;
  margin-top: 4px;
  display: inline-block;
`;
const PathName = styled.span`
  margin-right: auto;
  margin-left: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 20px;
  margin-top: 8px;
`;
const AddMoreContainer = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1c73e8;
  margin-top: 10px;
  padding: 2px;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
`;

const AddContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  border: 1px dashed #0fa457;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 12px;
  color: #040222;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FileContainer = styled(AddContainer)<{ isLoading: boolean }>`
  box-sizing: border-box;
  background: #f8f7fc;
  border: none;
  cursor: auto;
  /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
  & > svg:last-child {
    margin-left: auto;
    cursor: pointer;
  }
  & > svg:first-child {
    ${(props) =>
      props.isLoading &&
      `
          filter: grayscale(1);
    `}
  }
`;
const InputError = styled.span`
  margin-top: 10px;
  font-size: 14px;
  color: #d83d37;
  display: block;
`;
export default Doctype;
