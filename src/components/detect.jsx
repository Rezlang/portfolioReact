import React from 'react';
import PropTypes from 'prop-types';
import BaseLayout from './layouts/DemoLayout';

const Demo = ({ title }) => {
  const handleSubmit = (files) => {
    // Logic to create a new user...
    console.log('Form submitted with:', files);
  };

  const updateUploadedFiles = (files) => {
    // Logic to update the uploaded files...
    console.log('Uploaded files:', files);
  };

  return (
    <BaseLayout title={title}>
      <main>
        <div className="center-box">
          {/* Add the content of the slot here */}
        </div>
      </main>
      <style jsx>{`
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

        .media-preview-box {
          background-color: rgba(var(--card-background-grey));
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 2rem;
          max-width: 800px;
          width: 100%;
        }

        .image-preview {
          display: flex;
          justify-content: space-around;
        }

        .image-preview img {
          max-width: 45%;
          height: auto;
        }

        .video-preview {
          display: flex;
          justify-content: center;
        }

        .video-preview video {
          max-width: 100%;
          height: auto;
        }

        .file-upload-box {
          background-color: rgba(var(--card-background-grey));
          border-radius: 8px;
          padding: 1rem;
          max-width: 400px;
          width: 100%;
        }
      `}</style>
    </BaseLayout>
  );
};

Demo.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
};

export default Demo;