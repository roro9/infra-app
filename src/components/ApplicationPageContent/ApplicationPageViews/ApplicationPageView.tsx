import { IApplication } from "../../../redux/slices/applicationsSlice";
import { View } from "../../ApplicationPageViewTabs/ApplicationPageViewSelector";
import { Alerts } from "./Alerts";
import { Environment } from "./Environment";
import { Events } from "./Events";
import { Overview } from "./Overview";
import React from "react";

export function ApplicationPageView({
  pageView,
  setView,
  app,
}: {
  pageView: View;
  setView: (newView: View) => void;
  app: IApplication;
}) {
  const commonProps = {
    app,
    setView,
  };
  return (
    <>
      {pageView === "overview" && <Overview {...commonProps} />}
      {pageView === "env" && <Environment {...commonProps} />}
      {pageView === "alerts" && <Alerts />}
      {pageView === "events" && <Events />}
    </>
  );
}
