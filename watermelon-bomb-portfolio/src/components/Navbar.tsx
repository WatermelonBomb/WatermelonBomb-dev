import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white flex justify-between items-center px-8 py-4 z-50">
      {/* ロゴ or 名前 */}
      <div className="text-2xl font-bold">WatermelonBomb</div>

      {/* リンク */}
      <div className="space-x-6 text-sm tracking-wide">
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#works" className="hover:underline">
          Works
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
