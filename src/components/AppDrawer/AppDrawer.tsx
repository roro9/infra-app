import { Drawer } from "@mui/material";
import { ReactNode } from "react";
import React from "react";

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
      <div className="min-w-[500px] px-2 py-4">
        <div className="flex justify-between">
          <div>{title}</div>
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Drawer>
  );
}
