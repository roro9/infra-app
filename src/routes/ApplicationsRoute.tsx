import { ApplicationPageContent } from "../components/ApplicationPageContent";
import { useAppState } from "../hooks";
import React from "react";

export function ApplicationsRoute() {
  const { appId, applications } = useAppState((s) => s);
  const app = applications.find((a) => a.id === appId);

  return (
    <div className="px-10">
      {!app ? (
        <div>Select an app</div>
      ) : (
        <React.Fragment key={app.id}>
          <ApplicationPageContent app={app} />
        </React.Fragment>
      )}
    </div>
  );
}
