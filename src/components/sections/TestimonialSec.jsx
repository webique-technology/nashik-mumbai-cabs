"use client"

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SwiperSliderComp } from '../ui/SwiperSlider';
import { TestimonialCard } from '../ui/cards';
import { SwiperSlide } from 'swiper/react';

import clientAvatar1 from "../../../public/images/test-avatar-1.png"

const TestimonialSec = () => {
    const testimonialsMockData = [
        {
            id: 1,
            rating: 5,
            text: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc. Eu nisl nunc mi ipsum faucibus. Vel facilisis volutpat est velit egestas dui. Orci porta non pulvinar neque laoreet.",
            name: "Parsley Monta",
            role: "Traveler",
            avatar: clientAvatar1.src || "https://placehold.co/100x100"
        },
        {
            id: 2,
            rating: 5,
            text: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc. Eu nisl nunc mi ipsum faucibus. Vel facilisis volutpat est velit egestas dui. Orci porta non pulvinar neque laoreet.",
            name: "Norman Gordon",
            role: "Traveler",
            avatar: clientAvatar1.src || "https://placehold.co/100x100"
        },
        {
            id: 3,
            rating: 5,
            text: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc. Eu nisl nunc mi ipsum faucibus. Vel facilisis volutpat est velit egestas dui. Orci porta non pulvinar neque laoreet.",
            name: "Amara Silva",
            role: "Explorer",
            avatar: clientAvatar1.src || "https://placehold.co/100x100"
        },
        {
            id: 4,
            rating: 4,
            text: "Metus vulputate eu scelerisque felis imperdiet. At in tellus integer feugiat scelerisque varius morbi enim nunc. Eu nisl nunc mi ipsum faucibus. Vel facilisis volutpat est velit egestas dui. Orci porta non pulvinar neque laoreet.",
            name: "Amara Silva",
            role: "Explorer",
            avatar: clientAvatar1.src || "https://placehold.co/100x100"
        }
    ];

    // Configured specific responsive breakpoints to match user requirements exactly
    const sliderBreakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    };

    return (
        <section className="testimonial-section section-padding bg-white">
            <Container>
                {/* Section Heading Text - Simple static treatment, no animation rules */}
                <Row className="justify-content-center mb-5 text-center">
                    <Col md={8}>
                        <h2 className="section-title fw-bold">What our Clients say</h2>
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
        </section >
    );
};

export default TestimonialSec;