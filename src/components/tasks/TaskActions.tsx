import React from 'react';
import { TrashIcon, ClockIcon } from '@heroicons/react/24/outline';

interface TaskActionsProps {
  onDelete: () => void;
  onTimeAssign: () => void;
}

export function TaskActions({ onDelete, onTimeAssign }: TaskActionsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onTimeAssign}
        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
        title="Assign Time"
      >
        <ClockIcon className="h-5 w-5" />
      </button>
      <button
        onClick={onDelete}
        className="p-1 text-red-600 hover:bg-red-50 rounded"
        title="Delete Task"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
}