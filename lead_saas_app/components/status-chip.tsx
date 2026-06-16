import { leadStatuses } from '@/lib/data';
export function StatusChip({ status }: { status: string }) {
  const s = leadStatuses.find(x => x.key === status) ?? leadStatuses[0];
  return <span className={`chip ${s.tone}`}>{s.label}</span>;
}
