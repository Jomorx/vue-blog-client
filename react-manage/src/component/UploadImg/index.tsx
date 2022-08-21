import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import React, { useEffect, useState } from "react";
const { Dragger } = Upload;

const App: React.FC<{ src?: string }> = (prop) => {
  const props = {
    name: "file",
    multiple: false,
    action: "http://101.43.180.21:3000/upload",
    onChange(info: any) {
      const { status } = info.file;
      console.log("info", info);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} {...prop} maxCount={1}>
      {prop.src === undefined ? (
        <>
          <p className="ant-upload-drag-icon">  
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </>
      ) : (
        <img src={prop.src} style={{ width: "390px", height: "141px" }} />
      )}
    </Dragger>
  );
};
export default App;
