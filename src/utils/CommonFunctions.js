const dateStructure = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
};

// eslint-disable-next-line import/prefer-default-export
export function parseDate(date) {
  const parsedDate = new Date(date);
  const currentDate = new Date(Date.now());
  let difference =
    Math.abs(currentDate.getTime() - parsedDate.getTime()) / 1000;

  const res = {};

  Object.keys(dateStructure).forEach(key => {
    res[key] = Math.floor(difference / dateStructure[key]);
    difference -= res[key] * dateStructure[key];
  });

  if (res.year > 0) {
    return `${res.year}y`;
  }

  if (res.month > 0) {
    return `${res.month}m`;
  }

  if (res.week > 0) {
    return `${res.week}w`;
  }

  if (res.day > 0) {
    return `${res.day}d`;
  }

  if (res.hour > 0) {
    return `${res.hour}h`;
  }

  if (res.minute > 0) {
    return `${res.minute}mins`;
  }

  return '';
}
