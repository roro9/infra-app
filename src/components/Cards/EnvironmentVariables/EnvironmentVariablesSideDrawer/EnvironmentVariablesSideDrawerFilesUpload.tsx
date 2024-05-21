import cx from "classnames";
import { useDropzone } from "react-dropzone";
import { UploadIcon } from "../../../../icons";
import { IEnvironmentVariable } from "../../../../interfaces";
import { handleDropFilesInEnvironmentVariablesDrawerFileUpload } from "../../../../utils";
import React from "react";

export function EnvironmentVariablesSideDrawerFilesUpload({
  handleSelectEnvVariables,
}: {
  handleSelectEnvVariables: (
    selectedEnvVariables: IEnvironmentVariable[]
  ) => void;
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      file: [".env"],
    },
    multiple: true,
    maxSize: 5000,
    onDrop: (acceptedFiles) => {
      handleDropFilesInEnvironmentVariablesDrawerFileUpload({
        acceptedFiles,
        handleSelectEnvVariables,
      });
    },
  });

  return (
    <section className={cx("container", "")}>
      <div
        {...getRootProps({
          className: cx(
            "dropzone",
            "flex flex-col justify-center items-center",
            "gap-2",
            "bg-primary-gray-page-bg",
            "px-5 py-8",
            "border border-dashed border-primary-gray-file-upload",
            "rounded-lg",
            "cursor-pointer",
            "hover:border-black"
          ),
        })}
      >
        <input {...getInputProps()} accept=".env" />
        <div className="text-primary-purple-sidebar-beta-tag-bg">
          <UploadIcon />
        </div>

        <p className="font-semibold text-sm text-[#333333]">
          Click or drag file(s) here to upload
        </p>
      </div>

      <div className="font-medium text-xs text-primary-gray-timesstamp mt-1.5">
        Upload a .env file. It should not be greater than 5KB.
      </div>
    </section>
  );
}
