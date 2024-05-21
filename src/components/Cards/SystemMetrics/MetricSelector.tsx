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
  return (
    <Tabs
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      variant="fullWidth"
      textColor="inherit"
      TabIndicatorProps={{
        style: {
          backgroundColor: "#6E27D5",
        },
      }}
      sx={{
        ".Mui-selected": {
          color: `#6E27D5`,
        },
        borderBottom: "1px solid #BDBDBD",
      }}
    >
      {ALL_VIEWS.map((v) => (
        <Tab
          key={v.id}
          value={v.id}
          label={v.label}
          sx={{
            textTransform: "none",
          }}
        />
      ))}
    </Tabs>
  );
}
