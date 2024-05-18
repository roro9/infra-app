import { useLocation } from "react-router-dom";
import { ALL_ROUTES_META } from "../constants";
import React from "react";

export function ComingSoonRoute() {
  const { pathname } = useLocation();
  const routeMeta = ALL_ROUTES_META.find((r) => r.path === pathname);

  console.log({ pathname });
  return (
    <div>
      {routeMeta && (
        <span className="underline mr-1.5">{routeMeta.displayName}</span>
      )}
      <span>Coming soon</span>
    </div>
  );
}
