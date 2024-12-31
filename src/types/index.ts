export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ABOGADO' | 'AUXILIAR' | 'GERENTE';
}

export interface Task {
  id: string;
  TITULO: string;
  DESCRIPCIÓN: string;
  ASIGNACIÓN: string;
  FECHA_FIN: Date;
  FECHA_INICIO?: Date; // Added for timeline
  DURANCIÓN?: number; // Added for timeline (in hours)
  ESTATUS: 'PENDIENTE' | 'EN PROCESO' | 'COMPLETADA';
  PRIORIDAD: 'BAJA' | 'MEDIA' | 'ALTA';
}