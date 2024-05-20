import cx from "classnames";
import { useMemo, useState } from "react";
import { ALL_ROUTES_META, RouteType } from "../../constants";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarRoutesGroup } from "./SidebarRoutesGroup";
import { SidebarCollapseToggle } from "./SidebarCollapseToggle";
import React from "react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

  const primaryRoutes = useMemo(
    () => ALL_ROUTES_META.filter((r) => r.type === RouteType.PRIMARY),
    []
  );
  const secondaryRoutes = useMemo(
    () => ALL_ROUTES_META.filter((r) => r.type === RouteType.SECONDARY),
    []
  );

  return (
    <div
      className={cx(
        "bg-primary-purple",
        "text-white",
        "h-screen",
        "flex flex-col",
        "overflow-hidden",
        "transition-all",
        {
          "min-w-[220px] max-w-[220px]": !isCollapsed,
          "min-w-[76px] max-w-[76px]": isCollapsed,
        }
      )}
    >
      <SidebarHeader hideText={isCollapsed} />

      <div className="flex flex-col grow">
        {/* Primary routes */}
        <SidebarRoutesGroup
          routes={primaryRoutes}
          borderOnFirstRoute
          borderAfterLastRoute
          hideText={isCollapsed}
        />

        {/* Gap */}
        <div className="grow" />

        {/* Secondary routes */}
        <SidebarRoutesGroup
          routes={secondaryRoutes}
          borderAfterLastRoute
          hideText={isCollapsed}
        />

        {/* Collapse Toggle */}
        <SidebarCollapseToggle
          isCollapsed={isCollapsed}
          handleClick={toggleCollapsed}
        />
      </div>
    </div>
  );
}
