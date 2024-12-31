import React, { useState } from 'react';
import { Task, User } from '../../types';
import { TimelineHeader } from './TimelineHeader';
import { TimelineRow } from './TimelineRow';
import { DateSelector } from './DateSelector';
import { TimelineFilter } from './TimelineFilter';
import { TaskGroup } from './TaskGroup';
import { filterTasksByDate } from '../../utils/taskFilters';
import { useTaskQuery } from '../../hooks/useTaskQuery';

interface TimelineViewProps {
  tasks: Task[];
  users: User[];
}

export function TimelineView({ tasks, users }: TimelineViewProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { filteredTasks, filters, setFilters } = useTaskQuery(tasks);
  const dateFilteredTasks = filterTasksByDate(filteredTasks, selectedDate);

  const urgentTasks = dateFilteredTasks.filter(task => task.priority === 'ALTA');
  const inProgressTasks = dateFilteredTasks.filter(task => task.status === 'EN PROCESO');
  const pendingTasks = dateFilteredTasks.filter(task => task.status === 'PENDIENTE');

  return (
    <div className="space-y-6">
      <TimelineFilter 
        users={users}
        filters={filters}
        onFilterChange={setFilters}
      />
      <DateSelector 
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <TaskGroup
            title="Tareas Urgentes"
            tasks={urgentTasks}
            users={users}
          />
          <TaskGroup
            title="En Proceso"
            tasks={inProgressTasks}
            users={users}
          />
        </div>
        <div>
          <TaskGroup
            title="Pendientes"
            tasks={pendingTasks}
            users={users}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-8">
        <div className="min-w-max bg-white rounded-lg shadow">
          <TimelineHeader selectedDate={selectedDate} />
          {users.map(user => (
            <TimelineRow
              key={user.id}
              user={user}
              tasks={dateFilteredTasks.filter(task => task.assignedTo === user.id)}
              selectedDate={selectedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}