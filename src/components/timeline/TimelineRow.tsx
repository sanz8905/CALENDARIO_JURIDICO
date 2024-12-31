import React from 'react';
import { User, Task } from '../../types';
import { TimelineTask } from './TimelineTask';
import { getWorkingIntervals } from '../../utils/timeCalculations';
import { INTERVAL_WIDTH } from '../../utils/timeConstants';

interface TimelineRowProps {
  user: User;
  tasks: Task[];
  selectedDate: Date;
}

export function TimelineRow({ user, tasks, selectedDate }: TimelineRowProps) {
  const intervals = getWorkingIntervals(selectedDate);
  
  return (
    <div className="flex border-b min-h-[100px]">
      <div className="w-48 p-4 border-r bg-gray-50">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm text-gray-500">{user.role}</p>
      </div>
      <div className="flex relative">
        {intervals.map((interval, index) => (
          <div
            key={index}
            className={`border-r ${
              interval.isHalfHour ? 'border-gray-100' : 'border-gray-200'
            }`}
            style={{ width: INTERVAL_WIDTH }}
          />
        ))}
        {tasks.map(task => (
          <TimelineTask
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}