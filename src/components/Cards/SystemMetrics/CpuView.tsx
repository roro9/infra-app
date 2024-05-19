import { AppQueryPath, useAppQuery, useAppState } from "../../../hooks";
import { LineChart } from "../../LineChart";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import { SeriesOptionsType } from "highcharts";
import React from "react";

interface ICpuData {
  id: number;
  applicationId: string;
  cpuUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}

export function CpuView() {
  const apps = useAppState((s) => s.applications);
  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.CPU_UTILIZATION,
  });

  const cpuData = data as undefined | ICpuData[];

  const getSeriesData = ({
    cpuData,
    apps,
  }: {
    cpuData: ICpuData[];
    apps: IApplication[];
  }) => {
    const result: SeriesOptionsType[] = [];

    const dataMap: Record<
      IApplication["id"],
      { type: "line"; name: string; data: { x: number; y: number }[] }
    > = {};

    apps.forEach((a) => {
      dataMap[a.id] = {
        type: "line",
        name: a.name,
        data: [],
      };
    });

    console.log({ dataMap });

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

  const series = getSeriesData({ cpuData: cpuData || [], apps });

  console.log({ data });

  return (
    <div>
      {error ? (
        "Error"
      ) : isPending ? (
        "Loading..."
      ) : (
        <LineChart
          options={{
            chart: {},
            legend: {
              align: "left",
            },
            plotOptions: {
              line: {
                marker: {
                  enabled: false,
                },
              },
            },
            xAxis: {
              type: "datetime",
              dateTimeLabelFormats: {
                day: "%e. %b",
                month: "%b '%y",
                year: "%Y",
              },
            },
            title: {
              text: "Memory",
              align: "left",
            },
            series,
            yAxis: {
              title: {
                text: "",
              },
            },
          }}
        />
      )}
    </div>
  );
}
