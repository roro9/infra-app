import { CircularProgress, Typography } from "@mui/material";
import React from "react";

export function Loading({ msg }: { msg: string }) {
  return (
    <span className="flex flex-col justify-center items-center gap-2">
      <span>
        <CircularProgress
          color="inherit"
          className="text-primary-purple-sidebar-beta-tag-bg"
        />
      </span>
      <Typography
        variant="subtitle1"
        className="text-primary-purple-sidebar-beta-tag-bg/75"
      >
        {msg}
      </Typography>
    </span>
  );
}
