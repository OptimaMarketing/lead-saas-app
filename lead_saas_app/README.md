# CRM AI Gamificato - MVP deploy-ready

Ambiente target: GitHub + Vercel + Supabase per `optimamarketing.it`.

## Avvio locale
```bash
npm install
npm run dev
```
Apri `http://localhost:3000`.

## Pagine incluse
- `/dashboard` dashboard commerciale/admin
- `/leads` lead, filtri stati e azioni rapide
- `/calendar` appuntamenti e videocall
- `/reports` analytics lead e commerciali
- `/gamification` obiettivi, XP e premi
- `/ai-insights` suggerimenti AI
- `/settings` integrazioni e permessi

## Deploy su Vercel
1. Crea repository GitHub e carica questa cartella.
2. In Vercel: New Project → importa repo.
3. Framework: Next.js.
4. Aggiungi le variabili presenti in `.env.example`.
5. Deploy.
6. In Vercel → Project → Domains: aggiungi `optimamarketing.it` e `www.optimamarketing.it`.
7. Aggiorna i DNS del dominio come richiesto da Vercel.

## Supabase
1. Crea un progetto Supabase.
2. Copia la connection string PostgreSQL in `DATABASE_URL`.
3. Esegui:
```bash
npx prisma generate
npx prisma db push
```

## Integrazioni previste
- Google Calendar/Meet per appuntamenti e videocall.
- WhatsApp Business Cloud API per messaggi da scheda lead.
- Meta Lead Ads per import automatico lead.
- OpenAI per scoring, priorità lead e suggerimenti commerciali.

## Super admin iniziale
Email prevista: `optimamarketing.mkt@gmail.com`.
