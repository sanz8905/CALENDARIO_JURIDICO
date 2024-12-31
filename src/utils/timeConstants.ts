import { addMinutes, setHours } from 'date-fns';

export const WORK_START_HOUR = 7; // 7 AM
export const WORK_END_HOUR = 20; // 8 PM
export const INTERVAL_WIDTH = 45; // Width in pixels for timeline intervals

export interface TimeInterval {
  time: Date;
  isHalfHour: boolean;
}