"use client";

import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { CityServicesRoute } from "@/lib/data";
import "../../styles/CommonSec.scss";

// Configuration for the acceleration/deceleration interpolation smoothing factor
const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25 };

const IndustryMarquee = () => {
    // Dynamically divide your single CityServicesRoute array into 4 balanced segments
    const { row1, row2, row3, row4 } = useMemo(() => {
        const totalItems = CityServicesRoute.length;
        const chunkSize = Math.ceil(totalItems / 4);

        return {
            row1: CityServicesRoute.slice(0, chunkSize),
            row2: CityServicesRoute.slice(chunkSize, chunkSize * 2),
            row3: CityServicesRoute.slice(chunkSize * 2, chunkSize * 3),
            row4: CityServicesRoute.slice(chunkSize * 3),
        };
    }, []);

    // Isolated Row Architecture using RequestAnimationFrame (rAf) tracking loops
    const MarqueeRow = ({ items, speed = 120, direction = "left" }) => {
        const trackRef = useRef(null);
        const seqRef = useRef(null);
        const rafRef = useRef(null);
        const lastTimestampRef = useRef(null);

        // Persistent tracking references that survive renders without resetting positions
        const offsetRef = useRef(0);
        const velocityRef = useRef(0);
        const [isHovered, setIsHovered] = useState(false);

        // Target velocity calculations based on sliding vectors
        const targetVelocity = useMemo(() => {
            const magnitude = Math.abs(speed);
            const directionMultiplier = direction === "left" ? 1 : -1;
            return magnitude * directionMultiplier;
        }, [speed, direction]);

        useEffect(() => {
            const track = trackRef.current;
            if (!track) return;

            const animate = (timestamp) => {
                if (lastTimestampRef.current === null) {
                    lastTimestampRef.current = timestamp;
                }

                const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
                lastTimestampRef.current = timestamp;

                // Dynamic target selection: Decelerates to 0 on hover, speeds up to targetVelocity on leave
                const currentTarget = isHovered ? 0 : targetVelocity;

                // Exponential easing factor interpolation matching ReactBits mechanics
                const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
                velocityRef.current += (currentTarget - velocityRef.current) * easingFactor;

                // Read size of unique underlying list template block dynamically
                const sequenceWidth = seqRef.current?.getBoundingClientRect?.().width ?? 0;

                if (sequenceWidth > 0) {
                    let nextOffset = offsetRef.current + velocityRef.current * deltaTime;

                    // Absolute seamless modulo loop positioning formula
                    nextOffset = ((nextOffset % sequenceWidth) + sequenceWidth) % sequenceWidth;
                    offsetRef.current = nextOffset;

                    // Push the calculation directly onto hardware-accelerated 3D Transform layers
                    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
                }

                rafRef.current = requestAnimationFrame(animate);
            };

            rafRef.current = requestAnimationFrame(animate);

            return () => {
                if (rafRef.current !== null) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
                lastTimestampRef.current = null;
            };
        }, [targetVelocity, isHovered]);

        if (!items || items.length === 0) return null;

        return (
            <div
                className="marquee-track-wrapper"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="marquee-track" ref={trackRef}>
                    {/* List 1 (Template reference target wrapper) */}
                    <ul className="marquee-list-strip my-1" ref={seqRef}>
                        {items.map((item) => (
                            <li key={item.id} className="marquee-item-node">
                                <Link href={item.url} className="marquee-pill-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* List 2 (Duplicate clone wrapper for seamless endless trail formatting) */}
                    <ul className="marquee-list-strip" aria-hidden="true">
                        {items.map((item) => (
                            <li key={`dup-${item.id}`} className="marquee-item-node">
                                <Link href={item.url} className="marquee-pill-link">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section className="industry-marquee-section section-padding bg-white overflow-hidden position-relative">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title fw-black tracking-tight text-dark display-6 font-weight-bold">
                        Popular City Services
                    </h2>
                    <p className="text-muted">
                        Discover Reliable Cab Services in Top Cities with Nashik Mumbai Cabs. Click Below to Explore Availability!
                    </p>
                </div>
            </Container>

            <div className="marquee-container-fluid position-relative w-100 d-flex flex-column gap-3">
                {/* Render independent rows with distinct velocities (speeds) and alternate direction settings */}
                <MarqueeRow items={row1} direction="left" speed={45} />
                <MarqueeRow items={row2} direction="right" speed={45} />
                <MarqueeRow items={row3} direction="left" speed={45} />
                <MarqueeRow items={row4} direction="right" speed={45} />
            </div>
        </section>
    );
};

export default IndustryMarquee;