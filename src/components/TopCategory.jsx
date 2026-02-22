import SaleSection from "../components/SaleSection";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TopCategory() {
  const CategoryCard = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 5; // Number of cards to show at once
  const maxIndex = CategoryCard.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <div className=" px-16">
      <div className=" py-14 text-4xl font-semibold text-secondary text-center">
        Top Category
      </div>

      <div className="relative max-w-7xl mx-auto pl-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {CategoryCard.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="border border-neutral-200 hover:border-primary hover:shadow-lg hover:shadow-green-50 rounded-sm flex flex-col items-center place-content-center p-6 text-center flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - 1rem)` }}
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
        </div>
        <button
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-background text-secondary rounded-full p-2"
          onClick={prevSlide}
        >
          <ArrowLeft />
        </button>
        <button
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-background text-secondary rounded-full p-2"
          onClick={nextSlide}
        >
          <ArrowRight />
        </button>
      </div>

      <SaleSection />
    </div>
  );
}
