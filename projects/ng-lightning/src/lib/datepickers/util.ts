export interface NglInternalDate {
  year: number;
  month: number;
  day: number;
  disabled?: boolean;
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

export function isDisabled(d: NglInternalDate, disabledCallback: (d: Date) => boolean): boolean {
  const date = new Date(d.year, d.month, d.day);
  return (disabledCallback && disabledCallback(date));
}
