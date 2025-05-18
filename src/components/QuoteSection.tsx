// src/components/QuoteSection.tsx
const QuoteSection = () => {
    return (
      <section id="quote" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a shipping solution?
          </h2>
          <p className="text-lg mb-6">
            Let’s give you a custom quote based on your cargo and destination.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    );
  };
  
  export default QuoteSection;
  