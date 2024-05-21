import React, { useEffect, useState } from "react";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../../Cards/BaseCard";
import { AppDrawer } from "../../AppDrawer";
import { useDropzone } from "react-dropzone";
import { EnvVariablesManager } from "./EnvVariablesManager";
import { cloneDeep } from "lodash";
import { Button, IconButton } from "@mui/material";
import { AddIcon, DownloadIcon, UploadIcon } from "../../../icons";
import cx from "classnames";

const initEnvVariablesForApp = ({
  appId,
}: {
  appId: IApplication["id"];
}): { name: string; value: string }[] => {
  try {
    const envVariablesStrInLocalStorage = localStorage.getItem(
      `APP_ID:${appId}__ENV_VARIABLES`
    );

    if (typeof envVariablesStrInLocalStorage === "string") {
      const localStorageEnvVariables = JSON.parse(
        envVariablesStrInLocalStorage
      );
      if (
        Array.isArray(localStorageEnvVariables) &&
        localStorageEnvVariables.every((v) => {
          return typeof v?.name === "string" && typeof v?.value === "string";
        })
      ) {
        return localStorageEnvVariables as { name: string; value: string }[];
      }
    }
  } catch (e) {
    return [];
  }
  return [];
};

export function Environment({ app }: { app: IApplication }) {
  const [open, setOpen] = useState(false);

  const [envVariables, setEnvVariables] = useState<
    { name: string; value: string }[]
  >(initEnvVariablesForApp({ appId: app.id }));

  const [envVariablesFromFile, setEnvVariablesFromFile] = useState<
    { name: string; value: string }[]
  >([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      file: [".env"], //TODO - check if this work
    },
    multiple: true,
    maxSize: 5000, // Size in bytes (5KB = 5000 bytes)
    onDrop: (acceptedFiles) => {
      console.log({ acceptedFiles });
      if (acceptedFiles.length) {
        try {
          acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
              const content = String(reader.result);
              const lines = content.split("\n");

              const result: { name: string; value: string }[] = [];
              lines.forEach((line) => {
                const trimmedLine = line.trim();
                if (trimmedLine && !trimmedLine.startsWith("#")) {
                  const [name, value] = trimmedLine.split("=");
                  result.push({ name: name.trim(), value: value.trim() });
                }
              }, []);

              setEnvVariablesFromFile((prev) => [...prev, ...result]);
            };
            reader.onerror = () => {
              console.log("error reading file...");
            };

            reader.readAsText(file);
          });
        } catch (e) {
          console.log("errrrrorrrrrr");
        }
      }
    },
  });

  console.log({ envVariables, envVariablesFromFile });

  useEffect(() => {
    setEnvVariablesFromFile([]);
  }, [open]);

  // useEffect to sync appId variables with localStorage
  useEffect(() => {
    localStorage.setItem(
      `APP_ID:${app.id}__ENV_VARIABLES`,
      JSON.stringify(envVariables)
    );
  }, [envVariables, app.id]);

  return (
    <>
      <BaseCard
        title="Environment variables"
        titleRight={
          <div className="flex items-center gap-2">
            <IconButton onClick={() => setOpen(true)}>
              <AddIcon />
            </IconButton>

            <IconButton
              disabled={envVariables.length === 0}
              onClick={() => {
                try {
                  const envContent = envVariables
                    .map(({ name, value }) => `${name}=${value}`)
                    .join("\n");
                  // Create Blob and File objects
                  const blob = new Blob([envContent], { type: "text/plain" });
                  const file = new File([blob], "download.env", {
                    type: "text/plain",
                  });

                  // Create a download link and trigger the download
                  const a = document.createElement("a");
                  a.href = URL.createObjectURL(file);
                  a.download = "example.env";
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                } catch (e) {
                  console.log("failed to download file", e);
                }
              }}
            >
              <DownloadIcon />
            </IconButton>
          </div>
        }
        className="min-h-[350px]"
      >
        {envVariables.length === 0 ? (
          <div className="text-primary-gray-timesstamp text-sm	font-medium	">
            No environment variable created.
          </div>
        ) : (
          <div className="max-w-[650px]">
            <EnvVariablesManager
              type="page"
              variables={envVariables}
              handleDeleteVariable={(deleteIdx) => {
                setEnvVariables((prev) => {
                  const newVariables = cloneDeep(prev).filter(
                    (v, idx) => idx !== deleteIdx
                  );

                  return newVariables;
                });
              }}
            />
          </div>
        )}
      </BaseCard>
      <AppDrawer open={open} handleClose={() => setOpen(false)}>
        <BaseCard>
          {envVariablesFromFile.length === 0 ? (
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
          ) : (
            <EnvVariablesManager
              type="drawer"
              variables={envVariablesFromFile}
              handleDeleteVariable={(deleteIdx) => {
                setEnvVariablesFromFile((prev) => {
                  const newVariables = cloneDeep(prev).filter(
                    (v, idx) => idx !== deleteIdx
                  );

                  return newVariables;
                });
              }}
            />
          )}
          <div className="mt-8 flex justify-end items-center gap-4">
            <Button
              onClick={() => setOpen(false)}
              variant="outlined"
              sx={{
                textTransform: "none",
                px: 4,
                borderColor: "black",
                fontWeight: 600,
                color: "black",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#6E27D5",
                textTransform: "none",
                px: 4,
                fontWeight: 600,
              }}
              disabled={envVariablesFromFile.length === 0}
              onClick={() => {
                setEnvVariables((prev) => [...prev, ...envVariablesFromFile]);
                setOpen(false);
              }}
            >
              Add
            </Button>
          </div>
        </BaseCard>
      </AppDrawer>
    </>
  );
}
