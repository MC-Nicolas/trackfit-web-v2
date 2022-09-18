import React, { useEffect, useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

import { options } from './options';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

const BasicChart = ({ series, xAxis, tooltip }: any) => {
  const [highchartOptions, setHighchartOptions] = useState<any>(options);

  useEffect(() => {
    setHighchartOptions({
      ...options,
      series,
      xAxis,
      tooltip,
    });
  }, [series, xAxis, tooltip]);

  return <HighchartsReact highcharts={Highcharts} options={highchartOptions} />;
};

export default BasicChart;
