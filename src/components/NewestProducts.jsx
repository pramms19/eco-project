import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { Suspense, use } from "react";
import { fetchProducts } from "../actions/fetchproducts";
import { ProductSkeleton } from "./ProductSkeletonCard";

export default function NewestProducts() {
  const products = fetchProducts(5);
  return (
    <Suspense fallback={<ProductSkeleton length={5}/>}>
      <NewestProductsClient products={products} />
    </Suspense>
  );
}

function NewestProductsClient({ products }) {
  const productsData = use(products);
  console.log(productsData?.products);

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
        {productsData?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
