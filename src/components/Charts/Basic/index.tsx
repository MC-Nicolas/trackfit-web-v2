import React, { useEffect, useState } from 'react';

import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

import { options } from './options';
import { fromSecondsToTime } from '@/utils/format';

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

      // {
      //   //@ts-ignore
      //   formatter: function () {
      //     //@ts-ignore
      //     if (this.series.name === 'Difficulty') {
      //       //@ts-ignore
      //       return '<br /><b>Date : ' + this.x + '<br/>Difficulty :</b> ' + this.y;
      //     } else return tooltip.formatter(this);
      //   },
      // },
    });
  }, [series, xAxis, options]);

  return <HighchartsReact highcharts={Highcharts} options={highchartOptions} />;
};

export default BasicChart;
