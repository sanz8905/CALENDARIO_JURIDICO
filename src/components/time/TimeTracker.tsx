import React, { useState } from 'react';
import { TimeEntry, Task } from '../../types';
import TimeEntryForm from './TimeEntryForm';
import TimeEntryList from './TimeEntryList';

interface TimeTrackerProps {
  userId: string;
  tasks: Task[];
  onTimeEntryAdd: (entry: TimeEntry) => void;
}

export function TimeTracker({ userId, tasks, onTimeEntryAdd }: TimeTrackerProps) {
  const [entries, setEntries] = useState<TimeEntry[]>([]);

  const handleAddEntry = (entry: TimeEntry) => {
    onTimeEntryAdd(entry);
    setEntries([...entries, entry]);
  };

  return (
    <div className="space-y-6">
      <TimeEntryForm
        userId={userId}
        tasks={tasks}
        onSubmit={handleAddEntry}
      />
      <TimeEntryList entries={entries} />
    </div>
  );
}