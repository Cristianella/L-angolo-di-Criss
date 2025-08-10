export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-700">L’angolo di Criss</h1>
        <p className="text-gray-700">Creatività all’uncinetto e ispirazione ogni mese</p>
      </header>

      <Category title="Coprispalle">
        <Card 
          title="Il coprispalle più chic dell’estate 'CHARMY' - Scopri come farlo all’uncinetto!"
          tag="Facile"
          link="https://www.youtube.com/watch?v=Rc1hMVY7X3Q&t=289s"
        />
      </Category>

      <Category title="Top">
        <Card 
          title="TOP ALL'UNCINETTO 'PARADISE' - fresco e adattabile a tutte"
          tag="Veloce"
          link="https://www.youtube.com/watch?v=g13ulZAUM4A&t=114s"
        />
      </Category>

      <Category title="Borse">
        <Card 
          title="Scopri il modello 'Sabry' - LA BORSA ALL'UNCINETTO FACILISSIMA & STILOSA"
          tag="Intermedio"
          link="https://www.youtube.com/watch?v=hFJlvvNzKmM&t=34s"
        />
      </Category>

      <section className="bg-gradient-to-r from-pink-100 to-pink-50 p-6 rounded-2xl shadow-md text-center border border-pink-200 mt-12">
        <h2 className="text-2xl font-semibold text-pink-700 mb-2">Novità in arrivo</h2>
        <p className="text-gray-600 mb-4">
          Stiamo preparando contenuti freschi e sorprendenti per te! Torna presto per scoprire tutte le novità.
        </p>
        <span className="inline-block bg-pink-200 text-pink-800 text-sm px-3 py-1 rounded-full">Stay tuned ❤️</span>
      </section>

      <footer className="mt-10 text-center text-gray-500">
        <p>Seguimi su:
          <a href="https://www.youtube.com/@langolodicriss" className="text-pink-600 ml-2 hover:underline">YouTube</a> |
          <a href="https://www.instagram.com/cristiana.rossi/?hl=it" className="text-pink-600 ml-2 hover:underline">Instagram</a> |
          <a href="https://www.facebook.com/groups/langolodicriss/" className="text-pink-600 ml-2 hover:underline">Facebook</a>
        </p>
        <p className="mt-2">Contattami: <a href="mailto:cristiana.vitafutura@gmail.com" className="text-pink-600 hover:underline">cristiana.vitafutura@gmail.com</a></p>
      </footer>
    </div>
  );
}

function Category({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-pink-700 mb-4">{title}</h2>
      <div className="grid gap-8 md:grid-cols-3">{children}</div>
    </section>
  );
}

function Card({ title, tag, link }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <span className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full mb-2">{tag}</span>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-medium hover:underline">Guarda ora</a>
    </div>
  );
}

// ❤️ Nota per Criss: Una volta online, per aggiungere un nuovo tutorial apri questo file su GitHub,
// trova la categoria giusta e incolla una nuova <Card> con titolo, tag e link. Premi "Commit changes"
// e Vercel aggiornerà il sito automaticamente.
