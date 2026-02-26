import DealsSection from "./DealsSection";
import ProductCard from "./ProductCard";
import {  useEffect, useState } from "react";

export function FeaturedProducts() {
  // const card = [
  //   { id: 1, image: "/assets/apple.png", name: "Green Apple", price: "$14.99" },
  //   {
  //     id: 2,
  //     image: "/assets/leaf.png",
  //     name: "Chinese Cabbage",
  //     price: "$14.99",
  //   },
  //   {
  //     id: 3,
  //     image: "/assets/lettuce.png",
  //     name: "Green Lettuce",
  //     price: "$14.99",
  //   },
  //   {
  //     id: 4,
  //     image: "/assets/capsicum.png",
  //     name: "Green Capsicum",
  //     price: "$14.99",
  //   },
  //   { id: 5, image: "/assets/corn.png", name: "Corn", price: "$14.99" },
  // ];

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <p>Products Loading...</p>;
  if (hasError) return <p>Error in fetching products</p>;

  console.log("product", products);
  return (
    <div className="mt-60 md:mt-30 lg:mt-14 px-4 sm:px-6 lg:px-8 ">
      <div className=" py-14 text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary text-center">
        Feature Products
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Hot Deals */}
      <DealsSection />
    </div>
  );
}
