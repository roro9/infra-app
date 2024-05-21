import { Button } from "@mui/material";
import React from "react";

export function EnvironmentVariablesSideDrawerActionButtons({
  handleClose,
  handleClickAddEnvVariablesToApp,
}: {
  handleClose: () => void;
  handleClickAddEnvVariablesToApp: undefined | (() => void);
}) {
  return (
    <div className="mt-8 flex justify-end items-center gap-4">
      <Button
        onClick={handleClose}
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
        disabled={!handleClickAddEnvVariablesToApp}
        onClick={handleClickAddEnvVariablesToApp}
      >
        Add
      </Button>
    </div>
  );
}
