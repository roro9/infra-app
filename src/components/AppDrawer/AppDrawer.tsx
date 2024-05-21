import { Drawer, IconButton } from "@mui/material";
import { ReactNode } from "react";
import React from "react";
import { CrossIcon } from "../../icons";

export function AppDrawer({
  open,
  handleClose,
  title,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  title?: string;
  children: ReactNode;
}) {
  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div className="w-[600px] px-2 py-2">
        <div className="flex justify-between">
          <div>{title}</div>
          <div className="mb-2">
            <IconButton onClick={handleClose}>
              <CrossIcon />
            </IconButton>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Drawer>
  );
}
