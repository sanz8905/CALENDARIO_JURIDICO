import React from 'react';
import { Task, User } from '../../types';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  user: User;
}

export function TaskCard({ task, user }: TaskCardProps) {
  const priorityColors = {
    BAJA: 'bg-green-100 text-green-800 border-green-200',
    MEDIA: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    ALTA: 'bg-red-100 text-red-800 border-red-200'
  };

  const statusColors = {
    PENDIENTE: 'bg-gray-100 text-gray-800',
    'EN PROCESO': 'bg-blue-100 text-blue-800',
    COMPLETADA: 'bg-emerald-100 text-emerald-800'
  };

  return (
    <div className={`p-4 rounded-lg border ${priorityColors[task.priority]} mb-2`}>
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{task.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
      <p className="text-sm mt-2">{task.description}</p>
      <div className="mt-3 text-sm">
        <div className="flex justify-between items-center">
          <span>Asignado a: {user.name}</span>
          <span>Vence: {format(task.dueDate, 'dd/MM/yyyy')}</span>
        </div>
      </div>
    </div>
  );
}