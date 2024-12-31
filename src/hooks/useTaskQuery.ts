import { useState, useMemo } from 'react';
import { Task } from '../types';
import { TaskFilters } from '../types/filters';

export function useTaskQuery(tasks: Task[]) {
  const [filters, setFilters] = useState<TaskFilters>({});

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      if (filters.status && task.status !== filters.status) return false;
      if (filters.assignedTo && task.assignedTo !== filters.assignedTo) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      return true;
    });
  }, [tasks, filters]);

  return {
    filteredTasks,
    filters,
    setFilters
  };
}