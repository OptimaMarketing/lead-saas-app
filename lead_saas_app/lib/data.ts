export const leadStatuses = [
  { key: 'nuovo', label: 'Nuovo', tone: 'bg-slate-100 text-slate-700' },
  { key: 'acquisito', label: 'Acquisito', tone: 'bg-emerald/10 text-emerald' },
  { key: 'da_contattare', label: 'Da contattare', tone: 'bg-sky/10 text-sky' },
  { key: 'contattato', label: 'Contattato', tone: 'bg-violet/10 text-violet' },
  { key: 'non_risponde', label: 'Non risponde', tone: 'bg-amber/10 text-amber' },
  { key: 'appuntamento', label: 'Appuntamento fissato', tone: 'bg-mint/10 text-emerald' },
  { key: 'venduto', label: 'Venduto', tone: 'bg-emerald text-white' },
  { key: 'perso', label: 'Perso', tone: 'bg-red-100 text-red-600' },
];

export const leads = [
  { name: 'Giulia Rossi', phone: '+39 333 123 4567', email: 'giulia@email.it', source: 'Meta Ads', status: 'acquisito', score: 92, owner: 'Marco', next: 'Oggi 15:30', value: '€3.200' },
  { name: 'Luca Bianchi', phone: '+39 347 222 3311', email: 'luca@azienda.it', source: 'Google', status: 'da_contattare', score: 81, owner: 'Sara', next: 'Domani 10:00', value: '€1.900' },
  { name: 'Elena Neri', phone: '+39 320 882 1001', email: 'elena@email.it', source: 'WhatsApp', status: 'appuntamento', score: 88, owner: 'Marco', next: 'Meet oggi 17:00', value: '€4.500' },
  { name: 'Paolo Verdi', phone: '+39 349 118 9912', email: 'paolo@studio.it', source: 'Manuale', status: 'non_risponde', score: 47, owner: 'Andrea', next: 'Richiamo scaduto', value: '€900' },
  { name: 'Martina Costa', phone: '+39 392 782 8811', email: 'martina@brand.it', source: 'Meta Ads', status: 'venduto', score: 96, owner: 'Sara', next: 'Onboarding', value: '€6.800' },
];

export const kpis = [
  ['Lead mese', '1.248', '+18%'],
  ['Conversione', '24.8%', '+4.1%'],
  ['Appuntamenti', '186', '+31%'],
  ['Vendite', '74', '+12%'],
];
