export const handleResultFormatValidation = (result: string, resultFormat: string) => {
  if (resultFormat === 'time') {
    const [hours, minutes, seconds] = result.split(':');
    if (hours.length !== 2 || minutes.length !== 2 || seconds.length !== 2) {
      return false;
    }
    if (Number(hours) > 23 || Number(minutes) > 59 || Number(seconds) > 59) {
      return false;
    }
    return true;
  } else {
    return !isNaN(Number(result));
  }
};
