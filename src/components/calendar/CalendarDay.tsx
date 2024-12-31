import React from 'react';
import { format } from 'date-fns';
import { CalendarEvent, Task, User } from '../../types';
import { TaskEvent } from './TaskEvent';

interface CalendarDayProps {
  date: Date;
  events: CalendarEvent[];
  tasks: Task[];
  users: User[];
  onEventClick: (event: CalendarEvent) => void;
  isCurrentMonth: boolean;
}

export function CalendarDay({ 
  date, 
  events, 
  tasks, 
  users, 
  onEventClick,
  isCurrentMonth 
}: CalendarDayProps) {
  const dayTasks = tasks.filter(task => 
    format(task.dueDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  return (
    <div className={`min-h-[120px] p-2 border ${!isCurrentMonth ? 'bg-gray-50' : ''}`}>
      <div className={`text-sm ${!isCurrentMonth ? 'text-gray-400' : 'text-gray-700'}`}>
        {format(date, 'd')}
      </div>
      <div className="space-y-1 mt-1">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onEventClick(event)}
            className="w-full text-left text-xs p-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
          >
            {format(event.start, 'HH:mm')} - {event.title}
          </button>
        ))}
        {dayTasks.map((task) => (
          <TaskEvent
            key={task.id}
            task={task}
            user={users.find(u => u.id === task.assignedTo)!}
          />
        ))}
      </div>
    </div>
  );
}