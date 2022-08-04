import FeaturesSection from "../Components/Home/FeaturesSection";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import Summery from "../Components/Home/Summery";
import Txt from "../Components/Home/Txt";
import UserIcon from "../Components/Home/UserIcon";

const Home = () => {
  return (
    <div>
      <Hero />
      <Txt></Txt>
      <Introduction></Introduction>
      <Summery></Summery>
      <UserIcon></UserIcon>
      <FeaturesSection></FeaturesSection>
      <Objective></Objective>
    </div>
  );
};

export default Home;
