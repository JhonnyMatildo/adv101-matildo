export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">About Me</h1>
        <p className="text-zinc-400">Discover who I am, my journey, and my programming goals.</p>
      </div>

      <div className="space-y-12 text-zinc-300 leading-relaxed">
        
        {/* Section 1 */}
        <section className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-semibold text-white mb-4">About Myself</h2>
          <p className="text-zinc-300 text-base">
            I am someone who really loves talking and listening to other people. I enjoy having conversations because I can learn different things and understand other people&apos;s ideas and experiences. I am also curious and always trying to gain more knowledge, especially when it comes to technology and coding.
          </p>
        </section>

        {/* Section 2 */}
        <section className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-semibold text-white mb-4">My Journey in Coding</h2>
          <p className="text-zinc-300 text-base">
            My journey in coding is still at the beginning, but I am slowly learning more about it. I am especially interested in making websites because I find it fun and interesting. What I like about creating a website is that I can edit it, add different things, and make it look the way I want. Since it is my own website, I can be creative and experiment with different ideas.
          </p>
        </section>

        {/* Section 3 */}
        <section className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-semibold text-white mb-4">My Coding Goals</h2>
          <p className="text-zinc-300 text-base mb-4">
            My goal is to improve my coding skills, especially in HTML, CSS, and JavaScript, so I can create better and more interactive websites. I also want to learn how to make websites that are responsive and easy to use on different devices. In the future, I want to be able to create my own website from scratch without relying too much on tutorials or other people&apos;s code.
          </p>
          <p className="text-zinc-400 text-sm border-l-2 border-zinc-600 pl-4 italic">
            &quot;I know I still have a lot to learn, but I want to keep practicing, try new things, and improve my skills little by little. For me, coding is not only about writing code, but also about turning my own ideas into something I can actually create and use.&quot;
          </p>
        </section>

      </div>
    </div>
  );
}