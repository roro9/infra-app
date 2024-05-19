import { ReactNode } from "react";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { BaseCard } from "../BaseCard";
import React from "react";

function Detail({ label, value }: { label: string; value?: ReactNode }) {
  return (
    <div className="inline-block">
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
}

export function ServiceInfo({ app }: { app: IApplication }) {
  const { version, desiredVersion, updatedAt } = app;
  return (
    <BaseCard title="Service info" canCollapse>
      <div className="flex items-start gap-10">
        <Detail
          label="Current Version"
          value={version === desiredVersion ? "In Sync" : version}
        />
        <Detail label="Desired Version" value={desiredVersion} />
      </div>
      <div className="flex items-center justify-between mt-8">
        <div>Deploy</div>
        <div>Last updated at {updatedAt}</div>
      </div>
    </BaseCard>
  );
}
