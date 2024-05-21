import cx from "classnames";
import { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  ApplicationSelector,
  RouteState,
  Sidebar,
} from "../components";
import { RoutePath } from "../constants";
import { useRouteSetup } from "../hooks";
import React from "react";
import { useRoutePath } from "../hooks/useRoutePath";

export function RootRoute() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = useRoutePath();

  const { error, isPending } = useRouteSetup();

  const appBarRouteControl = useMemo((): undefined | JSX.Element => {
    if (path === RoutePath.APPLICATIONS) {
      return <ApplicationSelector />;
    } else {
      return undefined;
    }
  }, [path]);

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
              <AppBar primary={appBarRouteControl} />
              <Outlet />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
