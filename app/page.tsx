import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Tattoo gallery items
  const tattooGallery = [
    {
      id: 1,
      title: "Custom Design",
      description: "Personalized tattoo artwork",
      image: "/tattoo1.jpg",
    },
    {
      id: 2,
      title: "Black & Grey",
      description: "Traditional black and grey style",
      image: "/tattoo2.jpg",
    },
    {
      id: 3,
      title: "Polynesian Art",
      description: "Traditional Polynesian patterns",
      image: "/tattoo3.jpg",
    },
    {
      id: 4,
      title: "Fine Line Work",
      description: "Detailed fine line tattooing",
      image: "/tattoo4.jpg", // If you have more images
    },
  ];

  return (
    <main className="min-h-screen">
      
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-20 max-w-7xl mx-auto">
        
        {/* TEXT SIDE */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-500">
            Tattoo_Addict_SriLanka
          </h1>

          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              Welcome to <span className="text-green-400 font-semibold">Tattoo_Addict_SriLanka</span>, 
              a professional tattoo studio located in Pannipitiya, Sri Lanka.
            </p>

            <p>
              Led by award-winning tattoo artist{" "}
              <span className="text-green-400 font-semibold">Mashi Sandra</span>, 
              our studio specializes in custom tattoo designs.
            </p>

            <p>
              With over{" "}
              <span className="text-green-400 font-semibold">
                20 years of international experience
              </span>, we are dedicated to artistic precision and high-quality work.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-green-900/30"
            >
              Book Appointment
            </Link>
            <Link 
              href="/shop" 
              className="flex items-center gap-3 border-2 border-green-600 hover:bg-green-900/20 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
            >
      
                
              Visit Our Shop
            </Link>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-[500px] rounded-3xl overflow-hidden border-2 border-green-700 shadow-2xl shadow-green-900/40">
            <Image
              src="/artist.jpg" // Your artist image
              alt="Tattoo Artist Mashi Sandra"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

      </section>

      {/* OUR WORKS GALLERY SECTION */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            Our Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Browse our latest tattoo designs and artwork
          </p>
        </div>

        {/* Tattoo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tattooGallery.map((tattoo) => (
            <div 
              key={tattoo.id} 
              className="group relative h-[350px] rounded-xl overflow-hidden border border-green-800/30 hover:border-green-500 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Tattoo Image */}
              <div className="absolute inset-0">
                <Image
                  src={tattoo.image}
                  alt={tattoo.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-300">
                  <div className="backdrop-blur-sm bg-black/50 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {tattoo.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {tattoo.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-3 border-2 border-green-600 hover:bg-green-900/20 text-green-400 hover:text-green-300 font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
            </svg>
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            Our Tattoo Shop
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Visit our professional studio for premium tattoo services
          </p>
        </div>

        {/* Shop Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-gray-900/40 rounded-2xl p-8 border border-green-800/30 hover:border-green-600/50 transition-all hover:scale-[1.02]">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src="/shop-icon.png"
                alt="Professional Equipment"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Professional Equipment
            </h3>
            <p className="text-gray-300 text-center">
              State-of-the-art tattoo machines and medical-grade supplies
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900/40 rounded-2xl p-8 border border-green-800/30 hover:border-green-600/50 transition-all hover:scale-[1.02]">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src="/shop-icon.png"
                alt="Sterile Environment"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Sterile Environment
            </h3>
            <p className="text-gray-300 text-center">
              Medical-grade sterilization protocols for your safety
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900/40 rounded-2xl p-8 border border-green-800/30 hover:border-green-600/50 transition-all hover:scale-[1.02]">
            <div className="relative w-16 h-16 mx-auto mb-6">
              <Image
                src="/shop-icon.png"
                alt="Expert Consultation"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Expert Consultation
            </h3>
            <p className="text-gray-300 text-center">
              20+ years of international experience
            </p>
          </div>
        </div>

        {/* Shop CTA */}
        <div className="text-center">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/30"
          >
            
            <span className="text-lg">Visit Our Shop & Book Appointment</span>
          </Link>
        </div>
      </section>

    </main>
  );
}