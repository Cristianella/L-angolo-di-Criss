# L'angolo di Criss — Sito

Sito semplice in React + Vite + Tailwind.

## Prova locale (facoltativa)
1. Installa Node.js.
2. Terminale nella cartella del progetto.
3. `npm install`
4. `npm run dev`

## Pubblicazione
1. Carica **tutti i file e cartelle** di questa cartella nel tuo repository GitHub (Upload files).
2. Vai su Vercel (https://vercel.com), accedi con GitHub, **Add New Project** → seleziona il repo.
3. Lascia le impostazioni di default (Framework: Vite, Build: `npm run build`, Output: `dist`).
4. **Deploy**.

## Aggiungere un nuovo tutorial
Apri `src/App.jsx` su GitHub → **Edit**, cerca la categoria giusta e incolla una nuova `Card`:
```jsx
<Card
  title="Titolo del tutorial"
  tag="Facile"
  link="https://www.youtube.com/..."
/>
```
**Commit changes** e Vercel aggiorna il sito automaticamente.
