"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-green-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src="/shop-icon.png"
              alt="Tattoo Addict Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <span className="text-2xl font-bold text-green-500">
            Tattoo_Addict
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`hover:text-green-400 transition ${pathname === "/" ? "text-green-400" : "text-white"}`}
          >
            Home
          </Link>
          <Link 
            href="/gallery" 
            className={`hover:text-green-400 transition ${pathname === "/gallery" ? "text-green-400" : "text-white"}`}
          >
            Gallery
          </Link>
          <Link 
            href="/services" 
            className={`hover:text-green-400 transition ${pathname === "/services" ? "text-green-400" : "text-white"}`}
          >
            Services
          </Link>
          <Link 
            href="/shop" 
            className={`hover:text-green-400 transition ${pathname === "/shop" ? "text-green-400" : "text-white"}`}
          >
            Shop
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-green-400 transition ${pathname === "/contact" ? "text-green-400" : "text-white"}`}
          >
            Contact
          </Link>
          
          {/* Shop Icon */}
          <Link href="/shop" className="ml-4 p-2 hover:bg-green-900/30 rounded group relative">
            <div className="relative w-6 h-6">
              <Image
                src="/shop-icon.png"
                alt="Shop"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform"
              />
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Shop
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;