export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-500 py-8 text-center text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Jhonny G. Matildo. All rights reserved.</p>
      </div>
    </footer>
  );
}