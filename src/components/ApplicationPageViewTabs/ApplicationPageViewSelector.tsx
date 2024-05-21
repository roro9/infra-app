import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { StatusRoundIcon } from "../../icons";
import {
  ALL_APPLICATION_PAGE_VIEWS,
  ApplicationPageView,
} from "../../interfaces";

export function ApplicationPageViewSelector({
  value,
  setValue,
}: {
  value: ApplicationPageView;
  setValue: (newValue: ApplicationPageView) => void;
}) {
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
      {ALL_APPLICATION_PAGE_VIEWS.map((v) => (
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
