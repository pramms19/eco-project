import { Heart, Search, ShoppingBasket } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-t border-gray-200">
      <div className="px-8 h-16 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src="/assets/logo.png" alt="Logo" />
          <p className="font-semibold text-gray-800 text-xl lg:text-3xl">Eco</p>
        </div>

        <div className="border-2 border-gray-200 rounded-sm flex gap-50 items-center pl-2">
          <div className="flex gap-1">
            <Search strokeWidth={1} size={20} />
            <div className="font-normal text-sm text-gray-400">Search</div>
          </div>
          <div className="bg-green-600 text-neutral-100 rounded-r-sm text-sm py-2 px-3">
            Search
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <Heart size={28} strokeWidth={1} />
          <div className="text-gray-400 ">|</div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <ShoppingBasket size={28} strokeWidth={1} />
            </div>
            <div>
              <div className="font-normal text-xs text-gray-400">Shopping Cart:</div>
              <div className="text-base font-medium">$60.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
