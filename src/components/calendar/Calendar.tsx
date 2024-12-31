import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth } from 'date-fns';
import { CalendarEvent, Task, User } from '../../types';
import { CalendarDay } from './CalendarDay';
import { CalendarNavigation } from './CalendarNavigation';
import { getCalendarDays } from '../../utils/calendarUtils';

interface CalendarProps {
  events: CalendarEvent[];
  tasks: Task[];
  users: User[];
  onEventClick: (event: CalendarEvent) => void;
}

export function Calendar({ events, tasks, users, onEventClick }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = getCalendarDays(currentDate);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <CalendarNavigation 
        currentDate={currentDate}
        onDateChange={setCurrentDate}
      />
      
      <div className="grid grid-cols-7 gap-px">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="p-4 text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {days.map((day) => (
          <CalendarDay
            key={day.toISOString()}
            date={day}
            events={events.filter(event => 
              format(event.start, 'yyyy-MM-dd') === format(day, 'yyyy-MM-dd')
            )}
            tasks={tasks}
            users={users}
            onEventClick={onEventClick}
            isCurrentMonth={day.getMonth() === currentDate.getMonth()}
          />
        ))}
      </div>
    </div>
  );
}