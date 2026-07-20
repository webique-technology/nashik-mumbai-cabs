"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SwiperSliderComp } from "../ui/SwiperSlider";
import { TestimonialCard } from "../ui/cards";
import { SwiperSlide } from "swiper/react";

import clientAvatar1 from "../../../public/images/test-avatar-1.png";
import { LinkPillBtn } from "../ui/Buttons";
import { ArrowRight } from "lucide-react";

const TestimonialSec = () => {
  const testimonialsMockData = [
    {
      id: 1,
      rating: 5,
      text: "Book today 2 Crysta from Nashik to Mumbai International Airport Drop Return Journey 6 May Very punctual on time neat clean new car Chauffeur well trained best service provider taxi service car rental in nashik recommended.",
      name: "Vishal Tambe",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 2,
      rating: 5,
      text: "Best Taxi Services in Nashik Family Car Hire From Nashik to Pune Airport Cab.",
      name: "sagar kadam",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 3,
      rating: 5,
      text: "Hire cab from Nashik to Pune Airport Viman Nagar One Way Taxi Nice Experience best car rental Nashik.",
      name: "Ratnadeep Lokhande",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 4,
      rating: 5,
      text: "Very nice impressive service providers taxi services in Nashik.",
      name: "Sumit Pavankar",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 5,
      rating: 5,
      text: "Best Taxi services for Mumbai Pune Airport.",
      name: "Sainath Netare",
      role: "Traveler",
      avatar: clientAvatar1.src,
    },
    {
      id: 6,
      rating: 5,
      text: "Nashik to Pune Best Taxi Service Hire From Nashik Panchvati Maharashtra.",
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
          <Col md={12} className="d-flex align-items-center justify-content-center justify-content-sm-between">
            <h2 className="section-title text-start mb-0">
              What our Clients <span className="title-highlight">say</span>
            </h2>
            <LinkPillBtn href={"#"} btnText={"Review"} rightIcon={<ArrowRight />}/>
          </Col>
        </Row>

        {/* Swiper Slider Mount */}
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
      </Container>
    </section>
  );
};

export default TestimonialSec;
