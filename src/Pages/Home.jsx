import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import Summery from "../Components/Home/Summery";
import UserIcon from "../Components/Home/UserIcon";

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction></Introduction>
      <Summery></Summery>
      <UserIcon></UserIcon>
      <Objective></Objective>
    </div>
  );
};

export default Home;
