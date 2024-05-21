import { Error } from "../Error";
import { Loading } from "../Loading";
import React from "react";

export function LineChartState({ type }: { type: "error" | "is-loading" }) {
  return (
    <div className="h-[350px] flex justify-center items-center">
      {type === "error" && <Error msg="Chart data error" />}
      {type === "is-loading" && <Loading msg="Loading chart data" />}
    </div>
  );
}
