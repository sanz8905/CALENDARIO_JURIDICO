import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CalendarNavigationProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export function CalendarNavigation({ currentDate, onDateChange }: CalendarNavigationProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => onDateChange(subMonths(currentDate, 1))}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      
      <div className="flex items-center space-x-2">
        <select
          value={currentDate.getMonth()}
          onChange={(e) => {
            const newDate = new Date(currentDate);
            newDate.setMonth(parseInt(e.target.value));
            onDateChange(newDate);
          }}
          className="px-2 py-1 border rounded"
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {format(new Date(2024, i, 1), 'MMMM')}
            </option>
          ))}
        </select>
        
        <select
          value={currentDate.getFullYear()}
          onChange={(e) => {
            const newDate = new Date(currentDate);
            newDate.setFullYear(parseInt(e.target.value));
            onDateChange(newDate);
          }}
          className="px-2 py-1 border rounded"
        >
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() - 5 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      <button
        onClick={() => onDateChange(addMonths(currentDate, 1))}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}