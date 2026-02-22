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
  ];
  return (
    <div className="flex justify-between gap-6 py-10">
      <div className=" grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary">Hot Deals</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary">Best Seller</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="text-xl font-medium text-secondary">Top Rated</div>
        {card.map((item) => {
          return <DealsCard key={item.id} item={item} />;
        })}
      </div>

      <div className="relative">
        <img
          src="/assets/bg1.jpg"
          className="h-105 max-w-sm object-contain overflow-hidden rounded-md"
        />
        {/* <div className="bg-[url(/assets/bg1.png)] bg-fixed w-full"> */}
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
