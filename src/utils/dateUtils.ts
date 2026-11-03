export function createDate(year: number, month: number, day: number): Date {
  return new Date(new Date().setFullYear(year, month, day));
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
