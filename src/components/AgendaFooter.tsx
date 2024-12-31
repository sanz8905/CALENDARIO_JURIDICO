import React from 'react';

interface AgendaFooterProps {
  nextMeetingDate: string;
  location: string;
}

export function AgendaFooter({ nextMeetingDate, location }: AgendaFooterProps) {
  return (
    <footer className="mt-8 pt-4 border-t text-gray-600">
      <p className="text-sm">Next Meeting: {nextMeetingDate}</p>
      <p className="text-sm">Location: {location}</p>
    </footer>
  );
}