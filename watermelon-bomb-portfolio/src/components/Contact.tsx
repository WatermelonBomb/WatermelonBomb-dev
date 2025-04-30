export default function Contact() {
    return (
      <section  id="contact" className="bg-white text-white py-40 px-6 text-center" style={{ backgroundImage: "url('/images/bg.9.jpg')" }}>
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg mb-4">
          お仕事のご依頼やコラボのご相談など、お気軽にご連絡ください！
        </p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:tduyuki@gmail.com" className="text-blue-600 hover:underline">
          tduyuki@gmail.com
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkdIn
          </a>
          <a href="https://github.com/WatermelonBomb" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub アカウント
          </a>
        </div>
      </section>
    );
  }
  