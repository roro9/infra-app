import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { cloneDeep } from "lodash";
import React from "react";

export function LineChart({ options }: { options: Highcharts.Options }) {
  const internalOptions = cloneDeep(options);
  return (
    <HighchartsReact
      highcharts={Highcharts}
      key={JSON.stringify(internalOptions)}
      options={internalOptions}
    />
  );
}
