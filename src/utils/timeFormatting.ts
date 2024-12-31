import { format } from 'date-fns';

export function formatHour(date: Date, isHalfHour: boolean): string {
  return isHalfHour ? ':30' : format(date, 'ha');
}

export function formatTimeRange(startTime: Date, duration: number): string {
  const endTime = new Date(startTime.getTime() + duration * 60 * 60 * 1000);
  return `${format(startTime, 'h:mm a')} - ${format(endTime, 'h:mm a')}`;
}