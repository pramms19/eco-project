import SaleSection from "../components/SaleSection";

export default function TopCategory() {
  const card = [
    {
      id: 1,
      image: "/assets/vegs2.png",
      title: "Vegetables",
      number: "165 Products",
    },
    {
      id: 2,
      image: "/assets/fruits.png",
      title: "Fresh Fruits",
      number: "137 Products",
    },
    {
      id: 3,
      image: "/assets/fish.png",
      title: "River Fish",
      number: "48 Products",
    },
    { id: 4, image: "/assets/meat.png", title: "Meat", number: "58 Products" },
    {
      id: 5,
      image: "/assets/sd.png",
      title: "Drinks and Water",
      number: "70 Products",
    },
    {
      id: 6,
      image: "/assets/snacks.png",
      title: "Snacks",
      number: "90 Products",
    },
  ];
  return (
    <div className="px-16">
      <div className=" py-14 text-4xl font-semibold text-secondary text-center">
        Top Category
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-between text-wrap">
        {card.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center place-content-center p-6 text-center"
            >
              <img
                src={item.image}
                alt="Vegetables"
                className="pb-2 h-20 w-20"
              />
              <div className="text-lg text-primary font-medium">
                {item.title}
              </div>
              <div className="text-sm text-neutral-400 font-normal">
                {item.number}
              </div>
            </div>
          );
        })}
      </div>

      <SaleSection />
    </div>
  );
}
