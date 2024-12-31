import React, { useState } from 'react';
import { Task } from '../../types';

interface TimeAssignmentModalProps {
  task: Task;
  onAssign: (startTime: Date, duration: number) => void;
  onClose: () => void;
}

export function TimeAssignmentModal({ task, onAssign, onClose }: TimeAssignmentModalProps) {
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAssign(new Date(startTime), Number(duration));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-medium mb-4">TIEMPO ASIGNADO {task.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">TIEMPO INICIO</label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">DURACIÓN (hrs.)</label>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              CANCELAR
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              ASIGNAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}