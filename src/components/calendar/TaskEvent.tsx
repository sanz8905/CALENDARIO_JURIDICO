import React from 'react';
import { Task, User } from '../../types';

interface TaskEventProps {
  task: Task;
  user: User;
}

export function TaskEvent({ task, user }: TaskEventProps) {
  const priorityColors = {
    BAJO: 'bg-green-100 text-green-800',
    MEDIO: 'bg-yellow-100 text-yellow-800',
    ALTO: 'bg-red-100 text-red-800'
  };

  return (
    <div className={`p-1 rounded ${priorityColors[task.priority]} text-xs`}>
      <div className="font-medium">{task.title}</div>
      <div className="text-xs opacity-75">{user.name}</div>
    </div>
  );
}