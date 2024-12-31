import React from 'react';
import { format } from 'date-fns';

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="date"
        value={format(selectedDate, 'yyyy-MM-dd')}
        onChange={(e) => onDateChange(new Date(e.target.value))}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-gray-600">
        {format(selectedDate, 'MMMM d, yyyy')}
      </span>
    </div>
  );
}