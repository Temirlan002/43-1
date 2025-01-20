import { EffectCards, EffectCoverflow, EffectCreative } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-cards';
// import 'swiper/css/effect-creative';

const SwiperComponent = () => {


    const swiperImg = [
        {url: 1 },
        {url: 2},
        {url: 3},
        {url: 4},
        {url:  5},
        {url: 6},
        { url: 7 },
        {url: 8},
        {url: 9},
        {url: 10},
    ] 

    return (
        <>
            <Swiper
                direction="vertical"
                effect="coverflow"
                grabCursor
                centeredSlides
                modules={[EffectCoverflow]}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="mySwiper"
            >
                {swiperImg.map((img, index) => 
                    <SwiperSlide key={index} >
                        {/* <img src={img.url} alt="" /> */}
                        <p>{img.url}</p>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )

}

export default SwiperComponent