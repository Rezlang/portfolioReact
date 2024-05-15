// DemoLayout.js
import React, {useState} from 'react';

import FileUpload from '../file-upload/file-upload';

import Layout from './Layout';

const DemoLayout = ({title, children}) => {
  const [uploadImages, setUploadImages] = useState({
    imgs: []
  });

  const handleSubmit = (event) => {
    // Logic to create a new user...
    event.preventDefault();
    console.log('Form submitted with:', uploadImages);
    
  };

  const updateUploadedFiles = (files) => {
    // Logic to update the uploaded files...
    console.log('Uploaded files:', files);
    setUploadImages({...uploadImages, imgs: files})
  };

  return (
    <Layout title={title}>
      <main>
        <div className='center-box'>{children} 
        <form onSubmit={handleSubmit}>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label="Create New User"
            multiple
            onSubmit={handleSubmit}
            updateFilesCb={updateUploadedFiles}
          />
          <button type="submit">Create New User</button>
        </form>
        </div>
      </main>
      <style>{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
          }
          .center-box {
            background-color: rgba(var(--card-background-grey));
            border-radius: 8px;
            padding: 2rem;
            margin-bottom: 2rem;
            max-width: 800px;
            width: 100%;
          }
        `} </style>
    </Layout >);
};

export default DemoLayout;