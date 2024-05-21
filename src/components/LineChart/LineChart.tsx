import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { cloneDeep } from "lodash";
import React, { useMemo } from "react";
import { getLineChartTimestampLabel } from "../../utils";
import { LineChartState } from "./LineChartState";

export interface ILineChartSeries {
  name: string;
  data: { x: number; y: number }[];
}

export interface LineChartProps {
  titleText: string;
  series: ILineChartSeries[];
  error: boolean;
  isLoading: boolean;
}

export function LineChart({
  titleText,
  series,
  error,
  isLoading,
}: LineChartProps) {
  const options = useMemo(
    (): Highcharts.Options => ({
      chart: {
        height: "350px",
      },
      credits: {
        enabled: false,
      },
      legend: {
        align: "left",
        itemMarginTop: 15,
        itemMarginBottom: 0,
        x: 35,
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false,
          },
          legendSymbol: "rectangle",
        },
      },
      xAxis: {
        type: "datetime",
        tickLength: 0,
        labels: {
          distance: 25,
          style: {
            opacity: 0.75,
          },
          formatter: (e) => {
            return getLineChartTimestampLabel(Number(e.value));
          },
        },
        lineColor: "#EBEBEB",
      },
      title: {
        text: titleText,
        align: "left",
        style: {
          fontSize: "14px",
        },
        margin: 25,
      },
      series: cloneDeep(series).map((s) => ({ type: "line", ...s })),
      yAxis: {
        title: {
          text: "",
        },
        gridLineColor: "#F8F8F8",
      },
      tooltip: {
        dateTimeLabelFormats: {
          millisecond: "%e %b %l:%M %p", // partially incorrect (not multiplying with *1000 over here for now, whereas doing it for x axis labels)
        },
        headerFormat:
          '<div style="width: 150px; margin-bottom: 5px;"><span style="font-size: 1em; font-weight: 500;">{point.key}</span></div>',
        pointFormat: `<span style="color:{point.color}; font-size: 15px">●</span> <span style="opacity: 0.7;">{series.name}</span> <span style="float: right; font-weight: 500;">{point.y}%</span><br/>`,
        useHTML: true,
      },
    }),
    [series, titleText]
  );

  return (
    <>
      {error ? (
        <LineChartState type="error" />
      ) : isLoading ? (
        <LineChartState type="is-loading" />
      ) : (
        <HighchartsReact
          highcharts={Highcharts}
          key={JSON.stringify(options)}
          options={options}
        />
      )}
    </>
  );
}
