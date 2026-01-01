import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  // Three tattoo work images for the shop page cards
  const shopTattooGallery = [
    {
      id: 1,
      title: "Custom Sleeve Design",
      description: "Full sleeve custom tattoo created in our studio",
      image: "/tattoo1.jpg",
      style: "Custom Blackwork"
    },
    {
      id: 2,
      title: "Traditional Back Piece",
      description: "Large back piece showcasing traditional techniques",
      image: "/tattoo2.jpg",
      style: "Black & Grey"
    },
    {
      id: 3,
      title: "Polynesian Arm Band",
      description: "Traditional Polynesian pattern work",
      image: "/tattoo3.jpg",
      style: "Polynesian Style"
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Shop Header */}
        <div className="text-center mb-16">
          
           
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Our Tattoo Shop
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Where artistry meets professionalism - Experience our studio's tattoo creations
          </p>
        </div>

        {/* THREE CARDS GALLERY - Full Screen Tattoo Images */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Featured Tattoo Works
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {shopTattooGallery.map((item) => (
              <div 
                key={item.id} 
                className="group relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border-2 border-green-700/30 hover:border-green-500 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-green-900/20"
              >
                {/* Full Screen Image */}
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={item.id === 1}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-300">
                    <div className="backdrop-blur-sm bg-black/60 p-6 rounded-xl border border-white/10">
                      <div className="inline-block bg-green-600/90 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {item.style}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-200">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-green-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-.548-1.095a1.5 1.5 0 0 0-1.06-.44h-1.5c-.325 0-.634.129-.862.36l-.664.663a1.5 1.5 0 0 1-1.06.44H9.75a1.5 1.5 0 0 0-1.06.44l-.664.663c-.228.23-.537.36-.862.36H6a1.5 1.5 0 0 1-1.5-1.5v-1.5c0-.325.129-.634.36-.862l.663-.664A1.5 1.5 0 0 0 6.75 9h.75a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-.44-1.06l-.664-.663a2.25 2.25 0 0 1-.586-.422L8.547 4.505Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Created in our studio</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Layer */}
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Shop Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Shop Details Card */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-800/30">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              Studio Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-green-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Pannipitiya, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-green-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-gray-300">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  <p className="text-gray-400 text-sm">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-green-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Contact</p>
                  <p className="text-gray-300">+94 77 123 4567</p>
                  <p className="text-gray-300">info@tattooaddict.lk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-800/30">
            <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </h2>
            
            <p className="text-gray-300 mb-8">
              Schedule your tattoo session or consultation with our award-winning artist.
              We recommend booking at least 2 weeks in advance.
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+94771234567" 
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l 1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                Call Now: +94 77 123 4567
              </a>
              
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-3 border-2 border-green-600 hover:bg-green-900/20 text-green-400 hover:text-green-300 font-bold py-4 px-6 rounded-full transition-all hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                Email Inquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Tattoo Preview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-green-400 mb-8 text-center">
            More Tattoo Styles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative h-48 rounded-lg overflow-hidden border border-green-800/30 group">
                <Image
                  src={`/tattoo${num}.jpg`}
                  alt={`Tattoo Style ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            >
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}