import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "./Gallery.css";

import img1 from "../assets/charlas/1.jpeg";
import img2 from "../assets/charlas/2.jpeg";
import img3 from "../assets/charlas/3.jpeg";
import img4 from "../assets/charlas/4.jpeg";
import img5 from "../assets/charlas/5.jpeg";

export function GallerySwiper() {
    return (
        <div className="gallery">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                initialSlide={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    670: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={img1} alt="Esc1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Esc2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Esc3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Esc4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Esc5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Esc1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="Esc2" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
