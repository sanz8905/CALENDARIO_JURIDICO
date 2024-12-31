import React, { useState } from 'react';
import { Task } from '../../types';
import { format } from 'date-fns';
import { TaskActions } from './TaskActions';
import { TimeAssignmentModal } from './TimeAssignmentModal';

interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export default function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [showTimeModal, setShowTimeModal] = useState(false);

  const statusColors = {
    PENDIENTE: 'bg-yellow-100 text-yellow-800',
    'EN PROCESO': 'bg-blue-100 text-blue-800',
    COMPLETADA: 'bg-green-100 text-green-800'
  };

  const handleStatusChange = (newStatus: Task['status']) => {
    onUpdate({
      ...task,
      status: newStatus
    });
  };

  const handleTimeAssign = (startTime: Date, duration: number) => {
    onUpdate({
      ...task,
      startTime,
      duration
    });
  };

  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{task.title}</h3>
        <div className="flex items-center space-x-3">
          <select
            value={task.status}
            onChange={(e) => handleStatusChange(e.target.value as Task['status'])}
            className={`px-2 py-1 rounded-full text-xs ${statusColors[task.status]}`}
          >
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="EN PROCESO">EN PROCESO</option>
            <option value="COMPLETADA">COMPLETADA</option>
          </select>
          <TaskActions
            onDelete={() => onDelete(task.id)}
            onTimeAssign={() => setShowTimeModal(true)}
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{task.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>VENCE: {format(task.dueDate, 'MMM d, yyyy')}</p>
        {task.startTime && (
          <p>PROGRAMADO: {format(task.startTime, 'MMM d, yyyy HH:mm')} ({task.duration}h)</p>
        )}
        <p>PRIORIDAD: {task.priority}</p>
      </div>

      {showTimeModal && (
        <TimeAssignmentModal
          task={task}
          onAssign={handleTimeAssign}
          onClose={() => setShowTimeModal(false)}
        />
      )}
    </div>
  );
}