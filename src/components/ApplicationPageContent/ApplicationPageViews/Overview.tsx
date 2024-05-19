import React from "react";
import { EventHistory, ServiceInfo, SystemMetrics } from "../../Cards";
import { IApplication } from "../../../redux/slices/applicationsSlice";

export function Overview({ app }: { app: IApplication }) {
  return (
    <div className="[&>div]:mb-4">
      <ServiceInfo app={app} />
      <div className="flex [&>div]:grow gap-5">
        <SystemMetrics />
        <EventHistory />
      </div>
    </div>
  );
}
