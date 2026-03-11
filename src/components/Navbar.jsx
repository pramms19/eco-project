import { Heart, Search, Handbag } from "lucide-react";
import { useCart } from "../store/CartStore";
import { useWishlist } from "../store/WishlistStore";

export default function Navbar() {
  //   const [cartItems] = useCartStorage("cartItems", []);
  // console.log('jjj')
  //   const totalCount = cartItems.reduce(
  //     (total, item) => total + item.quantity,
  //     0,
  //   );

  const { totalCount } = useCart();
  const {wishlist} = useWishlist();

  return (
    <div className="border-t border-neutral-200">
      <div className="px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          {/* <img src="/assets/logo.png" alt="Logo" /> */}
          <p className="font-semibold text-dark text-2xl lg:text-3xl">Glow</p>
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

        <div className="flex gap-1 items-center">
          <div className="relative flex items-center">
            <Heart size={28} strokeWidth={1} />
            <div className="absolute bottom-1/2 left-1/2 h-4 w-4 rounded-full bg-red-700 text-white text-xs text-center">
                {wishlist.length}
              </div>
          </div>
          <div className="text-neutral-400 text-2xl font-light">|</div>
          <div className="flex gap-2">
            <div className="relative flex items-center">
              <Handbag size={28} strokeWidth={1} />
              <div className="absolute bottom-1/2 left-1/2 h-4 w-4 rounded-full bg-red-700 text-white text-xs text-center">
                {totalCount}
              </div>
            </div>
            <div className="hidden md:block flex-2">
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
