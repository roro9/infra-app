import { IRouteMeta } from "../../constants";
import { SidebarNavLink } from "./SidebarNavLink";
import cx from "classnames";
import { SidebarRouteIcon } from "./SidebarRouteIcon";
import { SidebarRouteBetaTag } from "./SidebarRouteBetaTag";
import React from "react";

export function SidebarRoutesGroup({
  routes,
  borderOnFirstRoute,
  borderAfterLastRoute,
  hideText,
}: {
  routes: IRouteMeta[];
  borderOnFirstRoute?: boolean;
  borderAfterLastRoute?: boolean;
  hideText: boolean;
}) {
  return (
    <div>
      {routes.map((r, idx) => (
        <div
          key={r.path}
          className={cx("border-primary-purple-sidebar-border", {
            "border-y": borderOnFirstRoute && idx === 0,
            "border-b": borderAfterLastRoute && idx === routes.length - 1,
          })}
        >
          <SidebarNavLink to={r.path} className="mx-4 my-3 h-[40px]">
            <div className="flex items-center gap-4">
              <SidebarRouteIcon path={r.path} />
              {!hideText && (
                <>
                  {r.displayName}
                  {r.isBeta && <SidebarRouteBetaTag />}
                </>
              )}
            </div>
          </SidebarNavLink>
        </div>
      ))}
    </div>
  );
}
