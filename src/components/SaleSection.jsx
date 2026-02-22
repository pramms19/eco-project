import { ArrowRight } from "lucide-react";

export default function SaleSection() {
  return (
    <div className="py-14">
      <div className="grid grid-cols-3 gap-5">
        <div className="relative bg-[url(/assets/monthbg.png)] h-105 max-w-sm object-contain overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="absolute top-1/12 text-center space-y-5">
              <div className="text-sm text-white font-medium">BEST DEALS</div>
              <div className="text-white text-4xl font-semibold">
                Sale Of The Month
              </div>
              <button className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-background">
                Shop now <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-[url(/assets/meatbg.png)] h-105 max-w-sm object-contain overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="absolute top-1/12 text-center space-y-5">
              <div className="text-sm text-white font-medium">85% FAT FREE</div>
              <div className="text-white text-4xl font-semibold">
                Low-Fat Meat
              </div>
              <div className="text-white text-lg flex gap-2 justify-center">
                Started at <div className="text-sale font-semibold">$79.99</div>
              </div>
              <button className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-background">
                Shop now <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-[url(/assets/fruitbg.png)] h-105 max-w-sm object-contain overflow-hidden rounded-md">
          <div className="grid justify-items-center">
            <div className="absolute top-1/12 text-center space-y-5">
              <div className="text-sm text-secondary font-medium">
                SUMMER SALE
              </div>
              <div className="text-secondary text-4xl font-semibold">
                100% Fresh Fruit
              </div>
              <div className="text-secondary text-lg flex gap-2 justify-center">
                {" "}
                Up to{" "}
                <div className="bg-secondary rounded-md text-yellow font-semibold px-2">
                  60% OFF
                </div>
              </div>
              <button className="rounded-full flex gap-2 justify-self-center bg-neutral-50 mt-4 px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-primary hover:bg-background">
                Shop now <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
