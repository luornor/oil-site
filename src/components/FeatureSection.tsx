// src/components/FeatureSection.tsx
import { Globe2, Truck, Headphones } from "lucide-react";
import featureImg from "/img/feature.jpg"; // Ensure this image exists

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-red-500" />,
    title: "Worldwide Service",
    description: "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
  },
  {
    icon: <Truck className="w-8 h-8 text-red-500" />,
    title: "On Time Delivery",
    description: "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
  },
  {
    icon: <Headphones className="w-8 h-8 text-red-500" />,
    title: "24/7 Telephone Support",
    description: "Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text + Features */}
        <div className="pl-20 h-full">
          <h6 className="text-blue-400 text-sm uppercase font-bold mb-3">Our Features</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            We Are Trusted Logistics Company Since 1990
          </h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div>{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-black">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="overflow-hidden">
          <img
            src={featureImg}
            alt="Our Features"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
