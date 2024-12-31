import { addMinutes, setHours } from 'date-fns';
import { WORK_START_HOUR, WORK_END_HOUR, INTERVAL_WIDTH, TimeInterval } from './timeConstants';

export function getWorkingIntervals(date: Date): TimeInterval[] {
  const startTime = setHours(date, WORK_START_HOUR);
  const intervals: TimeInterval[] = [];
  
  for (let hour = 0; hour <= (WORK_END_HOUR - WORK_START_HOUR); hour++) {
    intervals.push({
      time: addMinutes(startTime, hour * 60),
      isHalfHour: false
    });
    intervals.push({
      time: addMinutes(startTime, hour * 60 + 30),
      isHalfHour: true
    });
  }
  
  return intervals;
}

export function calculateTaskPosition(startTime: Date): number {
  const hour = startTime.getHours();
  const minutes = startTime.getMinutes();
  const totalMinutes = (hour - WORK_START_HOUR) * 60 + minutes;
  return (totalMinutes / 30) * INTERVAL_WIDTH;
}

export function calculateTaskWidth(duration: number): number {
  return (duration * 60 / 30) * INTERVAL_WIDTH;
}