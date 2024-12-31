import React from 'react';
import { Task, User } from '../../types';
import { TaskCard } from './TaskCard';

interface TaskGroupProps {
  title: string;
  tasks: Task[];
  users: User[];
}

export function TaskGroup({ title, tasks, users }: TaskGroupProps) {
  if (tasks.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            user={users.find(u => u.id === task.assignedTo)!}
          />
        ))}
      </div>
    </div>
  );
}