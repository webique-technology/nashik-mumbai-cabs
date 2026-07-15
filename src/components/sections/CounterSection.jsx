"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Trees, Luggage, ThumbsUp, PhoneCall } from "lucide-react";
import Image from "next/image";

import image1 from "../../../public/images/happy-traveller.png";
import image2 from "../../../public/images/tent-sites.png";
import image3 from "../../../public/images/ratings.png";
import image4 from "../../../public/images/call-services.png";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";

const CounterSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animates only once when visible
        threshold: 0.2,    // Starts when 20% of the section is visible
    });

    const stats = [
        {
            id: 1,
            endValue: 60.4,
            decimals: 1,
            suffix: "K",
            label: "Happy Traveller",
            icon: <Trees size={28} className="icon-purple" />,
            image: image1,
            bgClass: "bg-purple-light",
            bgColor: "#F5FEFA",
        },
        {
            id: 2,
            endValue: 30.4,
            decimals: 1,
            suffix: "K",
            label: "Tent Sites",
            icon: <Luggage size={28} className="icon-pink" />,
            image: image2,
            bgClass: "bg-pink-light",
            bgColor: "#FFFDF5",
        },
        {
            id: 3,
            endValue: 78.6,
            decimals: 1,
            suffix: "%",
            label: "Satisfaction Rate",
            icon: <ThumbsUp size={28} className="icon-orange" />,
            image: image3,
            bgClass: "bg-orange-light",
            bgColor: "#FFF8F8",
        },
        {
            id: 4,
            endValue: 5.2,
            decimals: 1,
            prefix: "0",
            suffix: "+",
            label: "Year Of Services",
            icon: <PhoneCall size={28} className="icon-green" />,
            image: image4,
            bgClass: "bg-green-light",
            bgColor: "#F7FAFF",
        },
    ];

    return (
        <section className="counter-section section-padding pt-4 pt-md-0" ref={ref}>
            <div className="container">
                <div className="counter-wrapper-card">
                    <div className="row g-0">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`col-6 col-sm-6 col-lg-3 counter-col ${index !== stats.length - 1 ? "border-end-md" : ""
                                    }`}
                            >
                                <AnimationSecComponent duration={(index + 1) * 0.1} className={"h-100"}>
                                    <div className="counter-item d-flex flex-column align-items-center text-center"
                                        style={{ backgroundColor: stat.bgColor }}
                                    >
                                        {/* Icon Circle wrapper */}
                                        <div className={`icon-circle ${stat.bgClass} mb-3 d-flex align-items-center justify-content-center`}>
                                            {stat.image ? (
                                                <Image
                                                    src={stat.image.src}
                                                    alt={stat.label}
                                                    width={90}
                                                    height={90}
                                                    className="object-fit-contain mb-3"
                                                />
                                            ) : (
                                                stat.icon
                                            )}
                                        </div>

                                        {/* CountUp Trigger */}
                                        <h2 className="counter-number fw-bold mb-1">
                                            {stat.prefix}
                                            {inView ? (
                                                <CountUp
                                                    end={stat.endValue}
                                                    decimals={stat.decimals}
                                                    duration={2.5}
                                                    separator=","
                                                />
                                            ) : (
                                                "0.0"
                                            )}
                                            {stat.suffix}
                                        </h2>

                                        {/* Label */}
                                        <p className="counter-label text-muted mb-0 small font-secondary">
                                            {stat.label}
                                        </p>
                                    </div>
                                </AnimationSecComponent>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;