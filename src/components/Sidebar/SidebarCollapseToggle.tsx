import cx from "classnames";
import { DoubleArrowLeftIcon } from "../../icons";
import React from "react";

export function SidebarCollapseToggle({
  isCollapsed,
  handleClick,
}: {
  isCollapsed: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className={cx("hover:bg-primary-purple-sidebar-selected-route-bg/40")}
      onClick={handleClick}
      role="button"
    >
      <button
        className={cx("mx-4 my-2", "py-2.5 px-3", "transition", {
          "scale-[-1]": isCollapsed,
        })}
      >
        <DoubleArrowLeftIcon />
      </button>
    </div>
  );
}
