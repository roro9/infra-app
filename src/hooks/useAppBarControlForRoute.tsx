import { useMemo } from "react";
import { ApplicationSelector } from "../components";
import { RoutePath } from "../constants";
import React from "react";

// Returns the route specific control to show in the appbar.
export const useAppBarControlForRoute = ({
  currentRoutePath,
}: {
  currentRoutePath: null | RoutePath;
}) => {
  const result = useMemo((): undefined | JSX.Element => {
    if (currentRoutePath === RoutePath.APPLICATIONS) {
      return <ApplicationSelector />;
    } else {
      return undefined;
    }
  }, [currentRoutePath]);

  return result;
};
