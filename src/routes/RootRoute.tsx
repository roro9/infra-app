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

  // console.log({ error, isPending });

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
      <div className="grow">
        <div>
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
