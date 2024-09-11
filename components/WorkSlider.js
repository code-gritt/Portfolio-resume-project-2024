// icons
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Next.js Car Showroom App",
          path: "/1.jpg",
        },
        {
          title: "React-Tailwind Css UI App",
          path: "/2.jpg",
        },
        {
          title: "React-Tailwind Css Real Estate App",
          path: "/3.jpg",
        },
        {
          title: "Next.js Admin Dashboard App",
          path: "/4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "React-Css Giphy UI App",
          path: "/5.jpg",
        },
        {
          title: "React-Css UI App",
          path: "/6.jpg",
        },
        {
          title: "Next.js-Tailwind Css iPhone 15 UI App",
          path: "/7.jpg",
        },
        {
          title: "React-Css Calendar UI App",
          path: "/8.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {slide.images.map((image, index) => {
                  return (
                    <div>
                      <div>{image.title}</div>
                      <div>
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default WorkSlider;
