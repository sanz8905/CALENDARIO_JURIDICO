import React from 'react';
import { getWorkingIntervals } from '../../utils/timeCalculations';
import { formatHour } from '../../utils/timeFormatting';
import { INTERVAL_WIDTH } from '../../utils/timeConstants';

interface TimelineHeaderProps {
  selectedDate: Date;
}

export function TimelineHeader({ selectedDate }: TimelineHeaderProps) {
  const intervals = getWorkingIntervals(selectedDate);

  return (
    <div className="flex border-b sticky top-0 bg-white z-10">
      <div className="w-48 p-4 border-r bg-gray-50">
        <h3 className="font-medium">EQUIPO</h3>
      </div>
      <div className="flex">
        {intervals.map((interval, index) => (
          <div
            key={index}
            className={`border-r text-xs text-center ${
              interval.isHalfHour ? 'text-gray-400 border-gray-200' : 'border-gray-300'
            }`}
            style={{ width: INTERVAL_WIDTH }}
          >
            {formatHour(interval.time, interval.isHalfHour)}
          </div>
        ))}
      </div>
    </div>
  );
}