import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wider">
          INK<span className="text-red-500">STUDIO</span>
        </h1>
        <div className="space-x-6 text-sm">
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/gallery" className="hover:text-red-500">Gallery</Link>
          <Link href="/appointment" className="hover:text-red-500">Appointment</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Express Your <span className="text-red-500">Ink</span>
        </h2>
        <p className="max-w-xl text-gray-400 mb-10">
          Premium tattoo studio with professional artists.  
          Clean. Creative. Custom designs.
        </p>

        <Link
          href="/appointment"
          className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition"
        >
          Book Appointment
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © 2026 InkStudio Tattoo Shop. All rights reserved.
      </footer>

    </main>
  );
}
