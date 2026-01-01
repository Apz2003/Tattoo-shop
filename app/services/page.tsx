"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tattooStyle: "",
    tattooSize: "",
    bodyPart: "",
    preferredDate: "",
    preferredTime: "",
    description: "",
    budget: "",
    consultationType: "in-person"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          tattooStyle: "",
          tattooSize: "",
          bodyPart: "",
          preferredDate: "",
          preferredTime: "",
          description: "",
          budget: "",
          consultationType: "in-person"
        });
      }, 3000);
    }, 1500);
  };

  const tattooStyles = [
    "Custom Design",
    "Black & Grey",
    "Fine Line",
    "Polynesian",
    "Traditional",
    "Japanese",
    "Realism",
    "Watercolor",
    "Geometric",
    "Lettering",
    "Other"
  ];

  const tattooSizes = [
    "Small (under 2 hours)",
    "Medium (2-4 hours)",
    "Large (4-8 hours)",
    "Full Session (8+ hours)",
    "Multi-session project"
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Services Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Book Your Tattoo Appointment
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Fill out the form below to schedule your tattoo session with our award-winning artist. 
            We'll get back to you within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Appointment Form - Takes 2/3 width */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-green-800/30">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">
                    Appointment Request Submitted!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for your booking request. We will contact you within 24 hours to confirm your appointment.
                  </p>
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                  >
                    ← Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-green-400 mb-6">
                    Appointment Request Form
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                          placeholder="+94 77 123 4567"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Tattoo Style *
                        </label>
                        <select
                          name="tattooStyle"
                          value={formData.tattooStyle}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                        >
                          <option value="">Select a style</option>
                          {tattooStyles.map(style => (
                            <option key={style} value={style}>{style}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Tattoo Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">
                          Tattoo Size *
                        </label>
                        <select
                          name="tattooSize"
                          value={formData.tattooSize}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                        >
                          <option value="">Select size</option>
                          {tattooSizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Body Part *
                        </label>
                        <input
                          type="text"
                          name="bodyPart"
                          value={formData.bodyPart}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                          placeholder="e.g., Arm, Back, Leg, etc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Preferred Time *
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          required
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    {/* Additional Information */}
                    <div>
                      <label className="block text-white mb-2">
                        Tattoo Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                        placeholder="Describe your tattoo idea in detail, include any reference images you have in mind..."
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2">
                          Budget Estimate (LKR)
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-black/50 border border-green-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
                          placeholder="e.g., 10,000 - 20,000"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white mb-2">
                          Consultation Type *
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="consultationType"
                              value="in-person"
                              checked={formData.consultationType === "in-person"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span className="text-gray-300">In-Person</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="consultationType"
                              value="video"
                              checked={formData.consultationType === "video"}
                              onChange={handleChange}
                              className="mr-2"
                            />
                            <span className="text-gray-300">Video Call</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Submit Appointment Request"
                        )}
                      </button>
                      <p className="text-gray-400 text-sm text-center mt-4">
                        By submitting this form, you agree to our appointment terms and conditions.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
          
          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-800/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-green-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Studio Address</p>
                    <p className="text-gray-300">Pannipitiya, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-green-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone Number</p>
                    <p className="text-gray-300">+94 77 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-green-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">booking@tattooaddict.lk</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Process Info Card */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-800/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Booking Process
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">Submit Form</p>
                    <p className="text-gray-300 text-sm">Fill out the appointment request form</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">Confirmation</p>
                    <p className="text-gray-300 text-sm">We'll contact you within 24 hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">Consultation</p>
                    <p className="text-gray-300 text-sm">Discuss design and pricing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">Appointment</p>
                    <p className="text-gray-300 text-sm">Schedule your tattoo session</p>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* Pricing Card */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-800/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                Pricing Guide
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Small Tattoos</span>
                  <span className="text-green-400 font-bold">LKR 5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Medium Tattoos</span>
                  <span className="text-green-400 font-bold">LKR 15,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Large Tattoos</span>
                  <span className="text-green-400 font-bold">LKR 30,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Full Sleeve</span>
                  <span className="text-green-400 font-bold">LKR 100,000+</span>
                </div>
                <p className="text-gray-400 text-sm pt-2 border-t border-green-800/30">
                  * Final pricing depends on design complexity and session duration
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Services Info */}
        <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-800/30 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
            Our Tattoo Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Custom Designs", desc: "Personalized tattoo artwork tailored to your vision" },
              { name: "Cover-up Tattoos", desc: "Professional cover-up of existing tattoos" },
              { name: "Black & Grey", desc: "Traditional and modern black & grey styles" },
              { name: "Color Tattoos", desc: "Vibrant and detailed color work" },
              { name: "Fine Line", desc: "Delicate and detailed fine line tattoos" },
              { name: "Traditional", desc: "Classic bold traditional tattoo styles" },
              { name: "Realism", desc: "Photorealistic tattoo artwork" },
              { name: "Consultation", desc: "Design consultation and planning" }
            ].map((service, index) => (
              <div key={index} className="bg-black/30 rounded-lg p-4 hover:bg-green-900/20 transition">
                <div className="text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">{service.name}</h4>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
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