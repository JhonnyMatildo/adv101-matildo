import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center min-h-[80vh]">
      <span className="text-xs uppercase tracking-widest text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full mb-6">
        Aspiring Developer
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
        Hello, I&apos;m <span className="underline decoration-zinc-600 underline-offset-8">Jhonny G. Matildo</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
        Passionate about technology, web design, and continuous learning. Turning creative ideas into functional websites and applications.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/portfolio"
          className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 hover:border-white hover:text-white transition"
        >
          About Me
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20 text-left">
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h3 className="text-white font-semibold text-lg mb-2">Web Development</h3>
          <p className="text-zinc-400 text-sm">Building clean and modern webpage concepts using fundamental web technologies.</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h3 className="text-white font-semibold text-lg mb-2">Game Concepts</h3>
          <p className="text-zinc-400 text-sm">Exploring logic and object-oriented programming through standalone games in Java.</p>
        </div>
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h3 className="text-white font-semibold text-lg mb-2">Continuous Learning</h3>
          <p className="text-zinc-400 text-sm">Dedicated to mastering HTML, CSS, JavaScript, and modern frameworks step-by-step.</p>
        </div>
      </div>
    </section>
  );
}