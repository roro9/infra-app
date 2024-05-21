import { ILineChartSeries } from "../components/LineChart";
import {
  IApplication,
  ICpuData,
  IMemoryData,
  isICpuData,
  isIMemoryData,
} from "../interfaces";

export const getSystemMetricsChartSeriesData = ({
  data,
  apps,
}: {
  data: (IMemoryData | ICpuData)[];
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

  data.forEach((d) => {
    const { applicationId, timestamp } = d;

    const utilization = isICpuData(d)
      ? d.cpuUtilization
      : isIMemoryData(d)
      ? d.memoryUtilization
      : 0;

    const dataMapKey = Number(applicationId);

    if (dataMap[dataMapKey]) {
      dataMap[dataMapKey].data.push({
        x: Number(timestamp),
        y: Number(utilization),
      });
    }
  });

  apps.forEach((a) => {
    const appSeriesData = dataMap[a.id];
    result.push(appSeriesData);
  });

  return result;
};
