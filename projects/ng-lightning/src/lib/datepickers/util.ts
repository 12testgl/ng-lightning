export interface NglInternalDate {
  year: number;
  month: number;
  day: number;
  disabled?: boolean;
}

export function parseDate(date: Date): NglInternalDate {
  if (!date) { return null; }
  return { year: date.getFullYear(), month: date.getMonth(), day: date.getDate() };
}

export function isEqualDate(d1: NglInternalDate, d2: NglInternalDate) {
  return d1 && d2 && d1.day === d2.day && d1.month === d2.month && d1.year === d2.year;
}

export function getToday(): NglInternalDate {
  const today = new Date();
  return { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() };
}

export function numberOfDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

  // Split array into smaller arrays
export function split(arr: any[], size = 7) {
  const arrays: any[] = [];
  while (arr.length > 0) {
    arrays.push(arr.splice(0, size));
  }
  return arrays;
}

export function isDisabled(d: NglInternalDate, disabledCallback: (d: Date) => boolean, min: NglInternalDate, max: NglInternalDate): boolean {
  const date = new Date(d.year, d.month, d.day);
  return (disabledCallback && disabledCallback(date)) ||
    (min && compareDate(d, min) < 0) ||
    (max && compareDate(d, max) > 0);
}

export function compareDate(d1: NglInternalDate, d2: NglInternalDate) {
  if (isEqualDate(d1, d2)) {
    return 0;
  }
  const keys = ['year', 'month', 'day'];
  for (let i = 0; i < 3; i++) {
    const key = keys[i];
    const diff = d1[key] - d2[key];
    if (diff !== 0) {
      return diff > 0 ? 1 : -1;
    }
  }
  return 0;
}

export function isSameMonth(d1: NglInternalDate, d2: NglInternalDate): boolean {
  return d1.year === d2.year && d1.month === d2.month;
}
