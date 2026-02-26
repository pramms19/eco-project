import { Handbag, Star, Heart, Eye } from "lucide-react";

export default function ProductCard({ item }) {
  return (
    <div className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center p-4">
      <img src={item.image} alt="apple" className="pb-2" />
      <div className="flex gap-5 md:gap-12 justify-between items-center">
        <div>
          <div className="text-neutral-600 text-xs">{item.name}</div>
          <div className="text-secondary text-lg font-medium">{item.price}</div>
          <div className="flex gap-1">
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-sale  text-sale" />
            <Star size={10} className="fill-background text-background" />
          </div>
        </div>
        <div className="bg-background hover:bg-primary hover:text-white rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2">
          <Handbag strokeWidth={1} />
        </div>
        <div className="absolute top-1/14 right-4 hidden group-hover:block space-y-2">
          <Heart
            strokeWidth={1}
            className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
          />
          <Eye
            strokeWidth={1}
            className="bg-white  hover:bg-primary hover:text-white rounded-full h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
          />
        </div>
      </div>
    </div>
  );
}
