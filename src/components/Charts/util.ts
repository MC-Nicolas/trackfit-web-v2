import { deepCopy, formatIdToDate, fromSecondsToTime } from '@/utils/format';
import { sortByDate } from '@/utils/sorting';

export interface seriesType {
  name: string;
  data: number[];
  [key: string]: any;
}

export type xAxisType = [{ categories: string[] }];

export const generateConfig = (
  data: {
    name: string;
    id: string;
    result: number;
    difficulty: string;
  }[],
  by: string
): { series: seriesType[]; xAxis: xAxisType; tooltip: any } => {
  const tooltip = generateTooltip(by);
  const series: seriesType[] = [
    {
      name: 'Results',
      data: [],
    },
    {
      name: 'Difficulty',
      data: [],
      color: '#d96c00',
    },
  ];
  const xAxis: xAxisType = [{ categories: [] }];
  const d = deepCopy(data);
  sortByDate(d);

  d.forEach((item) => {
    series[0].data.push(item.result);
    series[1].data.push(Number(item.difficulty));
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
