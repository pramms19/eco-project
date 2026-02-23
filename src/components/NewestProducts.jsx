import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

export default function NewestProducts() {
  const card = [
    { id: 1, image: "/assets/apple.png", name: "Green Apple", price: "$14.99" },
    {
      id: 1,
      image: "/assets/leaf.png",
      name: "Chinese Cabbage",
      price: "$14.99",
    },
    {
      id: 1,
      image: "/assets/lettuce.png",
      name: "Green Lettuce",
      price: "$14.99",
    },
    {
      id: 1,
      image: "/assets/capsicum.png",
      name: "Green Capsicum",
      price: "$14.99",
    },
    { id: 1, image: "/assets/corn.png", name: "Corn", price: "$14.99" },
  ];

  return (
    <div className="px-16">
      <div className="flex justify-between">
        <div className="text-4xl font-semibold text-secondary pb-10">
          Newest Products
        </div>
        <NavLink className="flex gap-2 text-sm lg:text-base font-medium text-primary hover:text-dark">
          View All <ArrowRight />
        </NavLink>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-5 gap-5">
        {card.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
