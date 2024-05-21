import { Typography } from "@mui/material";
import { BaseCard } from "./BaseCard";
import React from "react";

export function ComingSoonCard({ title }: { title?: string }) {
  return (
    <BaseCard title={title} className="bg-primary-purple-sidebar-text/75">
      <div className="min-h-[250px] flex justify-center items-center ">
        <Typography
          variant="h5"
          className="text-primary-purple-sidebar-beta-tag-bg "
        >
          Coming Soon!
        </Typography>
      </div>
    </BaseCard>
  );
}
