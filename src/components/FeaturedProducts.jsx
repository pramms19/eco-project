import DealsSection from "./DealsSection";
import ProductCard from "./ProductCard";

export function FeaturedProducts() {
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
    <div className="mt-60 md:mt-30 lg:mt-14 px-4 sm:px-6 lg:px-8 ">
      <div className=" py-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary text-center">
        Feature Products
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {card.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* Hot Deals */}
      <DealsSection />
    </div>
  );
}
