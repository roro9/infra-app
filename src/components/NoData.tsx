import { Typography } from "@mui/material";
import { AlertIcon } from "../icons";
import React from "react";

export function NoData({ msg }: { msg: string }) {
  return (
    <span className="text-primary-yellow flex flex-col justify-center items-center gap-2">
      <span className="scale-150">
        <AlertIcon />
      </span>
      <Typography variant="subtitle1" className="text-primary-yellow/85">
        {msg}
      </Typography>
    </span>
  );
}
