import { AppQueryPath, useAppQuery, useAppState } from "../../../hooks";
import { ILineChartSeries, LineChart } from "../../LineChart";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import React, { useMemo } from "react";

interface IMemoryData {
  id: number;
  applicationId: string;
  memoryUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}

const getSeriesData = ({
  memoryData,
  apps,
}: {
  memoryData: IMemoryData[];
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

  memoryData.forEach((mD) => {
    const { applicationId, timestamp, memoryUtilization } = mD;
    const dataMapKey = Number(applicationId);
    if (dataMap[dataMapKey]) {
      dataMap[dataMapKey].data.push({
        x: Number(timestamp),
        y: Number(memoryUtilization),
      });
    }
  });

  apps.forEach((a) => {
    const appSeriesData = dataMap[a.id];
    result.push(appSeriesData);
  });

  return result;
};

export function MemoryView() {
  const apps = useAppState((s) => s.applications);

  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.MEMORY_UTILIZATION,
  });

  const memoryData = data as undefined | IMemoryData[];

  const series = useMemo(
    () => getSeriesData({ memoryData: memoryData || [], apps }),
    [memoryData, apps]
  );

  console.log({ series });

  return (
    <div>
      {error ? (
        "Error"
      ) : isPending ? (
        "Loading..."
      ) : (
        <LineChart titleText="Memory Utilization (%)" series={series} />
      )}
    </div>
  );
}
