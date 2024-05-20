import { useState } from "react";
import { IApplication } from "../../redux/slices/applicationsSlice";
import { ApplicationPageViewSelector } from "../ApplicationPageViewTabs";
import { View } from "../ApplicationPageViewTabs/ApplicationPageViewSelector";
import React from "react";
import { ApplicationPageContentHeader } from "./ApplicationPageContentHeader";
import { ApplicationPageView } from "./ApplicationPageViews";

export function ApplicationPageContent({ app }: { app: IApplication }) {
  const [pageView, setPageView] = useState<View>("overview");

  return (
    <div className="my-1">
      <ApplicationPageContentHeader app={app} />
      <ApplicationPageViewSelector
        value={pageView}
        setValue={(newView) => setPageView(newView)}
      />
      <ApplicationPageView
        pageView={pageView}
        updatePageView={(newView) => setPageView(newView)}
        app={app}
      />
    </div>
  );
}
