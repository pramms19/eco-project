import { ShoppingBasket, Star } from "lucide-react";

export default function DealsCard({ item }) {
  return (
    <div className="border border-neutral-200 hover:border-green-600 hover:shadow-lg hover:shadow-green-50 rounded-sm flex items-center px-2">
      <div className="grid grid-cols-2 content-center gap-5">
        <div className="flex space-x-4 items-center">
          <img src={item.image} alt="apple" className="h-20" />
          <div>
            <p className="text-neutral-600 text-xs">{item.name}</p>
            <p className="text-neutral-900 text-lg font-medium">{item.price}</p>
            <div className="flex gap-1">
              <Star size={10} className="fill-sale" strokeWidth={0} />
              <Star size={10} className="fill-sale" strokeWidth={0} />
              <Star size={10} className="fill-sale" strokeWidth={0} />
              <Star size={10} className="fill-sale" strokeWidth={0} />
              <Star size={10} className="fill-background" strokeWidth={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
