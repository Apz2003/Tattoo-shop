"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Gallery images - you can add more as needed
  const tattooImages = [
    { id: 1, src: "/tattoo1.jpg", title: "Custom Sleeve", category: "Black & Grey" },
    { id: 2, src: "/tattoo2.jpg", title: "Traditional Back", category: "Traditional" },
    { id: 3, src: "/tattoo3.jpg", title: "Polynesian Arm Band", category: "Polynesian" },
    { id: 4, src: "/tattoo4.jpg", title: "Geometric Design", category: "Geometric" },
    { id: 5, src: "/tattoo5.jpg", title: "Animal Portrait", category: "Realism" },
    { id: 6, src: "/tattoo6.jpg", title: "Japanese Style", category: "Japanese" },
    { id: 7, src: "/tattoo7.jpg", title: "Fine Line Floral", category: "Fine Line" },
    { id: 8, src: "/tattoo2.jpg", title: "Cover Up Work", category: "Cover Up" },
    { id: 9, src: "/tattoo3.jpg", title: "Full Chest Piece", category: "Traditional" },
    { id: 10, src: "/tattoo1.jpg", title: "Watercolor Style", category: "Color" },
    { id: 11, src: "/tattoo2.jpg", title: "Lettering Design", category: "Lettering" },
    { id: 12, src: "/tattoo3.jpg", title: "Mandala Pattern", category: "Geometric" },
  ];

  const categories = [
    "All",
    "Black & Grey",
    "Traditional",
    "Polynesian",
    "Japanese",
    "Realism",
    "Fine Line",
    "Geometric",
    "Color",
    "Lettering",
    "Cover Up"
  ];

  const filteredImages = selectedCategory === "All" 
    ? tattooImages 
    : tattooImages.filter(img => img.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Tattoo Gallery
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Browse our collection of tattoo artwork. Each piece is custom designed and 
            professionally executed by our award-winning artist Mashi Sandra.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
            Filter by Style
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition ${
                  selectedCategory === category
                    ? "bg-green-600 border-green-500 text-white"
                    : "border-green-700 hover:bg-green-900/30 text-white hover:text-green-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative aspect-square rounded-xl overflow-hidden border border-green-800/30 hover:border-green-500 transition-all duration-300"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-300">
                    <div className="backdrop-blur-sm bg-black/60 p-4 rounded-lg">
                      <div className="inline-block bg-green-600/90 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                        {image.category}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Info */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-800/30 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
            About Our Tattoo Artwork
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Custom Designs
              </h3>
              <p className="text-gray-300 mb-4">
                Every tattoo in our gallery is a custom design created specifically for our clients. 
                We work closely with you to bring your vision to life, ensuring each piece is unique and meaningful.
              </p>
              <p className="text-gray-300">
                Our artist Mashi Sandra has over 20 years of experience creating tattoos in various styles, 
                from traditional to contemporary designs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Tattoo Process
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Design Consultation</p>
                    <p className="text-gray-300 text-sm">Discuss your ideas and vision</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Custom Design</p>
                    <p className="text-gray-300 text-sm">We create a unique design for you</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Tattoo Session</p>
                    <p className="text-gray-300 text-sm">Professional execution with premium equipment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Aftercare</p>
                    <p className="text-gray-300 text-sm">Guidance for proper healing</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-900/30 to-black/30 rounded-2xl p-8 border border-green-800/30">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Ready for Your Own Custom Tattoo?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Inspired by our gallery? Book a consultation to discuss your own custom tattoo design.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/services" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
              >
                Book Consultation
              </Link>
              <Link 
                href="/contact" 
                className="border border-green-600 hover:bg-green-900/20 text-green-400 hover:text-green-300 font-bold py-3 px-8 rounded-full transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}