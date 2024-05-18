import cx from "classnames";
import { ALL_ROUTES_META, Route, RouteType } from "../../constants";
import { ReactNode, useMemo } from "react";
import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  To,
} from "react-router-dom";

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
