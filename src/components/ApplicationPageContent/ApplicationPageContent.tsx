import { useState } from "react";
import { ApplicationPageViewSelector } from "../ApplicationPageViewTabs";
import React from "react";
import { ApplicationPageContentHeader } from "./ApplicationPageContentHeader";
import { ApplicationPageView, IApplication } from "../../interfaces";
import { ApplicationPageViewContent } from "./ApplicationPageViews";

export function ApplicationPageContent({ app }: { app: IApplication }) {
  const [pageView, setPageView] = useState<ApplicationPageView>("overview");

  return (
    <div className="my-1">
      <ApplicationPageContentHeader app={app} />

      <ApplicationPageViewSelector
        value={pageView}
        setValue={(newView) => setPageView(newView)}
      />

      <ApplicationPageViewContent
        pageView={pageView}
        setView={(newView) => setPageView(newView)}
        app={app}
      />
    </div>
  );
}
