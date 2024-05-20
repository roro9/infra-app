import React from "react";

import cx from "classnames";
import { RoutePath } from "../../constants";
import { KapstanIcon } from "../../icons";
import { SidebarNavLink } from "./SidebarNavLink";

export function SidebarHeader({ hideText }: { hideText: boolean }) {
  return (
    <SidebarNavLink to={RoutePath.ROOT} disableActiveClasses>
      <div
        className={cx("text-white", "flex items-center", "gap-3", "mx-2 my-3")}
      >
        <span>
          <KapstanIcon />
        </span>
        {!hideText && <span className={cx("text-2xl")}>Kapstan</span>}
      </div>
    </SidebarNavLink>
  );
}
