import React from 'react';
import { User } from '../../types';

interface UserListProps {
  users: User[];
  onUserSelect: (userId: string) => void;
}

export function UserList({ users, onUserSelect }: UserListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onUserSelect(user.id)}
          className="p-4 border rounded-lg hover:shadow-md transition-shadow text-left"
        >
          <h3 className="font-medium">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
          <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-gray-100">
            {user.role}
          </span>
        </button>
      ))}
    </div>
  );
}