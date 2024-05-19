import { SeriesOptionsType } from "highcharts";
import { AppQueryPath, useAppQuery, useAppState } from "../../../hooks";
import { LineChart } from "../../LineChart";
import { IApplication } from "../../../redux/slices/applicationsSlice";
import React from "react";

interface IMemoryData {
  id: number;
  applicationId: string;
  memoryUtilization: string;
  timestamp: `${EpochTimeStamp}`;
}

export function MemoryView() {
  const apps = useAppState((s) => s.applications);

  const { error, isPending, data } = useAppQuery({
    path: AppQueryPath.MEMORY_UTILIZATION,
  });

  const memoryData = data as undefined | IMemoryData[];

  const getSeriesData = ({
    memoryData,
    apps,
  }: {
    memoryData: IMemoryData[];
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

  const series = getSeriesData({ memoryData: memoryData || [], apps });

  console.log({ series });

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
            title: {
              text: "Memory",
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
