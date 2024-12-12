import { Heading } from '../../components/Heading';

import ackoLogo from '../../assets/logo.svg';
import '../../App.css';
import FileUpload from '../../components/FileUpload';


const Feed = () => {
  const handleUploadSuccess = (files: File): void => {
    console.log('Upload successful:', files);
  };

  const handleUploadError = (error: Error): void => {
    console.error('Upload failed:', error);
  };

  return (
    <div style={{ padding: '16px' }}>
      <a href="https://acko.com" target="_blank">
        <img src={ackoLogo} className="logo_acko" alt="Logo" />
      </a>
      <Heading>Your Feed!</Heading>
      <div>
        <FileUpload
          proposalId="0b9d71cd-bf8d-4cea-bf7e-7a0226a91bd5"
          onUploadSuccess={handleUploadSuccess}
          onUploadError={handleUploadError}
        />
      </div>
    </div>
  );
};

export default Feed;
