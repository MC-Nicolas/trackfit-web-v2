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
    difficulty?: string;
  }[],
  by: string,
  typeOfConfig?: string
): { series: seriesType[]; xAxis: xAxisType; tooltip: any } => {
  if (typeOfConfig === 'measurements') {
    const tooltip = generateTooltip(by);
    const xAxis: xAxisType = [{ categories: [] }];
    const series: seriesType[] = Array.isArray(data[0])
      ? [
          {
            name: 'Right',
            data: [],
          },
          {
            name: 'Left',
            data: [],
          },
        ]
      : [
          {
            name: 'Total',
            data: [],
          },
        ];

    const d = deepCopy(data);

    if (Array.isArray(d[0])) {
      //@ts-ignore
      d.map((s) => sortByDate(s, true));
      d[0].forEach((item: seriesType) => {
        series[0].data.push(item.result);
        xAxis[0].categories.push(formatIdToDate(item.id));
      });

      //@ts-ignore
      d[1].forEach((item: seriesType) => {
        series[1].data.push(item.result);
      });
    } else {
      sortByDate(d, true);
      d.forEach((item) => {
        series[0].data.push(item.result);
        xAxis[0].categories.push(formatIdToDate(item.id));
      });
    }

    return { tooltip, series, xAxis };
  } else {
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
  }
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
