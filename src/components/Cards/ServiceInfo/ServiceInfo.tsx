import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../BaseCard";
import React from "react";
import { CurrentVersion } from "./CurrentVersion";
import { DesiredVersion } from "./DesiredVersion";
import { Button } from "@mui/material";
import { getTimestampLabel } from "../../../utils";

export function ServiceInfo({ app }: { app: IApplication }) {
  const { updatedAt } = app;

  return (
    <BaseCard title="Service info" canCollapse>
      <div className="flex items-start gap-40">
        <CurrentVersion app={app} />
        <DesiredVersion app={app} />
      </div>
      <div className="flex items-center justify-between mt-10">
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "#6E27D5", textTransform: "none", px: 4 }}
        >
          Deploy
        </Button>
        <div className="text-xs	font-medium text-primary-gray-timesstamp">
          Last updated {getTimestampLabel(Number(updatedAt))}
        </div>
      </div>
    </BaseCard>
  );
}
