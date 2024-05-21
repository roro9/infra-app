import { StatusRoundIcon } from "../icons";
import { IApplication } from "../redux/slices/applicationsSlice";
import cx from "classnames";
import React from "react";
import { IEvent } from "./Cards/EventHistory/EventHistory";

type Status = IEvent["status"] | IApplication["status"];

const statusTextMap: Record<Status, string> = {
  deployed: "Deployed",
  uninstalled: "Un-installed",
  successful: "Successful",
  failed: "Failed",
  inprogress: "In Progress",
};

const colorClassMap: Record<Status, string> = {
  deployed: "text-primary-green border-primary-green bg-primary-green/5",
  uninstalled: "text-primary-pink border-primary-pink bg-primary-pink/5",
  successful: "text-primary-green border-primary-green bg-primary-green/5",
  failed: "text-primary-red border-primary-red bg-primary-red/5",
  inprogress: "text-primary-yellow border-primary-yellow bg-primary-yellow/5",
};

export function StatusBadge({ status }: { status: Status }) {
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
