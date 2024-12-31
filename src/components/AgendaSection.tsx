import React from 'react';

interface AgendaSectionProps {
  title: string;
  time: string;
  items: string[];
}

export function AgendaSection({ title, time, items }: AgendaSectionProps) {
  return (
    <div className="border-b pb-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">{title} ({time})</h2>
      <ul className="list-disc ml-6 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}