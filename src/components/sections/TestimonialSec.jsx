"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SwiperSliderComp } from "../ui/SwiperSlider";
import { TestimonialCard } from "../ui/cards";
import { SwiperSlide } from "swiper/react";

import clientAvatar1 from "../../../public/images/test-avatar-1.png";
import { LinkPillBtn } from "../ui/Buttons";
import { ArrowRight } from "lucide-react";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";

const TestimonialSec = () => {
  const testimonialsMockData = [
    {
      id: 1,
      rating: 5,
      text: "Book today 2 Crysta from Nashik to Mumbai International Airport Drop Return Journey 6 May Very punctual on time neat clean new car Chauffeur well trained best service provider Cab service car rental in nashik recommended.",
      name: "Vishal Tambe",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 2,
      rating: 5,
      text: "Best Cab Services in Nashik Family Car Hire From Nashik to Pune Airport Cab.",
      name: "sagar kadam",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 3,
      rating: 5,
      text: "Hire cab from Nashik to Pune Airport Viman Nagar One Way Cab Nice Experience best car rental Nashik.",
      name: "Ratnadeep Lokhande",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 4,
      rating: 5,
      text: "Very nice impressive service providers Cab services in Nashik.",
      name: "Sumit Pavankar",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 5,
      rating: 5,
      text: "Best Cab services for Mumbai Pune Airport.",
      name: "Sainath Netare",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 6,
      rating: 5,
      text: "Nashik to Pune Best Cab Service Hire From Nashik Panchvati Maharashtra.",
      name: "Kiran Nawale",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
  ];

  // Configured specific responsive breakpoints to match user requirements exactly
  const sliderBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  };

  return (
    <section className="testimonial-section section-padding bg-white">
      <Container>
        {/* Section Heading Text - Simple static treatment, no animation rules */}
        <Row className="justify-content-center mb-4 text-center">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center justify-content-sm-between"
          >
            <div
              // distance={210}
              // duration={0.7}
              className="d-flex align-items-center justify-content-center justify-content-sm-between gap-3 w-100"
            >
              <h2 className="section-title text-start mb-0">
                What our Clients <span className="title-highlight">say</span>
              </h2>
              <LinkPillBtn
                href={"https://www.google.com/search?sca_esv=fb1a5f3776cab93f&cs=1&sxsrf=APpeQnvCs0bUW0onirUQa8PJVTDvSn--Pw:1786340545223&si=APenkKmVGdgpMPDQZoEWS8RIAhsqXAKlNLP0B8DNkkiU9KPI0fxCRH4p2IqqgTXjeUrXLWNvgyoasa_YGh2jkoyne8QWfzdTohsfV_CC2xXxSW9K6Ffgq6Dh-IvZ6cWdkC18cPfE5_4CEWQqCd0JbmT3Zz9PU1vmIw%3D%3D&q=Nashik+Mumbai+Pune+Shirdi+Airport+Cabs&hl=en-IN&sa=X&ved=2ahUKEwjlpJONrZWWAxU-juEIHVHTInwQ_oMLegQIBBAB&biw=1920&bih=919&dpr=1#lrd=0x3bddeb961aa59b89:0x6ecc23f8742347e4,3,,,,"}
                btnText={"Review"}
                target={"_blank"}
                rightIcon={<ArrowRight />}
              />
            </div>
          </Col>
        </Row>

        {/* Swiper Slider Mount */}
        {/* <AnimationSecComponent distance={200} duration={0.7}> */}
          <Row>
            <Col xs={12}>
              <SwiperSliderComp
                navigation={false} // Disable standard next/prev arrow graphics to match image pagination focus
                pagination={true}
                timeDelay={4000}
                spaceBetween={24}
                breakpoints={sliderBreakpoints}
                className="testimonial-swiper-wrapperpb-4"
              >
                {testimonialsMockData?.map((item) => (
                  <SwiperSlide key={item.id} className="h-auto">
                    <TestimonialCard
                      rating={item.rating}
                      text={item.text}
                      name={item.name}
                      role={item.role}
                      avatar={item.avatar}
                    />
                  </SwiperSlide>
                ))}
              </SwiperSliderComp>
            </Col>
          </Row>
        {/* </AnimationSecComponent> */}
      </Container>
    </section>
  );
};

export default TestimonialSec;
