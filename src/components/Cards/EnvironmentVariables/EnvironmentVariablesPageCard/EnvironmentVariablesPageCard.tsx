import { IEnvironmentVariable } from "../../../../interfaces";
import { EnvVariablesManager } from "../../../ApplicationPageContent/ApplicationPageViews/EnvVariablesManager";
import { BaseCard } from "../../BaseCard";
import { EnvironmentVariablesPageCardActions } from "./EnvironmentVariablesPageCardActions";
import React from "react";

export function EnvironmentVariablesPageCard({
  appEnvVariables,
  handleDrawerOpen,
  handleDeleteAppEnvVariable,
}: {
  appEnvVariables: IEnvironmentVariable[];
  handleDrawerOpen: () => void;
  handleDeleteAppEnvVariable: (deleteIdx: number) => void;
}) {
  return (
    <BaseCard
      className="min-h-[350px]"
      title="Environment variables"
      titleRight={
        <EnvironmentVariablesPageCardActions
          appEnvVariables={appEnvVariables}
          handleDrawerOpen={handleDrawerOpen}
        />
      }
    >
      {appEnvVariables.length === 0 ? (
        <div className="text-primary-gray-timesstamp text-sm	font-medium	">
          No environment variable created.
        </div>
      ) : (
        <div className="max-w-[650px]">
          <EnvVariablesManager
            type="page"
            variables={appEnvVariables}
            handleDeleteVariable={handleDeleteAppEnvVariable}
          />
        </div>
      )}
    </BaseCard>
  );
}
