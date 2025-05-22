// src/pages/Contact.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <header className="relative bg-[url('/img/carousel-1.png')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">Let’s get your shipment moving today.</p>
        </div>
      </header>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Address</h3>
              <p className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5" /> 123 Port Lane, Accra
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone</h3>
              <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5" /> +233 123 456 789
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
              <p className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5" /> info@shipmaster.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
