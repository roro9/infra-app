import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { cloneDeep } from "lodash";
import React, { useMemo } from "react";
import { getLineChartTimestampLabel } from "../../utils";

export interface ILineChartSeries {
  name: string;
  data: { x: number; y: number }[];
}

export interface LineChartProps {
  titleText: string;
  series: ILineChartSeries[];
}

export function LineChart({ titleText, series }: LineChartProps) {
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
            console.log({ e });
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
    }),
    [series, titleText]
  );

  return (
    <HighchartsReact
      highcharts={Highcharts}
      key={JSON.stringify(options)}
      options={options}
    />
  );
}
