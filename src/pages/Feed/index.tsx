/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import '../../App.css';
import FeedPositive from './FeedPositive';
import FeedNegative from './FeedNegative';
import Loader from '../../components/Loader';


const Feed = ({ uploadedFiles, setUploadedFiles } : { uploadedFiles: any[], setUploadedFiles: any }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const areFilesUploaded = uploadedFiles.length > 0;

  const handleUploadSuccess = (files: File): void => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploadedFiles((prevFiles: any) => [...prevFiles, files]);
    }, 20000);
  };

  const handleUploadError = (error: Error): void => {
    console.error('Upload failed:', error);
  };

  return (
    <>
      {
        loading
        ? <Loader />
        :  areFilesUploaded
          ? <FeedPositive />
          : <FeedNegative handleUploadSuccess={handleUploadSuccess} handleUploadError={handleUploadError} />
      }
    </>
  );
};

export default Feed;
