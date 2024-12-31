import React, { useState } from 'react';
import { Task, User } from '../../types';

interface TaskFormProps {
  users: User[];
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

export function TaskForm({ users, onSubmit, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('MEDIA');
  const [status, setStatus] = useState<Task['status']>('PENDIENTE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      title,
      description,
      assignedTo,
      dueDate: new Date(dueDate),
      status,
      priority
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">TITULO</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      <div>
        <label className="block text-sm font-medium text-gray-700">ESTATUS</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Task['status'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="PENDIENTE">PENDIENTE</option>
          <option value="EN PROCESO">EN PROCESO</option>
          <option value="COMPLETADA">COMPLETADA</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">ASIGNACIÓN</label>
        <select
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="">SELECCIONA USUARIO...</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">FECHA_FIN</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">PRIORIDAD</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Task['priority'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        >
          <option value="BAJA">BAJA</option>
          <option value="MEDIA">MEDIA</option>
          <option value="ALTA">ALTA</option>
        </select>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md hover:bg-gray-50"
        >
          CANCELAR
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          REGISTRAR
        </button>
      </div>
    </form>
  );
}