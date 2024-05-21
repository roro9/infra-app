import { AlertIcon, BuildIcon, MonitorIcon, TimeIcon } from "../icons";
import React from "react";

export interface IApplication {
  id: number;
  name: string;
  status: "deployed" | "uninstalled";
  version: string;
  updatedAt: `${EpochTimeStamp}`;
  desiredVersion: string;
}

export type ApplicationPageView = "overview" | "env" | "alerts" | "events";

export interface IApplicationPageView {
  id: ApplicationPageView;
  label: string;
  IconComponent: JSX.Element;
  showNotification?: boolean;
}

export const ApplicationPageViewMeta: Record<
  ApplicationPageView,
  IApplicationPageView
> = {
  overview: {
    id: "overview",
    label: "Overview",
    IconComponent: <MonitorIcon />,
  },
  env: {
    id: "env",
    label: "Environment Variables",
    IconComponent: <BuildIcon />,
  },
  alerts: {
    id: "alerts",
    label: "Alerts",
    IconComponent: <AlertIcon />,
    showNotification: true,
  },
  events: { id: "events", label: "Event History", IconComponent: <TimeIcon /> },
};

export const ALL_APPLICATION_PAGE_VIEWS: IApplicationPageView[] = [
  ApplicationPageViewMeta.overview,
  ApplicationPageViewMeta.env,
  ApplicationPageViewMeta.alerts,
  ApplicationPageViewMeta.events,
];

export interface ICpuData {
  id: number;
  applicationId: string;
  cpuUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}
export interface IMemoryData {
  id: number;
  applicationId: string;
  memoryUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}
export interface IApplicationEvent {
  id: number;
  event: string;
  status: "successful" | "failed" | "in_progress";
  version: string;
  timestamp: string;
  applicationId: string;
}
