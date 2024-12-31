import React from 'react';
import { TimeEntry } from '../../types';
import { format } from 'date-fns';

interface TimeEntryListProps {
  entries: TimeEntry[];
}

export default function TimeEntryList({ entries }: TimeEntryListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{entry.description}</p>
              <p className="text-sm text-gray-500">
                {format(entry.date, 'MMM d, yyyy HH:mm')}
              </p>
            </div>
            <span className="text-sm font-medium">
              {entry.duration} minutos
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}