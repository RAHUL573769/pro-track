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
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

//main
const Testimonials = () => {
  const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch(`https://protrackbd.herokuapp.com/feedback`, {
    method: 'GET',
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading />;
  }
  //console.log(reviews);

  refetch()
  return (
    <div className="bg-[url('/src/images/testimonials.jpg')] lg:h-screen  my-24 bg-cover ">
      <div className="card lg:w-[584px] lg:h-[600px] p-14 bg-teal-500 shadow-xl lg:top-40  top-60 lg:left-[780px] rounded-none">
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
              {
                reviews.slice(0 - 3).reverse().map((review) =>

                  <SwiperSlide>
                    <p className="mb-40 text-xl">{review.message?.slice(0, 300)}</p>
                  </SwiperSlide>

                )
              }

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;