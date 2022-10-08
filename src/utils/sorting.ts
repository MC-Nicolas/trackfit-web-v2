import { formatFRDateToNewDate, formatIdToDate } from './format';

export const sortByDate = (elementsToFormat: any[], fromId?: boolean) => {
  elementsToFormat.sort((a, b) => {
    if (fromId) {
      return (
        new Date(formatFRDateToNewDate(formatIdToDate(a.id))).getTime() -
        new Date(formatFRDateToNewDate(formatIdToDate(b.id))).getTime()
      );
    } else {
      return (
        new Date(formatFRDateToNewDate(a.date)).getTime() -
        new Date(formatFRDateToNewDate(b.date)).getTime()
      );
    }
  });
  return elementsToFormat;
};
