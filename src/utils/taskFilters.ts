import { isSameDay } from 'date-fns';
import { Task } from '../types';

export function filterTasksByDate(tasks: Task[], date: Date): Task[] {
  return tasks.filter(task => task.startTime && isSameDay(task.startTime, date));
}