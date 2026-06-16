import { Shell } from '@/components/shell';
import { LeadCard } from '@/components/lead-card';
import { leadStatuses, leads } from '@/lib/data';
export default function Leads(){return <Shell><div className="mb-6"><h1 className="text-3xl font-black">Lead</h1><p className="text-slate-500">Filtra per stato, fonte, commerciale, appuntamento e score AI.</p></div><div className="card p-4 mb-6 flex flex-wrap gap-2">{leadStatuses.map(s=><button key={s.key} className={`chip ${s.tone}`}>{s.label}</button>)}<button className="chip bg-ink text-white">Score AI alto</button><button className="chip bg-red-100 text-red-600">Follow-up scaduti</button></div><div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">{leads.map(l=><LeadCard key={l.name} lead={l}/>)}</div></Shell>}
