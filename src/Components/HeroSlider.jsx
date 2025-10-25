// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
              src="https://i.ibb.co.com/wNKQL1RG/Winter-Pet-Safety-Tips.png"
              alt=""
              className=" w-full object-cover h-full overflow-hidden"
            />
          }
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide className="flex justify-center items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl">
          <img
            src="https://www.dovelewis.org/sites/default/files/inline-images/Winter%20Care%20Tips%20for%20Your%20Pets.png"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide className="flex justify-center items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl  ">
          <div className=" h-full flex flex-col items-center justify-center p-8">
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
        {/* Slide 4 */}
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://i.ibb.co.com/LhrLt32Z/dog-and-cat-in-front-of-fire.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://i.ibb.co.com/KzXKJFBJ/Pet-Tips-For-Winter-Weather.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://i.ibb.co.com/twKwbZCX/images-q-tbn-ANd9-Gc-SH5s-Ta-Uk-OU-Vqia4-Lr5psl7-NKu-Dbue1-JEZVQ-s.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 7 */}
        <SwiperSlide className="flex justify-center items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://i.ibb.co.com/ZpMf1yr4/featured-image-58fb164c-d412-41ae-930d-67128246d818.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 8 */}
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://i.ibb.co.com/23WG1c1y/images-q-tbn-ANd9-Gc-TV6kt-Hmwzu30f-Sea-IXu-HNKDs5tu8-WTo6-SLql-DJw-If8r-6f-A7-Wvc-Gpih1zt-Q5-Trn-H0.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
        {/* Slide 9 */}
        <SwiperSlide className="flex flex-col md:flex-row items-center bg-linear-to-r from-blue-100 to-purple-100 rounded-xl ">
          <img
            src="https://luckydogpetlodge.com/wp-content/uploads/2019/11/exercise-your-dog-in-winter.jpg"
            alt=""
            className=" w-full object-cover h-full overflow-hidden"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
