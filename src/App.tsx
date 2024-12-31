import React, { useState } from 'react';
import { Calendar } from './components/calendar/Calendar';
import { TaskList } from './components/tasks/TaskList';
import { UserList } from './components/users/UserList';
import { TimelineView } from './components/timeline/TimelineView';
import { TaskReport } from './components/reports/TaskReport';
import { User, Task, CalendarEvent } from './types';

export function App() {
  const [selectedTab, setSelectedTab] = useState('REGISTRAR TAREAS');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Review Contract',
      description: 'Review and annotate client contract',
      assignedTo: '1',
      dueDate: new Date('2024-01-05'),
      startTime: new Date('2024-01-05T09:00:00'),
      duration: 2,
      status: 'pending',
      priority: 'high'
    }
  ]);

  const users: User[] = [
    { id: '1', name: 'ZULEMA VAZQUEZ', email: 'john@law.com', role: 'ABOGADO' },
    { id: '2', name: 'KAREN GONZALEZ', email: 'jane@law.com', role: 'AUXILIAR' }
  ];

  const events: CalendarEvent[] = [
    {
      id: '1',
      title: 'Client Meeting',
      start: new Date('2024-01-03T10:00:00'),
      end: new Date('2024-01-03T11:00:00'),
      attendees: ['1', '2'],
      location: 'Conference Room A'
    }
  ];

  const handleTaskCreate = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            {['AGENDA', 'CALENDARIO', 'REGISTRAR TAREAS', 'USUARIOS', 'REPORTES'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-2 border-b-2 ${
                  selectedTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {selectedTab === 'AGENDA' && (
          <TimelineView tasks={tasks} users={users} />
        )}
        {selectedTab === 'CALENDARIO' && (
          <Calendar
            events={events}
            tasks={tasks}
            users={users}
            onEventClick={(event) => console.log('Event clicked:', event)}
          />
        )}
        {selectedTab === 'REGISTRAR TAREAS' && (
          <TaskList
            tasks={tasks}
            users={users}
            onTaskUpdate={handleTaskUpdate}
            onTaskCreate={handleTaskCreate}
            onTaskDelete={handleTaskDelete}
          />
        )}
        {selectedTab === 'USUARIOS' && (
          <UserList
            users={users}
            onUserSelect={(userId) => console.log('SELECCION DE USUARIO:', userId)}
          />
        )}
        {selectedTab === 'REPORTES' && (
          <TaskReport
            tasks={tasks}
            users={users}
          />
        )}
      </main>
    </div>
  );
}