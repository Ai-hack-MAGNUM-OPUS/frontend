import React, { useState } from "react";
import  {  Button, message, Upload  } from "antd"
import Icon, { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


interface FileUploaderIE{
    onResponse: (response:any)=>void
}

export const FileUploader:React.FC<FileUploaderIE> = (data) =>{

    const props = {
        name: 'file',
        action: 'http://192.168.9.152:8000/api/docx/',
        headers: {
          authorization: 'authorization-text',
        },
      
        onChange(info:any) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
      
          if (info.file.status === 'done') {
            data.onResponse(info.file.response)
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      
    return (
            <Upload {...props}>
              <Button icon={<UploadOutlined></UploadOutlined>}>Click to Upload</Button>
            </Upload>
      );
}