import React from "react";
import cx from "classnames";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../components";
import { RoutePath } from "../constants";

export function RootRoute() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log({ pathname, root: RoutePath.ROOT });

  useEffect(() => {
    if (pathname === RoutePath.ROOT) {
      navigate(RoutePath.APPLICATIONS);
    }
  }, [pathname]);

  return (
    <div className={cx("flex", "gap-10")}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
