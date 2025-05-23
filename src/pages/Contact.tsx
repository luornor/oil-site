// src/pages/Contact.tsx
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <header className="relative bg-[url('/img/carousel-1.png')] bg-cover bg-center h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl mt-4">We’re ready to support your maritime logistics needs.</p>
        </div>
      </header>

      {/* Ghana Office Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Ghana Contact */}
          <div className="space-y-8">
            <div>
              <span className="uppercase text-red-500 font-bold text-lg">Contact Us</span>
              <h2 className="text-4xl font-bold text-blue-900 mt-2">Get In Touch</h2>
            </div>

            <div className="space-y-6 text-lg text-gray-800">
              <div className="flex items-start gap-4">
                <MapPin className="w-7 h-7 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">Office Location</h4>
                  <p>Tema, Community 2, TDC Tower</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-7 h-7 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">Phone Numbers</h4>
                  <p>+233 245 995 456</p>
                  <p>+233 200 871 025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-7 h-7 text-blue-600 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">Email Address</h4>
                  <p>philotesmaritimeservices@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md h-[450px] md:h-[500px] w-full">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Community%202%20TDC%20Tower%2C%20Tema%2C%20Ghana&t=m&z=14&output=embed"
              title="Philotes Ghana Office Location"
              className="w-full h-full border-0"
              allowFullScreen
              aria-hidden="false"
            />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
