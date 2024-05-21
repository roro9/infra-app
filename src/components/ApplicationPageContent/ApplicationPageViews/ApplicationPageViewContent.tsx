import { ApplicationPageView, IApplication } from "../../../interfaces";
import { Alerts } from "./Alerts";
import { Environment } from "./Environment";
import { Events } from "./Events";
import { Overview } from "./Overview";
import React from "react";

export function ApplicationPageViewContent({
  pageView,
  setView,
  app,
}: {
  pageView: ApplicationPageView;
  setView: (newView: ApplicationPageView) => void;
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
