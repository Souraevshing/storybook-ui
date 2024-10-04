import * as React from "react";
import { DeleteIcons } from "./Icons/DeleteIcon";
import { UploadIcons } from "./Icons/UploadIcon";
import FileIcon from "../common/Icons/png/FileIcon.png";

type Error = {
  isValid?: boolean;
  message?: string;
};

enum FileEnum {
  JPG = "image/jpg",
  JPEG = "image/jpeg",
  PNG = "image/png",
  MP4 = "video/mp4",
  MP3 = "audio/mp3",
  WEBM = "audio/webm",
  PDF = "application/pdf",
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  XLS = "application/vnd.ms-excel",
  XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  CSV = "text/csv",
}

type FileUploadProps = {
  title?: string;
  handleFileChange: (file: File | Error) => void;
  type: string[];
  size: number;
  allowMultipleFile: boolean;
  children: React.ReactNode;
  maxCount: number;
  helperIcon?: any;
  height?: number;
  width?: number;
};

export const FileUploader = ({
  title,
  handleFileChange,
  type,
  size,
  allowMultipleFile = false,
  children,
  maxCount = 10,
  helperIcon,
  height = 151,
  width = 320,
}: FileUploadProps) => {
  const [initial, setInitial] = React.useState<boolean>(false);
  const [checkFileType, setCheckFileType] = React.useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = React.useState<any>([]);
  const [errors, setErrors] = React.useState<Error | null>({
    isValid: true,
  });

  function validateFileTypes(ev: any) {
    const Filenames = Object.values(FileEnum);
    ev.preventDefault();
    setInitial(true);
    /* To validate file types */
    if (type?.length) {
      let count = 0;
      type.map((i: string) => {
        if (Filenames.includes(i as unknown as FileEnum)) {
          count += 1;
        }
      });
      if (count === type.length) {
        setCheckFileType(true);
      }
    }
  }

  function dropHandler(ev: any) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      const files = [];
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          const file = ev.dataTransfer.items[i].getAsFile();
          files.push(file);
        }
      }
      validateFile(files);
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        validateFile(ev.dataTransfer.files);
      }
    }
  }

  function dragOverHandler(ev: any) {
    ev.preventDefault();
  }

  function validateFile(files: any) {
    console.log(files);
    const error: Error = {
      isValid: true,
    };

    if (type?.length) {
      if (files?.length <= maxCount && uploadedFiles?.length <= maxCount) {
        for (const file of files) {
          if (!type?.includes(file?.type)) {
            file.value = "";
            error.isValid = false;
            error.message = "File type not supported";
          }

          if (file?.size > size) {
            file.value = "";
            error.isValid = false;
            error.message =
              "File too large: " + file?.size + ". Maximum size: " + size;
          }
          file.src = URL.createObjectURL(file);
        }
      } else {
        error.isValid = false;
        error.message = `Maximum ${maxCount} files is allowed`;
      }
      if (error?.isValid) {
        setUploadedFiles([...uploadedFiles, ...files]);
        return handleFileChange(files);
      }
    }
    setErrors(error);
    handleFileChange(error);
  }

  const removeImage = (e: any, file: any) => {
    e.preventDefault();
    const index = uploadedFiles.indexOf(file);
    if (index > -1) {
      uploadedFiles.splice(index, 1);
    }
    setUploadedFiles([...uploadedFiles]);
    setErrors(null);
  };

  const removeImages = () => {
    setUploadedFiles([]);
    setErrors(null);
  };

  return (
    <>
      <div
        onMouseOver={(event) => !initial && validateFileTypes(event)}
        style={{
          width: width < 289 ? "289px" : `${width}px`,
          height: height < 151 ? "151px" : `${height}px`,
        }}
      >
        <span className="fileupload-label">
          {title} <span className="helper-icon ">{helperIcon}</span>
        </span>

        <label
          style={{
            height: "100%",
            cursor: initial && !checkFileType ? "not-allowed" : "pointer",
            filter: initial && !checkFileType ? "blur(1px)" : "blur(0px)",
          }}
          htmlFor="uploadFile"
          className={`fileupload-box
          bg-base-grey border-2 border-gray-600 
          border-dashed rounded-md cursor-pointer
           hover:border-gray-400 focus:outline-none ${
             errors && !errors?.isValid && "border-red-400 "
           }`}
          onDrop={(event) => dropHandler(event)}
          onDragOver={(event) => dragOverHandler(event)}
        >
          {!uploadedFiles?.length ? (
            children
          ) : (
            <div className="container grid grid-cols-2 gap-2 mx-auto overflow-auto">
              {uploadedFiles?.map((file: any) => (
                <>
                  <div className=" relative h-[80px]" key={file?.src}>
                    <div
                      className="group relative block overflow-hidden rounded-md transition-all duration-500 image-container"
                      onClick={(e) => e.preventDefault()}
                    >
                      <img
                        src={
                          file?.type === "text/csv" ||
                          file?.type ===
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
                          file?.type === "application/vnd.ms-excel" ||
                          file?.type ===
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                          file?.type === "application/pdf"
                            ? FileIcon
                            : file?.src
                        }
                        alt={file?.name}
                        height="100%"
                        className={"object-contain h-full w-full"}
                      />
                      <div className="absolute -bottom-52 group-hover:bottom-2 right-2 text-xs transition-all duration-500 p-4 rounded shadow dark:shadow-gray-700">
                        {file?.name}
                      </div>
                      <div
                        onClick={(e) => removeImage(e, file)}
                        className="absolute -bottom-52 group-hover:bottom-2 right-2  transition-all duration-500 bg-white dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700"
                      >
                        <DeleteIcons />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}

          <input
            type="file"
            id="uploadFile"
            name="file_upload"
            className="hidden"
            onChange={(e) => validateFile(e.target.files)}
            multiple={allowMultipleFile}
            disabled={!checkFileType}
          />
        </label>
        <div className="flex justify-between mt-4">
          <label
            style={{
              cursor: initial && !checkFileType ? "not-allowed" : "pointer",
              filter: initial && !checkFileType ? "blur(1px)" : "blur(0px)",
            }}
            className="flex"
            htmlFor="uploadFile"
          >
            <UploadIcons />
            <span className="upload-label text-primary-green">
              Upload document
            </span>
          </label>

          {uploadedFiles?.length ? (
            <div className="flex cursor-pointer" onClick={() => removeImages()}>
              <DeleteIcons />
              <span className="upload-label ">Remove</span>
            </div>
          ) : null}
        </div>

        <span className="mt-2">
          <p className="text-red-500 text-xs mt-2">{errors?.message}</p>
        </span>

        {initial && !checkFileType && (
          <span className="text-red-500 text-xs mt-2">
            {" "}
            File type is missing!{" "}
          </span>
        )}
      </div>
    </>
  );
};
