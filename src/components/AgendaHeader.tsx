import React from 'react';

interface AgendaHeaderProps {
  date: string;
}

export function AgendaHeader({ date }: AgendaHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Legal Team Meeting Agenda</h1>
      <p className="text-gray-600">Date: {date}</p>
    </header>
  );
}