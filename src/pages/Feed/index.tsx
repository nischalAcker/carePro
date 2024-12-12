import '../../App.css';
import DocumentUpload from '../../components/Upload';

const Feed = () => {
  return (
    <div style={{ padding: '16px' }}>
      <DocumentUpload
        title=""
        subtitle=""
        handleDeleteFile={() => {}}
        handleAddFile={(file) => {
          console.log(file, 'val');
        }}
        document_category="retail_porting_existing_policy"
        files={[]}
      />
    </div>
  );
};

export default Feed;
