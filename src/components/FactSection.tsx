import { Headphones, Users, Ship, Star } from "lucide-react";

const FactSection = () => {
  return (
    <section className="py-20 px-10 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - Text + Call */}
        <div>
          <h6 className="text-blue-400 text-sm uppercase mb-3 font-semibold">Some Facts</h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            #1 Place To Manage All Of Your Shipments
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            At ShipMaster, we bring efficiency and reliability to your logistics operations. 
            From global freight coordination to last-mile delivery, we've got you covered.
          </p>

          {/* Contact Box */}
          <div className="flex items-center text-white p-5">
            <div className="bg-red-600 p-3">
              <Headphones className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h6 className="text-sm text-black">Call for any query!</h6>
              <h3 className="text-xl font-bold text-red-600">+012 345 6789</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Counters */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Box 1 */}
          <div className="bg-red-500 p-6 rounded-lg shadow-md text-white">
            <Users className="w-8 h-8 mb-3" />
            <h2 className="text-3xl font-bold mb-1">1234</h2>
            <p className="text-sm">Happy Clients</p>
          </div>

          {/* Box 2 */}
          <div className="bg-green-600 p-6 rounded-lg shadow-md text-white">
            <Star className="w-8 h-8 mb-3" />
            <h2 className="text-3xl font-bold mb-1">1234</h2>
            <p className="text-sm">Customer Reviews</p>
          </div>

          {/* Box 3 (spans 2nd row left) */}
          <div className="bg-blue-400 p-6 rounded-lg shadow-md text-white sm:col-span-1">
            <Ship className="w-8 h-8 mb-3" />
            <h2 className="text-3xl font-bold mb-1">1234</h2>
            <p className="text-sm">Complete Shipments</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FactSection;
