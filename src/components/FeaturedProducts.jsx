import HotDeals from "./HotDeals";
import ProductCard from "./ProductCard";

export function FeaturedProducts() {
  return (
    <div className="mt-14 px-16">
      <div className=" py-14 text-4xl font-semibold text-neutral-900 text-center">
        Feature Products
      </div>

      {/* Product Cards */}
      <ProductCard />

      {/* Hot Deals */}
      <HotDeals />
    </div>
  );
}
