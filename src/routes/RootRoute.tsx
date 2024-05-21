import cx from "classnames";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, RouteState, Sidebar } from "../components";
import { RoutePath } from "../constants";
import { useAppBarControlForRoute, useRouteSetup } from "../hooks";
import React from "react";
import { useRoutePath } from "../hooks/useRoutePath";

export function RootRoute() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = useRoutePath();

  const { error, isPending } = useRouteSetup();

  // route specific app bar control
  const appBarControlForRoute = useAppBarControlForRoute({
    currentRoutePath: path,
  });

  // redirect to /applications when landing on root path
  useEffect(() => {
    if (pathname === RoutePath.ROOT) {
      navigate(RoutePath.APPLICATIONS);
    }
  }, [pathname, navigate]);

  return (
    <div className={cx("flex")}>
      <Sidebar />
      <div className="grow bg-primary-gray-page-bg">
        <div className="min-h-screen max-h-screen overflow-auto relative">
          {error ? (
            <RouteState type="error" />
          ) : isPending ? (
            <RouteState type="loading" />
          ) : (
            <>
              <AppBar primary={appBarControlForRoute} />
              <Outlet />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
