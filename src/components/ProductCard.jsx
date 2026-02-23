import { Handbag, Star } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <div className="border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center p-4">
      <img src={item.image} alt="apple" className="pb-2" />
      <div className="flex gap-12 justify-between items-center">
        <div>
          <div className="text-neutral-600 text-xs">{item.name}</div>
          <div className="text-secondary text-lg font-medium">{item.price}</div>
          <div className="flex gap-1">
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-background text-background"  />
          </div>
        </div>
        <div className="bg-background hover:bg-primary hover:text-white rounded-full place-content-center h-10 w-10 p-2">
          <Handbag strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}
