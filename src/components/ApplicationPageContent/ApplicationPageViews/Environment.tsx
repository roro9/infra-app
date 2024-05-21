import { useEffect, useState } from "react";
import { IApplication, IEnvironmentVariable } from "../../../interfaces";
import {
  getAppEnvironmentVariablesFromLocalStorage,
  setAppEnvironmentVariablesToLocalStorage,
} from "../../../utils";
import { EnvironmentVariablesPageCard } from "../../Cards";
import { EnvironmentVariablesSideDrawer } from "../../Cards/EnvironmentVariables";
import React from "react";
import { cloneDeep } from "lodash";

export function Environment({ app }: { app: IApplication }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [appEnvVariables, setAppEnvVariables] = useState<
    IEnvironmentVariable[]
  >(getAppEnvironmentVariablesFromLocalStorage({ appId: app.id }));

  // sync appId variables with localStorage
  useEffect(() => {
    setAppEnvironmentVariablesToLocalStorage({
      appId: app.id,
      appEnvVariables,
    });
  }, [appEnvVariables, app.id]);

  return (
    <>
      <EnvironmentVariablesPageCard
        appEnvVariables={appEnvVariables}
        handleDrawerOpen={() => setDrawerOpen(true)}
        handleDeleteAppEnvVariable={(deleteIdx) => {
          setAppEnvVariables((prev) => {
            const newVariables = cloneDeep(prev).filter(
              (v, idx) => idx !== deleteIdx
            );
            return newVariables;
          });
        }}
      />

      <EnvironmentVariablesSideDrawer
        open={drawerOpen}
        handleClose={() => setDrawerOpen(false)}
        addEnvVariablesToApp={(newVariables) => {
          // not adding a check to prevent duplicates
          // as it might be a valid usecase - add duplicates and only do minor changes (once it's editable on the UI)
          setAppEnvVariables((prev) => [...prev, ...newVariables]);
        }}
      />
    </>
  );
}
