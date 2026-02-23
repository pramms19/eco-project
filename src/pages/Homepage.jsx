import LocationBar from "../components/LocationBar";
import Navbar from "../components/Navbar";
import MenuItems from "../components/MenuItems";
import HeaderSection from "../components/HeaderSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import TopCategory from "../components/TopCategory";
import NewestProducts from "../components/NewestProducts";

export default function Homepage() {
  return (
    <div className="">
      <LocationBar />
      <Navbar />
      <MenuItems />
      <HeaderSection />
      <FeaturedProducts />
      <TopCategory />
      <NewestProducts />
    </div>
  );
}
