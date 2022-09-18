export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export const removeSpecialChars = (str: string) => {
  return str.replace(/[^\w\s]/gi, '').toLowerCase();
};

export const isEmpty = (strings: string[]) => {
  return strings.some((str) => str.trim() === '');
};

export const fromNameToOption = (data: { name: string }[]) => {
  return data.map((item) => item.name);
};

export const manageSingleNumber = (number: number, zeroPosition?: 'right' | 'left'): string => {
  if (number > 9) return number.toString();
  if (zeroPosition === 'right') {
    return `${number}0`;
  }
  return `0${number}`;
};

export const fromSecondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secondsLeft = seconds - hours * 3600 - minutes * 60;
  return `${manageSingleNumber(hours)}:${manageSingleNumber(minutes)}:${manageSingleNumber(
    secondsLeft
  )}`;
};

export const formatFRDateToNewDate = (date: string | number) => {
  if (typeof date === 'number') return date;
  const dateArray = date.split('/');
  return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};

export const formatIdToDate = (id: string): string => {
  return `${id.slice(0, 2)}/${id.slice(2, 4)}/${id.slice(4, 8)}`;
};
