import BuiltFeatures from "../Components/Home/BuiltFeatures";
import ConnectApps from "../Components/Home/ConnectApps";
import EndPart from "../Components/Home/EndPart";
import FeaturesSection from "../Components/Home/FeaturesSection";
import Hero from "../Components/Home/Hero";
import Introduction from "../Components/Home/Introduction";

import ProUser from "../Components/Home/ProUser";
import Service from "../Components/Home/Service";
import Summery from "../Components/Home/Summery";
import Testimonials from "../Components/Home/Testimonials";
import Txt from "../Components/Home/Txt";
import Navbar from "../Components/Shared/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <FeaturesSection></FeaturesSection>
      <Txt></Txt>
      <Introduction></Introduction>
      <Service></Service>
      <ConnectApps></ConnectApps>
      <BuiltFeatures></BuiltFeatures>
      <Summery />
      <ProUser></ProUser>
      <Testimonials />
    <EndPart></EndPart>
      
    
    </div>
  );
};

export default Home;
