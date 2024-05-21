import { useLocation } from "react-router-dom";
import { ALL_ROUTES_META } from "../constants";
import React from "react";
import { ComingSoonCard } from "../components/Cards";

export function ComingSoonRoute() {
  const { pathname } = useLocation();
  const routeMeta = ALL_ROUTES_META.find((r) => r.path === pathname);

  console.log({ pathname });
  return (
    <div className="mx-10 my-6">
      <ComingSoonCard title={routeMeta?.displayName} />
    </div>
  );
}
