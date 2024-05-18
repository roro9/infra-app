import cx from "classnames";
import { NavLink, To } from "react-router-dom";
import React from "react";

export function SidebarNavLink({
  to,
  children,
  className,
}: {
  to: To;
  children: string;
  className?: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "my-2 py-2 px-4",
          {
            "text-red-500": isActive,
          },
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}
