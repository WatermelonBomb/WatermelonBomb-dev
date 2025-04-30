interface WorkDetailsProps {
    params: { slug: string };
  }
  
  const workData: Record<
    string,
    {
      title: string;
      description: string;
      features: string[];
      techStack: string[];
      image: string;
      github?: string;
      demo?: string;
    }
  > = {
    "nox-modoki": {
      title: "Xmodoki - モダン投稿アプリ",
      description:
        "Next.js と Django REST Framework を用いたSNSライクな投稿アプリ。投稿・いいね・コメント機能があり、直感的なUIが特徴。",
      features: ["投稿の作成・一覧表示", "投稿の削除", "いいね機能", "コメント投稿＆表示"],
      techStack: ["Next.js 15", "TypeScript", "Django 5", "Django REST Framework"],
      image: "/images/works/work1.jpg",
      github: "https://github.com/WatermelonBomb/Xmodoki",
    },
  };
  
  export default function WorkDetail({ params }: WorkDetailsProps) {
    const work = workData[params.slug];
  
    if (!work) return <div className="text-white p-10">制作物が見つかりません。</div>;
  
    return (
      <div className="min-h-screen bg-black text-white p-10 flex flex-col md:flex-row items-start max-w-6xl mx-auto"  style={{ backgroundImage: "url('/images/bg.3.jpg')" }}
      >
        {/* 左：画像 */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 md:mr-8">
          <img src={work.image} alt={work.title} className="w-full h-auto object-cover rounded-lg" />
        </div>
  
        {/* 右：説明 */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
          <p className="text-lg text-gray-300 mb-6">{work.description}</p>
  
          <h2 className="text-2xl font-semibold mb-2">✨ 主な機能</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            {work.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
  
          <h2 className="text-2xl font-semibold mb-2">🛠 技術スタック</h2>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            {work.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
  
          {/* リンクボタン */}
          <div className="space-x-4 mt-6">
            {work.github && (
              <a
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 inline-block hover:bg-gray-300 transition"
              >
                GitHub
              </a>
            )}
            {work.demo && (
              <a
                href={work.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 inline-block hover:bg-gray-300 transition"
              >
                デモサイト
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  