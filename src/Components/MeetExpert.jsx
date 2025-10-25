import { CheckCircle, Clock, MapPin, Phone, Star } from "lucide-react";
import Card from "./Card";

const providers = [
  {
    id: 1,
    name: "Cozy Paws Salon",
    category: "Grooming",
    rating: 4.9,
    reviews: 287,
    location: "Downtown",
    address: "123 Main St, Downtown",
    phone: "(555) 123-4567",
    email: "info@cozypaws.com",
    hours: "Mon-Sat: 9AM-6PM, Sun: 10AM-4PM",
    description:
      "Professional grooming with winter-specific coat care and conditioning treatments.",
    specialties: [
      "Winter Grooming",
      "Coat Care",
      "Nail Trimming",
      "Spa Treatments",
    ],
    yearsInBusiness: 8,
    certified: true,
    image: "🧥",
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Warm Hearts Vet Clinic",
    category: "Veterinary",
    rating: 4.8,
    reviews: 412,
    location: "Midtown",
    address: "456 Oak Ave, Midtown",
    phone: "(555) 234-5678",
    email: "contact@warmheartsvet.com",
    hours: "Mon-Fri: 8AM-7PM, Sat: 9AM-5PM, Sun: 10AM-3PM",
    description:
      "Comprehensive veterinary care specializing in winter health assessments and preventive care.",
    specialties: [
      "Health Checkups",
      "Vaccinations",
      "Nutrition Consulting",
      "Emergency Care",
    ],
    yearsInBusiness: 12,
    certified: true,
    image: "🏥",
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Frosty Feet Care",
    category: "Paw Care",
    rating: 4.7,
    reviews: 156,
    location: "Westside",
    address: "789 Pine Rd, Westside",
    phone: "(555) 345-6789",
    email: "hello@frostyfeet.com",
    hours: "Tue-Sun: 10AM-5PM, Closed Mondays",
    description:
      "Specialized paw care including salt protection, moisturizing treatments, and protective services.",
    specialties: [
      "Paw Protection",
      "Salt Removal",
      "Moisturizing",
      "Protective Balms",
    ],
    yearsInBusiness: 5,
    certified: true,
    image: "🐾",
    availability: "Available Today",
  },
];

const MeetExpert = () => {
  return (
    <div className="mb-16">
      <section className="">
        <div className="mb-12 text-primary text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Vets</h2>
          <p className="text-xl">
            Connect with certified and experienced <br /> professionals
            dedicated to your pet's winter care
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="">
            <p className="text-sm text-primary font-semibold mb-3">
              Showing {providers.length} Expert
              {providers.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 card bg-base-200 shadow-sm p-8">
            {providers.map((provider) => (
              <Card key={provider.id} provider={provider}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetExpert;
