import React, { useState } from "react";
import { Button } from "../button/Button";
const SingleFileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    alert("File uploaded!");
  };

  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };

  return (
    <div className="bg-black text-green-500 p-4 rounded-md">
      <div className="relative">
        <input
          id="file-input"
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        <Button
          primary={true}
          type="button"
          size="large"
          label="Upload"
          onClick={triggerFileInput}
        ></Button>
      </div>
      {file && (
        <section className="mt-4">
          <p>File details:</p>
          <ul className="list-disc list-inside">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}
      {file && (
        <button
          type="button"
          onClick={handleUpload}
          className="mt-4 border-green-500 border-2 bg-black  text-green-500 py-2 px-4 rounded hover:bg-green-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Upload File
        </button>
      )}
    </div>
  );
};

export default SingleFileUploader;
