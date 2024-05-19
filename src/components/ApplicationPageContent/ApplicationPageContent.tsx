import { useState } from "react";
import { IApplication } from "../../redux/slices/applicationsSlice";
import { ApplicationPageViewSelector } from "../ApplicationPageViewTabs";
import { View } from "../ApplicationPageViewTabs/ApplicationPageViewSelector";
import { Overview } from "./ApplicationPageViews/Overview";
import { Environment } from "./ApplicationPageViews/Environment";
import { Alerts } from "./ApplicationPageViews/Alerts";
import { Events } from "./ApplicationPageViews/Events";
import React from "react";

export function ApplicationPageContent({ app }: { app: IApplication }) {
  const [pageView, setPageView] = useState<View>("overview");

  console.log({ pageView });

  const { name, status } = app;

  return (
    <div>
      <div className="flex my-4">
        <div>{name}</div>
        <div className="grow" />
        <div>{status}</div>
        <div className="ml-2">Menu</div>
      </div>

      <ApplicationPageViewSelector
        value={pageView}
        setValue={(newView) => setPageView(newView)}
      />

      <div className="my-6">
        {pageView === "overview" && <Overview />}
        {pageView === "env" && <Environment />}
        {pageView === "alerts" && <Alerts />}
        {pageView === "events" && <Events />}
      </div>
    </div>
  );
}
