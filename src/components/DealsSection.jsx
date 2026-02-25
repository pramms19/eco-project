import { ArrowRight } from "lucide-react";
import DealsCard from "./DealsCard";

export default function DealsSection() {
  const card = [
    {
      id: 1,
      image: "/assets/leaf.png",
      name: "Chinese Cabbage",
      price: "$14.99",
    },
    {
      id: 2,
      image: "/assets/lettuce.png",
      name: "Green Lettuce",
      price: "$14.99",
    },
    {
      id: 3,
      image: "/assets/capsicum.png",
      name: "Green Capsicum",
      price: "$14.99",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 ">
      <div className=" grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary text-center lg:text-left">Hot Deals</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary text-center lg:text-left">Best Seller</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary text-center lg:text-left">Top Rated</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>

      <div className="relative bg-[url(/assets/bg1.jpg)] bg-cover bg-center h-65 lg:h-105 max-w-full lg:max-w-sm overflow-hidden rounded-md col-span-1 md:col-span-3 lg:col-span-1 ">
        {/* <img
          src="/assets/bg1.jpg"
          className="h-105 max-w-sm object-contain overflow-hidden rounded-md"
        /> */}
        <div className="grid justify-items-center">
          <div className="absolute top-1/8 text-center">
            <div className="text-sm font-medium text-secondary">
              SUMMER SALE
            </div>
            <div className="text-primary text-3xl font-semibold">75% Off</div>
            <button className="rounded-full flex gap-2 bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-background">
              Shop now <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
