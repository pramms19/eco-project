import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

export default function NewestProducts() {
  const card = [
    { id: 1, image: "/assets/apple.png", name: "Green Apple", price: "$14.99" },
    {
      id: 2,
      image: "/assets/leaf.png",
      name: "Chinese Cabbage",
      price: "$14.99",
    },
    {
      id: 3,
      image: "/assets/lettuce.png",
      name: "Green Lettuce",
      price: "$14.99",
    },
    {
      id: 4,
      image: "/assets/capsicum.png",
      name: "Green Capsicum",
      price: "$14.99",
    },
    { id: 5, image: "/assets/corn.png", name: "Corn", price: "$14.99" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary pb-10">
          Newest Products
        </div>
        <NavLink className="flex gap-2 text-xs md:text-sm lg:text-base font-medium text-primary hover:text-dark pt-2 md:pt-0">
          View All <ArrowRight className="h-3 md:h-5 w-3 md:w-5" />
        </NavLink>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {card.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
