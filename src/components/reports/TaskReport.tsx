import React from 'react';
import { TaskTable } from './TaskTable';
import { TaskFilter } from './TaskFilter';
import { useTaskQuery } from '../../hooks/useTaskQuery';
import { Task, User } from '../../types';
import { generateTaskReport } from '../../utils/reportGenerators';
import { convertToCSV, downloadCSV } from '../../utils/csvExport';

interface TaskReportProps {
  tasks: Task[];
  users: User[];
}

export function TaskReport({ tasks, users }: TaskReportProps) {
  const { filteredTasks, filters, setFilters } = useTaskQuery(tasks);

  const handleExportCSV = () => {
    const reportData = generateTaskReport(filteredTasks, users);
    const headers = {
      titulo: 'TITULO',
      descripcion: 'DESCRIPCIÓN',
      asignado: 'ASIGNADO A',
      fechaFin: 'FECHA FIN',
      estatus: 'ESTATUS',
      prioridad: 'PRIORIDAD'
    };
    
    const csvContent = convertToCSV(reportData, headers);
    downloadCSV(csvContent, `reporte-tareas-${new Date().toISOString().split('T')[0]}.csv`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Reporte de Tareas</h2>
        <button
          onClick={handleExportCSV}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Exportar CSV
        </button>
      </div>
      
      <TaskFilter 
        users={users}
        filters={filters}
        onFilterChange={setFilters}
      />
      <TaskTable 
        tasks={filteredTasks}
        users={users}
      />
    </div>
  );
}