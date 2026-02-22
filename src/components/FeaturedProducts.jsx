import DealsSection from "./DealsSection";
import ProductCard from "./ProductCard";

export function FeaturedProducts() {
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
    <div className="mt-14 px-16">
      <div className=" py-14 text-4xl font-semibold text-secondary text-center">
        Feature Products
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-5 gap-5">
        {card.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>

      {/* Hot Deals */}
      <DealsSection />
    </div>
  );
}
