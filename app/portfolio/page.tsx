export default function PortfolioPage() {
  const languages = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-zinc-400">Technical skills and personal projects created so far.</p>
      </div>

      {/* Languages Known Section */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-zinc-200 mb-6">Languages Known</h2>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-mono text-lg font-medium hover:border-zinc-500 transition"
            >
              {lang}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-xl font-semibold text-zinc-200 mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1 */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Project Made</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">Webpage</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                A modern interactive web page crafted to practice structure, custom layout formatting, and CSS styling techniques.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">HTML</span>
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">CSS</span>
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">JavaScript</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Project Deployed</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">Flappy Bird Game</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                A desktop game concept built in Java. Features custom game loop mechanics, collision detection, and score tracking.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">Java</span>
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">Game Concept</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}