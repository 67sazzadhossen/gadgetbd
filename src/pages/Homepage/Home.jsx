import Accordion from "../../components/Home/Accordion";
import Banner from "../../components/Home/Banner";
import CategoriesSection from "../../components/Home/CategoriesSection";
import CustomerFavorites from "../../components/Home/CustomerFavorites";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <CategoriesSection />
      <CustomerFavorites />
      <Testimonials />
      <Accordion />
    </div>
  );
};

export default Home;
