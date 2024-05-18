import cx from "classnames";
import React from "react";
import { useMemo } from "react";
import { ALL_ROUTES_META, RoutePath, RouteType } from "../../constants";
import { SidebarNavLink } from "./SidebarNavLink";

export function Sidebar() {
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
        "h-screen",
        "min-w-[220px] max-w-[220px]",
        "border-r",
        "flex flex-col"
      )}
    >
      <SidebarNavLink to={RoutePath.ROOT}>Kapstan</SidebarNavLink>

      <div className="flex flex-col grow justify-between">
        <div className="flex flex-col">
          {primaryRoutes.map((pR, idx) => (
            <SidebarNavLink
              key={pR.path}
              to={pR.path}
              className={cx({
                "border-y": idx === 0,
              })}
            >
              {pR.displayName}
            </SidebarNavLink>
          ))}
        </div>

        <div className="flex flex-col">
          {secondaryRoutes.map((sR) => (
            <SidebarNavLink key={sR.path} to={sR.path}>
              {sR.displayName}
            </SidebarNavLink>
          ))}
          <div className="my-2 py-2 px-4">{"<"}</div>
        </div>
      </div>
    </div>
  );
}
