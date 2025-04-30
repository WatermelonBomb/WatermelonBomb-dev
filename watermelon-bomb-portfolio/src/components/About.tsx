export default function About() {
    return (
      <section 　id="about"className="bg-black text-white py-40 px-6" style={{ backgroundImage: "url('/images/bg.6..jpg')" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* 縦書き ABOUT */}
          <div className="hidden md:block text-white text-sm tracking-widest mr-8 rotate-180 writing-mode-vertical font-light">
            ABOUT
          </div>
  
          {/* テキスト部分 */}
          <div className="flex-1 text-left space-y-6">
  <div className="backdrop-blur-md bg-black/40 rounded-xl p-6">
    <h2 className="text-3xl font-bold text-white">Y.O</h2>
    <p className="text-base leading-relaxed text-gray-200">
      ２００１年生まれ ソフトウェアエンジニア志望。<br />
      大学３年次より独学でWeb開発を学び、<br />
      TypeScript・React・Next.js など、モダンな技術スタックを中心に<br />
      Webアプリケーション開発を行なっている。<br />
      現在はチームでの開発を行い、創造性と技術力を融合させた<br />
      ユーザー体験を重視したプロダクト制作に取り組んでいる。
    </p>
    <p className="text-sm text-gray-300 leading-relaxed">
      Born in 2001. An aspiring software engineer currently in the third year of university.
      Began exploring web development independently in his third year,
      focusing on modern technologies such as TypeScript, React, and Next.js.
      Since then, he has been creating web applications with a strong emphasis on
      user experience and design.
      Now actively involved in team-based development,
      he continues to pursue intuitive interfaces and refined UI design,
      striving to deliver innovative digital experiences to users.
    </p>
  </div>
</div>

  
          {/* 画像部分 */}
          <div className="flex-1 mt-10 md:mt-0 md:ml-8">
            <img src="/images/bg.5.jpg" alt="Profile" className="w-full object-cover" />
          </div>
        </div>
  
        <style jsx>{`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
          }
        `}</style>
      </section>
    );
  }
  