import Image from 'next/image';

export default function GalleryPage() {
  const items = [
    { title: 'Web Development Layout', category: 'Web Design', desc: 'A basic portfolio website, showcasing my talents, skills, and other projects.', image: '/gallery/web2.jpg' },
    { title: 'Web Devlopment Layout', category: 'Web Design', desc: 'This is a group portfolio for a school project.', image: '/gallery/web1.jpg' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Gallery</h1>
        <p className="text-zinc-400">Visual showcases of design concepts and projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800 p-8 hover:border-zinc-500 transition duration-300"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full rounded-xl mb-6 overflow-hidden border border-zinc-800/50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">{item.category}</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}