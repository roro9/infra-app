import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  AlertIcon,
  BuildIcon,
  MonitorIcon,
  StatusRoundIcon,
  TimeIcon,
} from "../../icons";

export type View = "overview" | "env" | "alerts" | "events";

interface IView {
  id: View;
  label: string;
  IconComponent: JSX.Element;
  showNotification?: boolean;
}

const ViewMeta: Record<View, IView> = {
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

const ALL_VIEWS: IView[] = [
  ViewMeta.overview,
  ViewMeta.env,
  ViewMeta.alerts,
  ViewMeta.events,
];

export function ApplicationPageViewSelector({
  value,
  setValue,
}: {
  value: View;
  setValue: (newValue: View) => void;
}) {
  console.log({ ALL_VIEWS });

  return (
    <Tabs
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      TabIndicatorProps={{
        style: { display: "none" },
      }}
      textColor="inherit"
    >
      {ALL_VIEWS.map((v) => (
        <Tab
          key={v.id}
          value={v.id}
          label={
            <span className="relative">
              {v.label}
              {v.showNotification && (
                <span className="absolute scale-75 right-[-12px] top-[-7px] text-primary-red">
                  <StatusRoundIcon />
                </span>
              )}
            </span>
          }
          icon={<span className="mr-0.5">{v.IconComponent}</span>}
          iconPosition="start"
          sx={{
            textTransform: "none",
            paddingLeft: 0,
            paddingRight: 5,
          }}
          disableRipple
        />
      ))}
    </Tabs>
  );
}
