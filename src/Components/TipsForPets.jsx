import React from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiHome,
  FiScissors,
  FiShoppingBag,
} from "react-icons/fi";

const TipsForPets = () => {
  const features = [
    {
      title: "Winter Gear",
      description:
        "Cozy jackets, booties, and accessories to keep your pet warm.",
      href: "/clothing.html",
      color: "blue",
      icon: <FiShoppingBag className="text-blue-600 w-6 h-6" />,
      linkText: "Shop now",
    },
    {
      title: "Grooming",
      description:
        "Special winter grooming to protect paws and skin from the cold.",
      href: "/grooming.html",
      color: "purple",
      icon: <FiScissors className="text-purple-600 w-6 h-6" />,
      linkText: "Find salons",
    },
    {
      title: "Pet Sitting",
      description: "Trusted caretakers when you're away during the holidays.",
      href: "/sitters.html",
      color: "green",
      icon: <FiHome className="text-green-600 w-6 h-6" />,
      linkText: "Find sitters",
    },
    {
      title: "Winter Guide",
      description:
        "Expert advice for keeping your pet safe and happy all season.",
      href: "/guide.html",
      color: "orange",
      icon: <FiBookOpen className="text-orange-600 w-6 h-6" />,
      linkText: "Learn more",
    },
  ];
  return (
    <div className="mb-16">
      <div className="mb-12 text-primary text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Winter Care Tips for Pets</h2>
        <p className="text-xl px-8" data-aos="fade-up">
          Professional advice to keep your furry friends healthy and happy all
          winter long
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 card bg-base-200 shadow-sm p-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-base-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div
              className={`bg-${item.color}-100 w-14 h-14 rounded-full flex items-center justify-center mb-4`}
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>

            <a
              href={item.href}
              className={`mt-4 inline-flex items-center text-${item.color}-600 hover:text-${item.color}-800`}
            >
              {item.linkText} <FiArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsForPets;
