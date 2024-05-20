import cx from "classnames";
import { NavLink, To } from "react-router-dom";
import React from "react";

export function SidebarNavLink({
  to,
  children,
  className,
  disableActiveClasses,
}: {
  to: To;
  children: string | JSX.Element;
  className?: string;
  disableActiveClasses?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "flex",
          "py-2.5 px-3",
          "rounded-md",
          "text-sm",
          "transition",
          {
            "text-white bg-primary-purple-sidebar-selected-route-bg font-semibold":
              isActive && !disableActiveClasses,
            "text-primary-purple-sidebar-text":
              !isActive && !disableActiveClasses,
            "hover:bg-primary-purple-sidebar-selected-route-bg/40":
              !isActive && !disableActiveClasses,
          },
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
