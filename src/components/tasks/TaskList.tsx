import React, { useState } from 'react';
import { Task, User } from '../../types';
import TaskItem from './TaskItem';
import { NewTaskButton } from './NewTaskButton';
import { TaskForm } from './TaskForm';

interface TaskListProps {
  tasks: Task[];
  users: User[];
  onTaskUpdate: (task: Task) => void;
  onTaskCreate: (task: Task) => void;
  onTaskDelete: (taskId: string) => void;
}

export function TaskList({ tasks, users, onTaskUpdate, onTaskCreate, onTaskDelete }: TaskListProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">TAREAS</h2>
        <NewTaskButton onClick={() => setShowForm(true)} />
      </div>
      
      {showForm && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <TaskForm
            users={users}
            onSubmit={(task) => {
              onTaskCreate(task);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onTaskUpdate}
            onDelete={onTaskDelete}
          />
        ))}
      </div>
    </div>
  );
}