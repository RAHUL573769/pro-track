import FeaturesSection from "../Components/Home/FeaturesSection";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import Summery from "../Components/Home/Summery";
import Testimonials from "../Components/Home/Testimonials";
import Txt from "../Components/Home/Txt";
import UserIcon from "../Components/Home/UserIcon";

const Home = () => {
  return (
    <div>
      <Hero />
      <Txt></Txt>
      <UserIcon></UserIcon>
      <Introduction></Introduction>
      <Summery/>
      <Objective></Objective>
      <Testimonials/>
    </div>
  );
};

export default Home;
