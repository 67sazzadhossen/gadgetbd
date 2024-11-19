import Accordion from "../../components/Home/Accordion";
import Banner from "../../components/Home/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <Accordion />
    </div>
  );
};

export default Home;
