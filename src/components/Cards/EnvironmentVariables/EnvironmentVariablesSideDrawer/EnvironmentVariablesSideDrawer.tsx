import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { IEnvironmentVariable } from "../../../../interfaces";
import { AppDrawer } from "../../../AppDrawer";
import { EnvVariablesManager } from "../../../ApplicationPageContent/ApplicationPageViews/EnvVariablesManager";
import { BaseCard } from "../../BaseCard";
import { EnvironmentVariablesSideDrawerActionButtons } from "./EnvironmentVariablesSideDrawerActionButtons";
import { EnvironmentVariablesSideDrawerFilesUpload } from "./EnvironmentVariablesSideDrawerFilesUpload";
import React from "react";

export function EnvironmentVariablesSideDrawer({
  open,
  handleClose,
  addEnvVariablesToApp,
}: {
  open: boolean;
  handleClose: () => void;
  addEnvVariablesToApp: (newVariables: IEnvironmentVariable[]) => void;
}) {
  const [tempEnvVariables, setTempEnvVariables] = useState<
    IEnvironmentVariable[]
  >([]);

  // remove any old selections on open/close
  useEffect(() => {
    setTempEnvVariables([]);
  }, [open]);

  return (
    <AppDrawer open={open} handleClose={handleClose}>
      <BaseCard>
        {tempEnvVariables.length === 0 ? (
          <EnvironmentVariablesSideDrawerFilesUpload
            handleSelectEnvVariables={(selectedEnvVariables) => {
              setTempEnvVariables(selectedEnvVariables);
            }}
          />
        ) : (
          <EnvVariablesManager
            type="drawer"
            variables={tempEnvVariables}
            handleDeleteVariable={(deleteIdx) => {
              setTempEnvVariables((prev) => {
                const newVariables = cloneDeep(prev).filter(
                  (v, idx) => idx !== deleteIdx
                );

                return newVariables;
              });
            }}
          />
        )}
        <EnvironmentVariablesSideDrawerActionButtons
          handleClose={handleClose}
          handleClickAddEnvVariablesToApp={
            tempEnvVariables.length === 0
              ? undefined
              : () => {
                  addEnvVariablesToApp(tempEnvVariables);
                  handleClose();
                }
          }
        />
      </BaseCard>
    </AppDrawer>
  );
}
