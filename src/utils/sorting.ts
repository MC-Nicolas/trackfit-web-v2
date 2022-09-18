import { formatFRDateToNewDate } from './format';

export const sortByDate = (elementsToFormat: any[]) => {
  elementsToFormat.sort((a, b) => {
    return (
      new Date(formatFRDateToNewDate(a.date)).getTime() -
      new Date(formatFRDateToNewDate(b.date)).getTime()
    );
  });
  return elementsToFormat;
};
