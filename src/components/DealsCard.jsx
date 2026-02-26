import { Handbag, Star, Heart, Eye } from "lucide-react";

export default function DealsCard({ item }) {
  return (
    <div className="group relative border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex items-center px-2">
      <div className="flex justify-between content -center gap-5">
        <div className="flex space-x-4 items-center">
          <img src={item.image} alt="apple" className="h-20" />
          <div className="block hover:hidden">
            <p className="text-neutral-600 text-xs">{item.name}</p>
            <p className="text-secondary text-lg font-medium">{item.price}</p>
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
      <div className="absolute right-6 hidden group-hover:block bg-white p-4">
        <div className="space-y-2">
          <p className="text-primary text-xs">{item.name}</p>
          <div className="flex justify-between gap-2">
            <Handbag
              strokeWidth={1}
              className="bg-white  hover:bg-primary hover:text-white rounded-full place-content-center h-8 md:h-10 w-8 md:w-10 p-1 md:p-2"
            />
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
    </div>
  );
}
