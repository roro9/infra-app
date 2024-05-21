import { IEnvironmentVariable } from "../interfaces";

export const downloadEnvironmentVariablesFile = ({
  envVariables,
  fileName,
}: {
  envVariables: IEnvironmentVariable[];
  fileName: `${string}.env`;
}) => {
  try {
    const envContent = envVariables
      .map(({ name, value }) => `${name}=${value}`)
      .join("\n");

    // Create Blob and File objects
    const blob = new Blob([envContent], { type: "text/plain" });

    const file = new File([blob], fileName, {
      type: "text/plain",
    });

    // Create a download link and trigger the download
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {
    window.alert("Unable to download the file, something went wrong :(");
  }
};

export const handleDropFilesInEnvironmentVariablesDrawerFileUpload = ({
  acceptedFiles,
  handleSelectEnvVariables,
}: {
  acceptedFiles: File[];
  handleSelectEnvVariables: (
    selectedEnvVariables: IEnvironmentVariable[]
  ) => void;
}) => {
  if (acceptedFiles.length) {
    try {
      const variablesFromAllFiles: IEnvironmentVariable[] = [];

      // iterate over each file and extract the variables after some validations
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          const content = String(reader.result);

          const lines = content.split("\n");
          lines.forEach((line) => {
            const trimmedLine = line.trim();
            if (trimmedLine && !trimmedLine.startsWith("#")) {
              const [name, value] = trimmedLine.split("=");
              variablesFromAllFiles.push({
                name: name.trim(),
                value: value.trim(),
              });
            }
          }, []);

          handleSelectEnvVariables(variablesFromAllFiles);
        };

        reader.onerror = () => {
          throw Error();
        };

        reader.readAsText(file);
      });
    } catch (e) {
      window.alert("Unable to upload the file, something went wrong :(");
    }
  }
};
