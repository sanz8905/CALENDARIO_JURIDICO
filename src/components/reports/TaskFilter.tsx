import React from 'react';
import { User } from '../../types';
import { TaskFilters } from '../../types/filters';

interface TaskFilterProps {
  users: User[];
  filters: TaskFilters;
  onFilterChange: (filters: TaskFilters) => void;
}

export function TaskFilter({ users, filters, onFilterChange }: TaskFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <h3 className="font-medium">Filtrar por</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ESTATUS</label>
          <select
            value={filters.status || ''}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value || undefined })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">TODOS LOS ESTATUS</option>
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="EN PROCESO">EN PROCESO</option>
            <option value="TERMINADO">TERMINADO</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">ASIGNACIÓN</label>
          <select
            value={filters.assignedTo || ''}
            onChange={(e) => onFilterChange({ ...filters, assignedTo: e.target.value || undefined })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">TODOS LOS USUARIOS</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">PRIORIDAD</label>
          <select
            value={filters.priority || ''}
            onChange={(e) => onFilterChange({ ...filters, priority: e.target.value || undefined })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">TODAS LAS PRIORIDADES</option>
            <option value="BAJA">BAJA</option>
            <option value="MEDIA">MEDIA</option>
            <option value="ALTA">ALTA</option>
          </select>
        </div>
      </div>
    </div>
  );
}