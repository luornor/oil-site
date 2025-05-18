// src/components/PricingSection.tsx
import { CheckCircle, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "49.00",
    features: [
      "HTML5 & CSS3",
      "Bootstrap v5",
      "FontAwesome Icons",
      "Responsive Layout",
      "Cross-browser Support",
    ],
  },
  {
    name: "Standard Plan",
    price: "99.00",
    features: [
      "HTML5 & CSS3",
      "Bootstrap v5",
      "FontAwesome Icons",
      "Responsive Layout",
      "Cross-browser Support",
    ],
  },
  {
    name: "Advanced Plan",
    price: "149.00",
    features: [
      "HTML5 & CSS3",
      "Bootstrap v5",
      "FontAwesome Icons",
      "Responsive Layout",
      "Cross-browser Support",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-10 px-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h6 className="text-blue-400 text-sm font-bold uppercase mb-2">Pricing Plan</h6>
          <h2 className="text-4xl font-bold text-black">Perfect Pricing Plan</h2>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group/card rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition"
            >
              {/* Price Header */}
              <div className="border-b p-6">
                <h5 className="text-red-500 font-bold mb-1">{plan.name}</h5>
                <h1 className="text-4xl font-bold text-black">
                  <span className="text-lg align-top">$</span>
                  {plan.price}
                  <span className="text-sm font-medium text-gray-600"> / Month</span>
                </h1>
              </div>

              {/* Features */}
              <div className="p-6 pt-4">
                {plan.features.map((feature, i) => (
                  <p key={i} className="flex items-center text-gray-700 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    {feature}
                  </p>
                ))}

                {/* Group-hover Button */}
                <a
                  href="#"
                  className="group/button mt-6 inline-flex items-center bg-red-500 text-white font-medium transition-all duration-300 w-10 hover:bg-blue-600 group-hover/card:w-40"
                >
                  <div className="flex items-center justify-center w-10 h-10">
                    <ArrowRight className="w-10 h-5" />
                  </div>
                  <span className="ml-2 opacity-0 group-hover/card:opacity-100 whitespace-nowrap transition-all duration-300">
                    Order Now
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
