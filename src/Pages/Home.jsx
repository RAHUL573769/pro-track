import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";
import Objective from "../Components/Home/Objective";
import Summery from "../Components/Home/Summery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Introduction></Introduction>
      <Summery></Summery>
      <Objective></Objective>
    </div>
  );
};

export default Home;
