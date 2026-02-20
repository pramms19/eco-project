import { ShoppingBasket, Star } from "lucide-react";

export default function ProductCard() {
  const card = [
    { id: 1, image: "/assets/apple.png", name: "Green Apple", price: "$14.99" },
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
    { id: 1, image: "/assets/corn.png", name: "Corn", price: "$14.99" },
  ];
  return (
    <div className="flex justify-between gap-5">
      {card.map((item) => {
        return (
          <div className="border border-neutral-200 hover:border-green-600 hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center p-4">
            <img src={item.image} alt="apple" className="pb-2" />
            <div className="flex gap-12 justify-between items-center">
              <div>
                <div className="text-neutral-600 text-xs">{item.name}</div>
                <div className="text-neutral-900 text-lg font-medium">
                  {item.price}
                </div>
                <div className="flex gap-1">
                  <Star size={10} className="fill-sale" strokeWidth={0} />
                  <Star size={10} className="fill-sale" strokeWidth={0} />
                  <Star size={10} className="fill-sale" strokeWidth={0} />
                  <Star size={10} className="fill-sale" strokeWidth={0} />
                  <Star size={10} className="fill-background" strokeWidth={0} />
                </div>
              </div>
              <div className="bg-background hover:bg-green-600 hover:text-white rounded-full place-content-center h-10 w-10 p-2">
                <ShoppingBasket strokeWidth={1} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
