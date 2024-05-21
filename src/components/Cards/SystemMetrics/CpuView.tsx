import { AppQueryPath, useAppQuery, useAppState } from "../../../hooks";
import { ILineChartSeries, LineChart } from "../../LineChart";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import React, { useMemo } from "react";

interface ICpuData {
  id: number;
  applicationId: string;
  cpuUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}

const getSeriesData = ({
  cpuData,
  apps,
}: {
  cpuData: ICpuData[];
  apps: IApplication[];
}) => {
  const result: ILineChartSeries[] = [];

  const dataMap: Record<IApplication["id"], ILineChartSeries> = {};

  apps.forEach((a) => {
    dataMap[a.id] = {
      name: a.name,
      data: [],
    };
  });

  cpuData.forEach((cD) => {
    const { applicationId, timestamp, cpuUtilization } = cD;
    const dataMapKey = Number(applicationId);
    if (dataMap[dataMapKey]) {
      dataMap[dataMapKey].data.push({
        x: Number(timestamp),
        y: Number(cpuUtilization),
      });
    }
  });

  apps.forEach((a) => {
    const appSeriesData = dataMap[a.id];
    result.push(appSeriesData);
  });

  return result;
};

export function CpuView() {
  const apps = useAppState((s) => s.applications);

  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.CPU_UTILIZATION,
  });

  const cpuData = data as undefined | ICpuData[];

  const series = useMemo(
    () => getSeriesData({ cpuData: cpuData || [], apps }),
    [cpuData, apps]
  );

  return (
    <div>
      {error ? (
        "Error"
      ) : isPending ? (
        "Loading..."
      ) : (
        <LineChart titleText="CPU Utilization (%)" series={series} />
      )}
    </div>
  );
}
