import React from 'react';
import { format } from 'date-fns';
import { Task, User } from '../../types';

interface TaskTableProps {
  tasks: Task[];
  users: User[];
}

export function TaskTable({ tasks, users }: TaskTableProps) {
  const getUserName = (userId: string) => {
    return users.find(user => user.id === userId)?.name || 'Unknown';
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TITULO</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ESTATUS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ASIGNACIÓN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">FECHA_FIN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRIORIDAD</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map(task => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{task.title}</div>
                <div className="text-sm text-gray-500">{task.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${task.status === 'COMPLETADA' ? 'bg-green-100 text-green-800' : 
                    task.status === 'EN PROCESO' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {getUserName(task.assignedTo)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(task.dueDate, 'MMM d, yyyy')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${task.priority === 'ALTA' ? 'bg-red-100 text-red-800' : 
                    task.priority === 'MEDIA' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'}`}>
                  {task.priority}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}