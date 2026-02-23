import LocationBar from "../components/LocationBar";
import Navbar from "../components/Navbar";
import MenuItems from "../components/MenuItems";
import HeaderSection from "../components/HeaderSection";
import { FeaturedProducts } from "../components/FeaturedProducts";
import TopCategory from "../components/TopCategory";
import NewestProducts from "../components/NewestProducts";
import ClientTestimonial from "../components/ClientTestimonial";
import SocialMedia from "../components/SocialMedia";

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
      <ClientTestimonial />
      <SocialMedia />
    </div>
  );
}
