import Link from 'next/link';

export default function Works() {
  const works = [
    { slug: "nox-modoki", date: "2025年5月", title: "NoX modoki", image: "/images/works/work1.jpg" },
    { slug: "team-portfolio", date: "2024年10月10日", title: "共同制作ポートフォリオ", image: "/images/works/work1.jpg" },
    { slug: "minimal-blog", date: "2024年9月5日", title: "ミニマルブログ", image: "/images/works/work1.jpg" },
  ];

  return (     
    <section id="works" className="bg-black text-white py-40 px-6 relative" style={{ backgroundImage: "url('/images/bg.8.jpg')" }}>
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="hidden md:block text-white text-sm tracking-widest mr-8 rotate-180 writing-mode-vertical font-light">
          WORKS
        </div>
        <div className="flex overflow-x-auto space-x-8 scrollbar-hide">
          {works.map((work, index) => (
            <div key={index} className="min-w-[250px] bg-black bg-opacity-60 backdrop-blur-md p-4 rounded-lg shadow-lg">
              <img
                src={work.image}
                alt={work.title}
                className="mb-4 w-full h-64 object-cover rounded-md hover:opacity-80 transition duration-300"
              />
              <p className="text-sm text-gray-300 mb-1">{work.date}</p>
              <p className="text-base mb-3 font-semibold">{work.title}</p>
              <Link href={`/works/${work.slug}`}>
                <button className="bg-white text-black text-sm px-4 py-2 rounded hover:bg-gray-200 transition">
                  詳細を見る
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
