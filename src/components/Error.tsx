import { Typography } from "@mui/material";
import { AlertIcon } from "../icons";
import React from "react";

export function Error({ msg }: { msg: string }) {
  return (
    <span className="text-primary-red flex flex-col justify-center items-center gap-2">
      <span className="scale-150">
        <AlertIcon />
      </span>
      <Typography variant="subtitle1" className="text-primary-red/75">
        {msg}
      </Typography>
    </span>
  );
}
