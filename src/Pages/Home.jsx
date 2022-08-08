import FeaturesSection from "../Components/Home/FeaturesSection";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import ProUser from "../Components/Home/ProUser";
import Service from "../Components/Home/Service";
import Summery from "../Components/Home/Summery";
import Txt from "../Components/Home/Txt";
import UserIcon from "../Components/Home/UserIcon";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Hero />
      <Txt></Txt>
      <Introduction></Introduction>
      <Service></Service>
      
      <UserIcon></UserIcon>
      <Summery></Summery>
      <FeaturesSection></FeaturesSection>
      <ProUser></ProUser>
      <Objective></Objective>
    </div>
  );
};

export default Home;
