import { formatIdToDate, fromSecondsToTime } from '@/utils/format';

export interface seriesType {
  name: string;
  data: number[];
}

export type xAxisType = [{ categories: string[] }];

export const generateConfig = (
  data: {
    name: string;
    id: string;
    result: number;
  }[],
  by: string
): { series: seriesType; xAxis: xAxisType; tooltip: any } => {
  const tooltip = generateTooltip(by);
  const series: seriesType = {
    name: 'Results',
    data: [],
  };
  const xAxis: xAxisType = [{ categories: [] }];
  data.forEach((item) => {
    series.data.push(item.result);
    xAxis[0].categories.push(formatIdToDate(item.id));
  });
  return { series, xAxis, tooltip };
};

export const generateTooltip = (type: string) => {
  switch (type) {
    case 'distance':
    case 'cal':
      return {
        //@ts-ignore
        formatter: function () {
          return (
            //@ts-ignore
            '<br /><b>Date : ' + this.x + '<br/>Result :</b> ' + fromSecondsToTime(this.y)
          );
        },
      };
    default:
      return {
        //@ts-ignore
        formatter: function () {
          return (
            //@ts-ignore
            '<br /><b>Date : ' + this.x + '<br/>Result :</b> ' + this.y
          );
        },
      };
  }
};
