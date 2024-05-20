import cx from "classnames";
import React from "react";

export function SidebarRouteBetaTag() {
  return (
    <span
      className={cx(
        "px-1.5 py-0.5",
        "text-primary-purple-sidebar-text",
        "text-xs",
        "font-light",
        "rounded-[3px]",
        "bg-primary-purple-sidebar-beta-tag-bg"
      )}
    >
      Beta
    </span>
  );
}
