import { StatusRoundIcon } from "../icons";
import { IApplication } from "../redux/slices/applicationsSlice";
import cx from "classnames";
import React from "react";

const statusTextMap: Record<IApplication["status"], string> = {
  deployed: "Deployed",
  uninstalled: "Un-installed",
};

const colorClassMap: Record<IApplication["status"], string> = {
  deployed: "text-primary-green border-primary-green bg-primary-green/5",
  uninstalled: "text-primary-pink border-primary-pink bg-primary-pink/5",
};

export function StatusBadge({ status }: { status: IApplication["status"] }) {
  const classes = cx(
    "inline-flex flex-row gap-1 items-center",
    "select-none",
    "py-1 pr-2 pl-1",
    "border",
    "rounded-md",
    "text-sm",
    colorClassMap[status]
  );

  return (
    <div className={classes}>
      <StatusRoundIcon />
      <span>{statusTextMap[status]}</span>
    </div>
  );
}
