import React, { useEffect, useState } from "react";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../../Cards/BaseCard";
import { AppDrawer } from "../../AppDrawer";
import { useDropzone } from "react-dropzone";
import { EnvVariablesList } from "./EnvVariablesList";
import { cloneDeep } from "lodash";

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
      ".env": [".env"], //TODO - check if this work
    },
    multiple: false,
    onDrop: (acceptedFiles) => {
      console.log({ acceptedFiles });
      const file = acceptedFiles?.[0];
      console.log({ file });
      if (file) {
        try {
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

            setEnvVariablesFromFile(result);
          };
          reader.onerror = () => {
            console.log("error reading file...");
          };

          reader.readAsText(file);
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
          <div className="flex items-center gap-5">
            <button onClick={() => setOpen(true)}>+</button>
            {envVariables.length > 0 && (
              <button
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
                Dwld
              </button>
            )}
          </div>
        }
      >
        <EnvVariablesList
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
      </BaseCard>
      <AppDrawer open={open} handleClose={() => setOpen(false)}>
        {envVariablesFromFile.length === 0 ? (
          <BaseCard>
            <section className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} accept=".env" />
                <p>Drag file here, or click to select</p>
              </div>
            </section>
          </BaseCard>
        ) : (
          <div>
            <EnvVariablesList
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

            <button onClick={() => setOpen(false)}>Cancel</button>
            <button
              onClick={() => {
                setEnvVariables((prev) => [...prev, ...envVariablesFromFile]);
                setOpen(false);
              }}
            >
              Add
            </button>
          </div>
        )}
      </AppDrawer>
    </>
  );
}
