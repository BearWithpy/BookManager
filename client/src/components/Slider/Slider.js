import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore from "swiper/core"

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"

import slide_image_1 from "../../assets/imgs/1.png"
import slide_image_2 from "../../assets/imgs/2.png"
import slide_image_3 from "../../assets/imgs/3.png"
import slide_image_4 from "../../assets/imgs/4.jpeg"
import slide_image_5 from "../../assets/imgs/5.png"
import slide_image_6 from "../../assets/imgs/2.png"
import slide_image_7 from "../../assets/imgs/3.png"

import "./Slider.css"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { AiFillCaretRight } from "react-icons/ai"

SwiperCore.use([Pagination, Autoplay])

function Slider() {
    // const [isHovering, setIsHovering] = useState(0)

    // useEffect(() => {
    //     // console.log(isHovering)
    // }, [isHovering])

    return (
        <div
            className="container"
            // onMouseOver={() => {
            //     setIsHovering(1)
            // }}
            // onMouseOut={() => {
            //     setIsHovering(0)
            // }}
        >
            <h2>
                <AiFillCaretRight /> 추천 도서
            </h2>
            <Swiper
                // onSwiper={(swiper) => console.log(swiper)}
                effect={"coverflow"}
                grabCursor={true}
                // centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <IoIosArrowBack />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <IoIosArrowForward />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider
