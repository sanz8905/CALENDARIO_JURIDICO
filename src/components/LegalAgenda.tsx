import React from 'react';
import { AgendaHeader } from './AgendaHeader';
import { AgendaSection } from './AgendaSection';
import { AgendaFooter } from './AgendaFooter';
import { agendaSections } from '../data/agendaItems';

// Changed to named export
export function LegalAgenda() {
  const currentDate = new Date().toLocaleDateString();
  const nextMeetingDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();
  
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <AgendaHeader date={currentDate} />
      
      <section className="space-y-6">
        {agendaSections.map((section, index) => (
          <AgendaSection
            key={index}
            title={section.title}
            time={section.time}
            items={section.items}
          />
        ))}
      </section>

      <AgendaFooter
        nextMeetingDate={nextMeetingDate}
        location="Conference Room A / Virtual Link"
      />
    </div>
  );
}