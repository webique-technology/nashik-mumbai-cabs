"use client";

import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SwiperSliderComp } from "../ui/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { EffectFade } from "swiper/modules";
import { LinkPillBtn } from "../ui/Buttons";

import banner2 from "../../../public/images/banner-4.webp";
import banner3 from "../../../public/images/banner-5.webp";

import "../../styles/HeroHeader.scss";
import "../../styles/main.scss";

export const heroSliderConfig = [
  {
    id: 1,
    image: banner2?.src || banner2 || "",
    title: "Experience seamless travel with Nashik Mumbai Cabs.",
    subTitle: "Book With Us",
    desc: "Professional taxi service connecting Nashik and Mumbai with reliable, comfortable, and affordable rides. Trusted drivers, 24/7 service, and hassle-free bookings.",
    btnText: "Learn More",
    href: "/cabs",
  },
  {
    id: 2,
    image: banner3?.src || banner3 || "",
    title: "Start your hassle-free journey with Nashik Mumbai Cabs.",
    subTitle: "Book With Us",
    desc: "Explore the most beautiful destinations and enjoy unforgettable travel experiences with us.",
    btnText: "Check Out",
    href: "/cities",
  },
];

const HeroHeader = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="hero-header-section">
      <SwiperSliderComp
        slidesPerView={1}
        spaceBetween={1}
        effect="fade"
        modules={[EffectFade]}
        pagination={false}
        loop={heroSliderConfig.length > 1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-prev-btn",
          nextEl: ".hero-next-btn",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {heroSliderConfig.map((item, index) => (
          <SwiperSlide
            key={item.id || index}
            className="hero-slider-main d-flex align-items-center justify-content-center position-relative overflow-hidden"
          >
            <div
              className="hero-bg-layer"
              style={{ backgroundImage: `url("${item.image}")` }}
            />

            <div className="hero-overlay" />

            <Container className="position-relative z-index-2">
              <div className="d-flex align-items-center justify-content-center">
                <div className="hero-slide-content text-center d-flex flex-column align-items-center justify-content-center">
                  <h1 className="hero-title-h1 mb-2 hero-title playfair-display">
                    {item.title}
                  </h1>

                  <p className="hero-description text-md mb-4 hero-description-animate">
                    {item.desc}
                  </p>

                  <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center gap-4 pt-1 execution-row-layer">
                      <LinkPillBtn btnText={item.btnText} href={item.href} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}

        {/* Navigation Controls */}
        <button
          className="hero-prev-btn nav-custom-btn"
          aria-label="Previous Slide"
        >
          <ArrowLeft size={25} />
        </button>
        <button
          className="hero-next-btn nav-custom-btn"
          aria-label="Next Slide"
        >
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
        />
      </SwiperSliderComp>
    </section>
  );
};

export default HeroHeader;
