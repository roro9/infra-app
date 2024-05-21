import { IconButton } from "@mui/material";
import { AddIcon, DownloadIcon } from "../../../../icons";
import { IEnvironmentVariable } from "../../../../interfaces";
import { downloadEnvironmentVariablesFile } from "../../../../utils";
import React from "react";

export function EnvironmentVariablesPageCardActions({
  appEnvVariables,
  handleDrawerOpen,
}: {
  appEnvVariables: IEnvironmentVariable[];
  handleDrawerOpen: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <IconButton onClick={handleDrawerOpen}>
        <AddIcon />
      </IconButton>

      <IconButton
        disabled={appEnvVariables.length === 0}
        onClick={() => {
          downloadEnvironmentVariablesFile({
            envVariables: appEnvVariables,
            fileName: `${Date.now()}.env`,
          });
        }}
      >
        <DownloadIcon />
      </IconButton>
    </div>
  );
}
