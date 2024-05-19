import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export type View = "cpu" | "memory";

interface IView {
  id: View;
  label: string;
}

const ViewMeta: Record<View, IView> = {
  cpu: { id: "cpu", label: "CPU" },
  memory: { id: "memory", label: "Memory" },
};

const ALL_VIEWS: IView[] = [ViewMeta.cpu, ViewMeta.memory];

export function MetricSelector({
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
        variant="fullWidth"
      >
        {ALL_VIEWS.map((v) => (
          <Tab key={v.id} value={v.id} label={v.label} />
        ))}
      </Tabs>
    </div>
  );
}
