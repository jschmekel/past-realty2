import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Bed, Square } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Moderne 3.5-Zimmer-Wohnung",
    location: "Basel-Stadt",
    price: "CHF 750'000",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 3.5,
    area: 95,
  },
  {
    id: 2,
    title: "Einfamilienhaus mit Garten",
    location: "Riehen",
    price: "CHF 1'450'000",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 5.5,
    area: 180,
  },
  {
    id: 3,
    title: "Penthouse mit Dachterrasse",
    location: "Basel-Zentrum",
    price: "CHF 1'850'000",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 4.5,
    area: 140,
  },
  {
    id: 4,
    title: "Charmante Altbauwohnung",
    location: "Kleinbasel",
    price: "CHF 620'000",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 3,
    area: 85,
  },
  {
    id: 5,
    title: "Mehrfamilienhaus",
    location: "Allschwil",
    price: "CHF 2'200'000",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 12,
    area: 450,
  },
  {
    id: 6,
    title: "Loft-Wohnung im Trendviertel",
    location: "Gundeldingen",
    price: "CHF 890'000",
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
    rooms: 2.5,
    area: 110,
  },
];

export default function ImmobilienPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Aktuelle Immobilien
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Entdecken Sie eine Auswahl unserer aktuellen Objekte. Für weitere
            Informationen oder eine Besichtigung stehen wir Ihnen gerne zur
            Verfügung.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin size={16} className="mr-1" />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">
                    {property.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      {property.rooms} Zimmer
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-1" />
                      {property.area} m²
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#E1251D]">
                    {property.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
