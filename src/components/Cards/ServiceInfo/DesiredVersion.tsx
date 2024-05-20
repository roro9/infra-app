import { IApplication } from "../../../redux/slices/applicationsSlice";
import { LabelWrapper } from "../../LabelWrapper";
import { getRenderValue } from "./CurrentVersion";
import React from "react";

export function DesiredVersion({ app }: { app: IApplication }) {
  const { desiredVersion } = app;

  const renderDesiredVersion = getRenderValue(desiredVersion);

  return (
    <LabelWrapper label="Desired Version">
      <span className="text-base	font-medium	">{renderDesiredVersion || ""}</span>
    </LabelWrapper>
  );
}
