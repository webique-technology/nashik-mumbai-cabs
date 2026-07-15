"use client";
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { SwiperSliderComp } from '../ui/SwiperSlider';
import { SwiperSlide } from 'swiper/react';
import { ArrowRight, ArrowLeft } from "lucide-react";
import { AnimationSecComponent } from "@/components/ui/AnimationSecComponent";
import { EffectFade } from 'swiper/modules';
import "../../styles/HeroHeader.scss";
import "../../styles/main.scss";
// import Link from 'next/link';

import banner1 from '../../../public/images/banner-1.jpg';
import banner2 from '../../../public/images/banner-4.webp';
import banner3 from '../../../public/images/banner-5.webp';
import { LinkPillBtn } from '../ui/Buttons';
// import banner3 from '@/assets/images/banner-4.webp';
// // NOTE: Make sure to drop matching image files into your assets directory
// import banner4 from '@/assets/images/jyotirlinga-banner-2.webp';
// import banner5 from '@/assets/images/ashtavinayak-banner-img.webp';

export const heroSliderConfig = [
    {
        id: 1,
        image: banner2.src || "",
        title: "Welcome to Nashik Mumbai Cabs",
        subTitle: "Book With Us",
        desc: "Enjoy comfortable and reliable transportation between Nashik and Mumbai, available 24/7.",
        btnText: "Book Now"
    },
    {
        id: 2,
        image: banner3.src || "",
        title: "Discover a Wonderful Place with us.",
        subTitle: "Book With Us",
        desc: "Explore the most beautiful destinations and enjoy unforgettable travel experiences with us.",
        btnText: "Book Now"
    },
];

const HeroHeader = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <section className="hero-header-section">
                <SwiperSliderComp
                    slidesPerView={1}
                    spaceBetween={1}
                    effect="fade"
                    module={EffectFade}
                    pagination={false}
                    loop={heroSliderConfig.length > 1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: '.hero-prev-btn',
                        nextEl: '.hero-next-btn',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        }
                    }}
                >
                    {heroSliderConfig.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={item.id || index}
                                className='hero-slider-main d-flex align-items-center justify-content-center position-relative overflow-hidden'
                            >
                                <div
                                    className="hero-bg-layer"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                />

                                <div className="hero-overlay"></div>

                                <Container className="position-relative z-index-2">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="hero-slide-content text-center d-flex flex-column align-items-center justify-content-center">

                                            {/* Subheading Entrance */}
                                            {/* <AnimationSecComponent type="vertical" direction="up" delay={0.2} distance={40}> */}
                                            {/* <span className='mb-3 badge badge-subTitle d-block'>
                                                {item.subTitle}
                                            </span> */}
                                            {/* </AnimationSecComponent> */}

                                            {/* Title Entrance */}
                                            {/* <AnimationSecComponent type="vertical" direction="up" delay={0.4} distance={40}> */}
                                            <h1 className='hero-title-h1 mb-2 hero-title playfair-display'>
                                                {item.title}
                                            </h1>
                                            {/* </AnimationSecComponent> */}

                                            {/* Description Entrance */}
                                            {/* <AnimationSecComponent type="vertical" direction="up" delay={0.6} distance={30}> */}
                                            <p className='hero-description text-md mb-4 hero-description-animate'>
                                                {item.desc}
                                            </p>
                                            {/* </AnimationSecComponent> */}

                                            {/* Interactive Footer Area Nodes */}

                                            <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                                                <div className="d-flex align-items-center justify-content-center gap-4 pt-1 execution-row-layer">
                                                    <LinkPillBtn
                                                        btnText={item.btnText}
                                                        href={"#"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                        );
                    })}

                    {/* Navigation Controls */}
                    <button className="hero-prev-btn nav-custom-btn">
                        <ArrowLeft size={25} />
                    </button>
                    <button className="hero-next-btn nav-custom-btn">
                        <ArrowRight size={25} />
                    </button>

                    {/* Scroll Trigger Bottom Target */}
                    <div
                        className="scroll-indicator"
                        onClick={() => {
                            const section = document.getElementById("whyChooseUs");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                    </div>
                </SwiperSliderComp>
            </section>
        </>
    );
};

export default HeroHeader;