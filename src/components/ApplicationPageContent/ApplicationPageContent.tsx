import { useState } from "react";
import { IApplication } from "../../redux/slices/applicationsSlice";
import { ApplicationPageViewSelector } from "../ApplicationPageViewTabs";
import { View } from "../ApplicationPageViewTabs/ApplicationPageViewSelector";
import { Overview } from "./ApplicationPageViews/Overview";
import { Environment } from "./ApplicationPageViews/Environment";
import { Alerts } from "./ApplicationPageViews/Alerts";
import { Events } from "./ApplicationPageViews/Events";
import React from "react";
import { ApplicationPageContentHeader } from "./ApplicationPageContentHeader";

export function ApplicationPageContent({ app }: { app: IApplication }) {
  const [pageView, setPageView] = useState<View>("overview");

  console.log({ pageView });

  return (
    <div>
      <ApplicationPageContentHeader app={app} />

      <ApplicationPageViewSelector
        value={pageView}
        setValue={(newView) => setPageView(newView)}
      />

      <div className="my-6">
        {pageView === "overview" && (
          <Overview app={app} setView={(newView) => setPageView(newView)} />
        )}
        {pageView === "env" && <Environment app={app} />}
        {pageView === "alerts" && <Alerts />}
        {pageView === "events" && <Events />}
      </div>
    </div>
  );
}
