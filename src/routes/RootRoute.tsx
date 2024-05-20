import cx from "classnames";
import { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, ApplicationSelector, Sidebar } from "../components";
import { RoutePath } from "../constants";
import { useRouteSetup } from "../hooks";
import React from "react";

export function RootRoute() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const data = true;

  const { error, isPending } = useRouteSetup();

  const appBarPrimaryControlToRender = useMemo((): undefined | JSX.Element => {
    if (pathname.includes(RoutePath.APPLICATIONS)) {
      return <ApplicationSelector />;
    } else {
      return undefined;
    }
  }, [pathname]);

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
            <div>Error setting up</div>
          ) : isPending ? (
            <div> Loading </div>
          ) : !data ? (
            <div>No data available</div>
          ) : (
            <>
              <AppBar primary={appBarPrimaryControlToRender} />
              <Outlet />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
