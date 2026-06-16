import { Shell } from '@/components/shell';
import { Bot, Sparkles } from 'lucide-react';

export default function AI(){return <Shell>
  <h1 className="text-3xl font-black mb-6">AI Insights</h1>
  <div className="grid xl:grid-cols-3 gap-5"><div className="card p-6 xl:col-span-2"><div className="flex gap-4"><div className="h-14 w-14 rounded-2xl bg-emerald/10 text-emerald grid place-items-center"><Bot/></div><div><h2 className="font-black text-xl">AI Sales Coach</h2><p className="text-slate-600 mt-1">Oggi conviene contattare prima 12 lead con score sopra 80. Il 42% dei lead si perde tra Contattato e Appuntamento.</p></div></div><div className="mt-6 grid md:grid-cols-3 gap-3">{['Lead scoring automatico','Next best action','Alert lead trascurati'].map(x=><div className="rounded-2xl bg-slate-50 p-4 font-bold" key={x}><Sparkles className="text-amber mb-2" size={18}/>{x}</div>)}</div></div><div className="card p-6"><h2 className="font-black mb-4">Priorità oggi</h2>{['Luca Verdi - score 92','Azienda Gamma - score 89','Sara Conti - score 87'].map(x=><p className="py-3 border-b border-slate-100 font-bold" key={x}>{x}</p>)}</div></div>
</Shell>}
