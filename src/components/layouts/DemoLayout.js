// DemoLayout.js
import React from 'react';

import FileUpload from '../file-upload/file-upload';

import Layout from './Layout';

const DemoLayout = ({title, children}) => {
  const handleSubmit = (files) => {
    // Logic to create a new user...
    console.log('Form submitted with:', files);
  };

  return (
    <Layout title={title}>
      <main>
        
        <div className = 'center-box'>{children} </div>
          <div className="file-upload-box">
            <FileUpload
              accept=".jpg,.png,.jpeg"
              label="Create New User"
              multiple
              onSubmit={handleSubmit}
            />
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
          .file-upload-box {
            background-color: rgba(var(--card-background-grey));
            border-radius: 8px;
            padding: 1rem;
            max-width: 400px;
            width: 100%;
          }
        `} </style>
    </Layout >);
};

export default DemoLayout;