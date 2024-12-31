import { Task, User } from '../types';
import { format } from 'date-fns';

export interface TaskReportRow {
  titulo: string;
  descripcion: string;
  asignado: string;
  fechaFin: string;
  estatus: string;
  prioridad: string;
}

export function generateTaskReport(tasks: Task[], users: User[]): TaskReportRow[] {
  return tasks.map(task => ({
    titulo: task.title,
    descripcion: task.description,
    asignado: users.find(u => u.id === task.assignedTo)?.name || 'Sin asignar',
    fechaFin: format(task.dueDate, 'dd/MM/yyyy'),
    estatus: task.status,
    prioridad: task.priority
  }));
}