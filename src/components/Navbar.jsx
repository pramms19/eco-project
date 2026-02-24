import { Heart, Search, Handbag } from "lucide-react";

export default function Navbar() {
  return (
    <div className="border-t border-neutral-200">
      <div className="px-8 h-20 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src="/assets/logo.png" alt="Logo" />
          <p className="font-semibold text-neutral-800 text-xl lg:text-3xl">
            Eco
          </p>
        </div>

        <div className="hidden md:flex border border-neutral-200 rounded-sm gap-50 items-center pl-2">
          <div className="flex gap-1">
            <Search strokeWidth={1} size={20} />
            <div className="font-normal text-sm text-neutral-400">Search</div>
          </div>
          <button className="bg-primary text-neutral-100 hover:bg-dark rounded-r-sm text-sm py-2 px-3">
            Search
          </button>
        </div>

        <div className="hidden md:flex gap-1 items-center">
          <Heart size={28} strokeWidth={1} />
          <div className="text-neutral-400 text-2xl font-light">|</div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <Handbag size={28} strokeWidth={1} />
            </div>
            <div>
              <div className="font-normal text-xs text-neutral-400">
                Shopping Cart:
              </div>
              <div className="text-base text-neutral-800 font-medium">
                $60.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
