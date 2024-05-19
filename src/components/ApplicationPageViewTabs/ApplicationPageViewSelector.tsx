import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export type View = "overview" | "env" | "alerts" | "events";

interface IView {
  id: View;
  label: string;
}

const ViewMeta: Record<View, IView> = {
  overview: { id: "overview", label: "Overview" },
  env: { id: "env", label: "Environment Variables" },
  alerts: { id: "alerts", label: "Alerts" },
  events: { id: "events", label: "Event History" },
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
    <div>
      <Tabs
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        aria-label="basic tabs example"
      >
        {ALL_VIEWS.map((v) => (
          <Tab key={v.id} value={v.id} label={v.label} />
        ))}
      </Tabs>
    </div>
  );
}
