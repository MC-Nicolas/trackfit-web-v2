import React from 'react';
import BasicChart from './Basic';

import { chartTypes } from './types';

type ChartProps = {
  type: string;
  config: any;
};

const Chart = ({ type, config }: ChartProps) => {
  const chartRenderer = () => {
    switch (type) {
      case chartTypes.BASIC:
        return <BasicChart series={config.series} xAxis={config.xAxis} tooltip={config.tooltip} />;

      default:
        return <p>Error with your chart</p>;
    }
  };
  return chartRenderer();
};

export default Chart;
