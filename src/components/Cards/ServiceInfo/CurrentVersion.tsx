import { CheckIcon } from "../../../icons";
import { IApplication } from "../../../interfaces";
import { LabelWrapper } from "../../LabelWrapper";
import React from "react";

function isValidVersion(val: string): boolean {
  const parts = val.split(".");
  return parts.length > 0 && parts.every((part) => !isNaN(Number(part)));
}

export const getRenderValue = (val: string) =>
  isValidVersion(val) ? val : null;

export function CurrentVersion({ app }: { app: IApplication }) {
  const { version, desiredVersion } = app;

  const renderCurrentVersion = getRenderValue(version);
  const renderDesiredVersion = getRenderValue(desiredVersion);

  const isInSync =
    renderCurrentVersion !== null &&
    renderDesiredVersion !== null &&
    renderCurrentVersion === renderDesiredVersion;

  return (
    <LabelWrapper label="Current Version">
      {isInSync ? (
        <span className="inline-flex items-center gap-2">
          <span className="text-primary-green">
            <CheckIcon />
          </span>
          <span className="text-base font-medium	">In sync</span>
        </span>
      ) : (
        <span className="text-base	font-medium	">
          {renderCurrentVersion || "-"}
        </span>
      )}
    </LabelWrapper>
  );
}
