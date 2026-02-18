import {ArrowRight} from "lucide-react";

export default function HeaderSection() {
  return (
    <div className="bg-green-50">
      <div className="flex justify-between items-center h-full w-full gap-5 py-18 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-wrap">
          <div className="text-green-600 text-sm font-medium">
            Welcome to Shopery
          </div>
          <div className="text-6xl/20 font-semibold">
            Fresh & Healthy Organic Food
          </div>
          <div className="flex gap-2 text-3xl/15">
            Sale up to{" "}
            <div className="font-semibold text-orange-400">30% OFF</div>
          </div>
          <div className="text-sm text-neutral-500">
            Free shipping on all your order. we deliver, you enjoy
          </div>
          <button className="rounded-full flex gap-2 bg-green-600 mt-6 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-white hover:bg-green-700">
            Shop now <ArrowRight />
          </button>
        </div>
        <div className="md:shrink-0 max-w-2xl">
          <img
            src="/assets/vegs.png"
            alt="Vegetables"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
