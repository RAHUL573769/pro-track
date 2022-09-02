import React from "react";
import image1 from "../../images/testimonials.jpg";
import image2 from "../../images/calander.png";
import image3 from "../../images/testimonials.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { FaQuoteRight } from 'react-icons/fa';


const Testimonials = () => {
  return (
    <div className="bg-[url('/src/images/testimonials.jpg')] lg:h-screen  my-24 bg-cover">
      <div className="card lg:w-[584px] lg:h-[600px] p-14 bg-teal-500 shadow-xl lg:top-20 top-60 lg:left-[642px] rounded-none">
        <h1 className="ml-10 mt-5 text-slate-600 font-serif tracking-wider font-bold">
          Testimonial
        </h1>
        <h1 className="text-4xl ml-10 font-bold mt-5 text-zinc-200">
          What Our Clients Say
        </h1>
        <div className="flex">
          <div className="ml-10 mt-5">
            <FaQuoteRight className="text-2xl text-rose-600" />
          </div>
          <div className="mx-8 mt-5">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <p className="text-white font-serif text-xl">
                  ProTrack s the future of work with tasks, docs, goals, project management and more. Data silos and duplicate spend have no place in a modern workplace. ProTrack brings all of your work into one place—one app to replace them all. Whether you're proofing ads or working on sprints, ProTrack is fully customizable for every type and size of team.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="text-white font-serif text-xl">
                  For over 2 years, ProTrack has provided the best customer support and the most value per free end user of any issue tracking, help desk, incident and complaint management, or other process management software available. You can choose whether to take advantage of our Cloud SaaS environment or host ProTrack yourself on-premise.
                </p>
              </SwiperSlide>
              <SwiperSlide className="mb-40">
                <p className="text-white font-serif text-xl">
                  If you are looking for a simple way how to manage and plan projects, track issues, estimating time, use ProTrack features, and in one place also cover test management, juno.one is the right choice for you. With clear dashboards, you are allowed to manage tasks and track bugs in a way you’ve seen never before.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
