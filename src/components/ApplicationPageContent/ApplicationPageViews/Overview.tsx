import React from "react";
import { EventHistory, ServiceInfo, SystemMetrics } from "../../Cards";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { View } from "../../ApplicationPageViewTabs/ApplicationPageViewSelector";

export function Overview({
  app,
  setView,
}: {
  app: IApplication;
  setView: (newView: View) => void;
}) {
  return (
    <div className="[&>div]:mb-4">
      <ServiceInfo app={app} />
      <div className="flex [&>div]:grow gap-5 [&>div]:w-[50%]">
        <SystemMetrics />
        <EventHistory app={app} switchToEventsView={() => setView("events")} />
      </div>
    </div>
  );
}
