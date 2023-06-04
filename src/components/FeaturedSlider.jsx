import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, A11y, Autoplay } from 'swiper';
import SlideData from '../data/SlideData';
import 'swiper/css/bundle';



const FeaturedSlider = () => {

    const Slider_h = SlideData;


    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={20}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            effect={"coverflow"}
            centeredSlides={false}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 30,
                modifier: 3,
                slideShadows: false,
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 200
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 250
                },
            }}
           
        >
            {
                Slider_h.map((item) => {
                    const { id,dis,dis_subhead,dis_code,images } = item;

                    return (
                        <SwiperSlide className="relative" key={id} >
                            <img className='s_img' src={images} alt="" />
                            <div className="s_text absolute">
                                <span className='card-title text-4xl blacker'>{dis}</span><br />
                                <span className='text-xl blacker'>{dis_subhead}</span><br />
                                <span className='text-xl blacker'>{dis_code}</span><br /><br />
                                <button>Get now</button>   
                                
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
        
    );
};

export default FeaturedSlider;
