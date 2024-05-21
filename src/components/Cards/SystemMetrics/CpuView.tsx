import { AppQueryPath, useAppQuery, useAppState } from "../../../hooks";
import { getSystemMetricsChartSeriesData } from "../../../utils";
import { LineChart } from "../../LineChart";
import React, { useMemo } from "react";

export function CpuView() {
  const apps = useAppState((s) => s.applications);

  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.CPU_UTILIZATION,
  });

  const series = useMemo(
    () => getSystemMetricsChartSeriesData({ data: data || [], apps }),
    [data, apps]
  );

  return (
    <LineChart
      titleText="CPU Utilization (%)"
      error={!!error}
      isLoading={isPending}
      series={series}
    />
  );
}
