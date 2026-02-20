import { ShoppingBasket, Star } from "lucide-react";

export default function DealsCard() {
  const card = [
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
  ];

  return (
    <div className="py-10 grid grid-cols-1 gap-5">
      <div className="text-xl font-medium text-neutral-900"> Hot Deals</div>

      {card.map((item) => {
        return (
          <div className="border border-neutral-200 hover:border-green-600 hover:shadow-lg hover:shadow-green-50 rounded-sm flex items-center px-2">
            <div
              key={item.id}
              className="grid grid-cols-2 content-center gap-5"
            >
              <div className="flex space-x-4 items-center">
                <img src={item.image} alt="apple" className="h-30" />
                <div>
                  <p className="text-neutral-600 text-xs">{item.name}</p>
                  <p className="text-neutral-900 text-lg font-medium">
                    {item.price}
                  </p>
                  <div className="flex gap-1">
                    <Star size={10} className="fill-sale" strokeWidth={0} />
                    <Star size={10} className="fill-sale" strokeWidth={0} />
                    <Star size={10} className="fill-sale" strokeWidth={0} />
                    <Star size={10} className="fill-sale" strokeWidth={0} />
                    <Star
                      size={10}
                      className="fill-background"
                      strokeWidth={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
