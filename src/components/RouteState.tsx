import { Loading } from "./Loading";
import { Error } from "./Error";
import { NoData } from "./NoData";
import React from "react";

export function RouteState({
  type,
}: {
  type: "error" | "loading" | "no-data";
}) {
  return (
    <div className="h-screen flex justify-center items-center">
      {type === "error" && <Error msg="Error setting up route config" />}
      {type === "loading" && <Loading msg="Setting up route config" />}
      {type === "no-data" && <NoData msg="No route config available" />}
    </div>
  );
}
