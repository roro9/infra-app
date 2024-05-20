import { IconButton } from "@mui/material";
import { IApplication } from "../../redux/slices/applicationsSlice";
import { MenuIcon } from "../../icons";
import { StatusBadge } from "../StatusBadge";
import React from "react";

export function ApplicationPageContentHeader({ app }: { app: IApplication }) {
  const { name, status } = app;
  return (
    <div className="flex mt-4 items-center">
      <div className="text-xl font-semibold	">{name}</div>
      <div className="grow" />
      <StatusBadge status={status} />
      <IconButton size="small" className="!ml-2">
        <MenuIcon />
      </IconButton>
    </div>
  );
}
