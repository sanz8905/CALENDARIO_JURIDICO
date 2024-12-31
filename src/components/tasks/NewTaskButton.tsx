import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface NewTaskButtonProps {
  onClick: () => void;
}

export function NewTaskButton({ onClick }: NewTaskButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      <PlusIcon className="h-5 w-5 mr-2" />
      NUEVA TAREA
    </button>
  );
}