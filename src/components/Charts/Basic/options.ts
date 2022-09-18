import { fromSecondsToTime } from '@/utils/format';

export const options = {
  chart: {
    type: 'line',
    height: 300,
    backgroundColor: 'transparent',
  },
  title: {
    text: 'Your results',
    style: { color: 'white' },
  },

  yAxis: {
    title: {
      text: 'Results ',
    },
  },

  xAxis: {
    categories: [],
  },
  series: [],

  legend: {
    enabled: true,
    itemStyle: { color: 'white' },
  },

  tooltip: {
    //@ts-ignore
    formatter: function () {
      return (
        //@ts-ignore
        '<br /><b>Date : ' + this.x + '<br/>Result :</b> ' + this.y
      );
    },
  },
};
