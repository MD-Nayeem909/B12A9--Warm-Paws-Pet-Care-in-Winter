// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/bangladesh-t20-national-league-2024.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";

const HeroSlider = () => {
  return (
    <div className="mb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: {
            // small screen
            slidesPerView: 1,
          },
          768: {
            // tablet
            slidesPerView: 1,
          },
          1024: {
            // large screen
            slidesPerView: 1,
          },
        }}
        className="mySwiper h-[306px] md:h-[400px] max-w-7xl rounded-xl"
      >
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          {
            <img
              src={slide1}
              alt=""
              className=" w-full object-cover h-full overflow-hidden"
            />
          }
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 2
        </SwiperSlide>

          {/* Slide 3 */}
        <SwiperSlide className="flex flex-col md:flex-row  bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-6 ">
          <div className="m-4 md:m-8 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Keep Your Pets Cozy This Winter
            </h1>
            <p className="text-lg text-blue-800 mb-6">
              Discover the best winter care for your furry friends with our
              curated services and expert tips.
            </p>
            <div className="lg:flex flex-col hidden sm:flex-row gap-4 ">
              <Link
                to="/services.html"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center font-medium transition duration-300"
              >
                Explore Services
              </Link>
              <Link
                to="/tips.html"
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-lg text-center font-medium border border-blue-200 transition duration-300"
              >
                Winter Tips
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 4
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 5
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 6
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 7
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 8
        </SwiperSlide>

        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-12  h-full">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
