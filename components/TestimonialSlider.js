import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// testimonial data
export const testimonialSlider = [
  {
    image: "/t-avt-1.png",
    name: "Adarsh Shaw",
    position: "UI/ UX Designer at Saaragh",
    message:
      "I had the pleasure of working with Gokul at Saaragh. He is highly skilled and dedicated frontend developer. His ability to consistently deliver clean, efficient, and user-friendly code. His strong communication and collaboration skills, making them a valuable team member.",
  },
  {
    image: "/t-avt-2.png",
    name: "Karthikeyan Arivalagan",
    position: "Head of Engineering at HReasily",
    message:
      "Gokul is a dedicated and enthusiastic professional who consistently demonstrates a strong commitment to expanding his skillset and adapting to new technologies. His positive attitude, combined with a genuine passion for learning, makes him a valuable asset to any team. I have no doubt that he will continue to excel in his career as he embraces new opportunities and challenges.",
  },
  {
    image: "/t-avt-3.png",
    name: "Kevin Purwito",
    position: "Senior Developer at HReasily",
    message:
      "A good personality and dedicated developer. Hopeful to see your continued growth.",
  },
  {
    image: "/t-avt-3.png",
    name: "Fajar Ramadhan",
    position: "Software Engineer at HReasily",
    message:
      "A nice person with a strong work ethic possesses dedication to their job. Glad to know you, Gokul.",
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[400px]"
      >
        {testimonialSlider.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-full">
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 mx-auto">
                      <Image
                        src={person.image}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div className="text-lg">{person.name}</div>
                    <div className="text-[12px] uppercase font-extralight tracking-widest">
                      {person.position}
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  </div>
                  <div className="xl:text-md text-center md:text-left">
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
