import { Error } from "../../Error";
import { Loading } from "../../Loading";
import { NoData } from "../../NoData";
import React from "react";

export function EventHistoryState({
  type,
}: {
  type: "error" | "is-loading" | "no-data";
}) {
  return (
    <div className="h-[375px] flex justify-center items-center">
      {type === "error" && <Error msg="Events data error" />}
      {type === "is-loading" && <Loading msg="Loading events data" />}
      {type === "no-data" && <NoData msg="No events data" />}
    </div>
  );
}
