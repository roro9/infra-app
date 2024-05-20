import { IApplication } from "../../../redux/slices/applicationsSlice";
import { View } from "../../ApplicationPageViewTabs/ApplicationPageViewSelector";
import { Alerts } from "./Alerts";
import { Environment } from "./Environment";
import { Events } from "./Events";
import { Overview } from "./Overview";
import React from "react";

export function ApplicationPageView({
  pageView,
  updatePageView,
  app,
}: {
  pageView: View;
  updatePageView: (newView: View) => void;
  app: IApplication;
}) {
  return (
    <>
      {pageView === "overview" && (
        <Overview app={app} setView={updatePageView} />
      )}
      {pageView === "env" && <Environment app={app} />}
      {pageView === "alerts" && <Alerts />}
      {pageView === "events" && <Events />}
    </>
  );
}
