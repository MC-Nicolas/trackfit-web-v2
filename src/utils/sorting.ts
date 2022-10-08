import { formatFRDateToNewDate, formatIdToDate } from './format';

export const sortByDate = (elementsToFormat: any[], fromId?: boolean) => {
  elementsToFormat.sort((a, b) => {
    if (fromId) {
      console.log(new Date(formatIdToDate(a.id)).getTime());
      console.log(new Date(formatIdToDate(b.id)).getTime());
      return new Date(formatIdToDate(a.id)).getTime() - new Date(formatIdToDate(b.id)).getTime();
    } else {
      return (
        new Date(formatFRDateToNewDate(a.date)).getTime() -
        new Date(formatFRDateToNewDate(b.date)).getTime()
      );
    }
  });
  return elementsToFormat;
};
