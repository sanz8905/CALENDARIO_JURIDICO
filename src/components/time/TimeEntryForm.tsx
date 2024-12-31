import React, { useState } from 'react';
import { TimeEntry, Task } from '../../types';

interface TimeEntryFormProps {
  userId: string;
  tasks: Task[];
  onSubmit: (entry: TimeEntry) => void;
}

export default function TimeEntryForm({ userId, tasks, onSubmit }: TimeEntryFormProps) {
  const [taskId, setTaskId] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      userId,
      taskId,
      date: new Date(),
      duration: parseInt(duration),
      description
    });
    setTaskId('');
    setDuration('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">TAREA</label>
        <select
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="">SELECCIONA UNA TAREA...</option>
          {tasks.map((task) => (
            <option key={task.id} value={task.id}>{task.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">DURACIÓN (min.)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">DESCRIPCIÓN</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Log TIEMPO
      </button>
    </form>
  );
}