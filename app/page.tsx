export default function Home() { // Define the page component.
  return ( // Return the page contetn.
    <main className="min-h-screen bg-sclate-950 px-12 text-white"> {/* Full-height page, dark background, padding, white text. */}
      <div className="mx-auto max-w-5xl"> {/* Center the content and limit its width. */}

        <header className="mb-16"> {/* Header with space below it. */}
          <p className="text-2x1 font-bold text-amber-400"> {/* Large, bold, amber brand text. */}
            NextWatch
          </p>
        </header>

        <h1 className="text-4xl font-bold sm:text-6xl"> {/* Main heading; larger on wider screens. */}
          Find your next movie night. {/* Homepage headline. */}
        </h1>

        <p className="mt-4 max-w-xl text-lg text-slate-300"> {/* Top spacing, limited width, large light-gray text. */}
          Discover movies, explore new favorites, and build watchlist.
        </p>

        <section className="mr-12" aria-labelledby="featured-heading"> {/* Movie section; named by the heading below for accessibility. */}
          <h2 id="featured-heading" className="mb-6 text-2xl font-semibold"> {/* Section heading with space below */}
            Featured movie
          </h2>

          <article className="max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <div className="mb-5 flex aspect-2/3 items-center justify-center rounded-xl bg-slate-800 text-slate-400"> {/* Poster-shaped placeholder with centered text */}
            Poster coming soon 
            </div>
            <h3 className="text-xl font-bold">Interstellar</h3> {/* Movie title in large, bold text. */}
            <p className="mt-2 text-slate-300">2014 - Science fiction</p> {/* Small amber text with space above. */}
            <p className="mt-3 text-slate-300">A team of explorers travels beyond our solar system to search for a future for humanity.</p> {/* Light-gray synopsis with space above. */}
            </article>          
        </section>
      </div>
    </main>
  )
}