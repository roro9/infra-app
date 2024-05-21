import { IApplication, IEnvironmentVariable } from "../interfaces";

const getLocalStorageKey = ({ appId }: { appId: IApplication["id"] }) =>
  `APP_ID:${appId}__ENV_VARIABLES`;

export const getAppEnvironmentVariablesFromLocalStorage = ({
  appId,
}: {
  appId: IApplication["id"];
}): IEnvironmentVariable[] => {
  try {
    const storageKey = getLocalStorageKey({ appId });
    const storageData = localStorage.getItem(storageKey);

    // validate storage data
    if (typeof storageData === "string") {
      const variablesArray = JSON.parse(storageData);
      if (
        Array.isArray(variablesArray) &&
        variablesArray.every((v) => {
          return typeof v?.name === "string" && typeof v?.value === "string";
        })
      ) {
        return variablesArray as IEnvironmentVariable[];
      }
    }
  } catch (e) {
    return [];
  }
  return [];
};

export const setAppEnvironmentVariablesToLocalStorage = ({
  appId,
  appEnvVariables,
}: {
  appId: IApplication["id"];
  appEnvVariables: IEnvironmentVariable[];
}) => {
  const keyForStorage = getLocalStorageKey({ appId });
  const dataForStorage = JSON.stringify(appEnvVariables);

  localStorage.setItem(keyForStorage, dataForStorage);
};
