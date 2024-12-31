import React from 'react';
import { Task } from '../../types';
import { formatTimeRange } from '../../utils/timeFormatting';
import { calculateTaskPosition, calculateTaskWidth } from '../../utils/timeCalculations';

interface TimelineTaskProps {
  task: Task;
}

export function TimelineTask({ task }: TimelineTaskProps) {
  if (!task.startTime || !task.duration) return null;

  const leftPosition = calculateTaskPosition(task.startTime);
  const width = calculateTaskWidth(task.duration);
  
  const priorityColors = {
    BAJA: 'bg-green-200 border-green-400',
    MEDIA: 'bg-yellow-200 border-yellow-400',
    ALTA: 'bg-red-200 border-red-400'
  };

  return (
    <div
      className={`absolute h-20 px-3 py-2 rounded-lg border-2 ${priorityColors[task.priority]} text-sm hover:shadow-lg transition-shadow`}
      style={{
        left: `${leftPosition}px`,
        width: `${width}px`,
        top: '4px',
      }}
    >
      <div className="font-medium text-base mb-1 truncate">{task.title}</div>
      <div className="text-xs text-gray-700">{task.description}</div>
      <div className="text-xs font-medium mt-1">
        {formatTimeRange(task.startTime, task.duration)}
      </div>
    </div>
  );
}