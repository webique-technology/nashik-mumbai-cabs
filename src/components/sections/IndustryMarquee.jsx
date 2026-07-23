"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "react-bootstrap";
import { CityServicesRoute, footerLinksData } from "@/lib/data";
import "../../styles/CommonSec.scss";
import "../../styles/main.scss";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";

// Configuration for the acceleration/deceleration interpolation smoothing factor
const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25 };

export const IndustryMarquee = () => {
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

        const deltaTime =
          Math.max(0, timestamp - lastTimestampRef.current) / 1000;
        lastTimestampRef.current = timestamp;

        // Dynamic target selection: Decelerates to 0 on hover, speeds up to targetVelocity on leave
        const currentTarget = isHovered ? 0 : targetVelocity;

        // Exponential easing factor interpolation matching ReactBits mechanics
        const easingFactor =
          1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
        velocityRef.current +=
          (currentTarget - velocityRef.current) * easingFactor;

        // Read size of unique underlying list template block dynamically
        const sequenceWidth =
          seqRef.current?.getBoundingClientRect?.().width ?? 0;

        if (sequenceWidth > 0) {
          let nextOffset = offsetRef.current + velocityRef.current * deltaTime;

          // Absolute seamless modulo loop positioning formula
          nextOffset =
            ((nextOffset % sequenceWidth) + sequenceWidth) % sequenceWidth;
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
          <h2 className="section-title">
            Popular City <span className="title-highlight">Services</span>
          </h2>
          <p className="text-muted">
            Discover Reliable Cab Services in Top Cities with Nashik Mumbai
            Cabs. Click Below to Explore Availability!
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

export const DynamicFooterLinks = () => {
  const pathname = usePathname();

  // Check if the current path matches /cabs or /bus precisely
  const hideBgLight = pathname === "/cabs" || pathname === "/bus";
  return (
    <section
      className={`text-white section-padding ${hideBgLight ? "" : "bg-light"}`}
    >
      <div className="container">
        <div className="text-center mb-4 mb-md-5">
          <AnimationSecComponent
            type="vertical"
            direction="up"
            duration={0.5}
            distance={50}
            delay={0.1}
          >
            <h2 className="section-title">
              Popular City <span className="title-highlight">Services</span>
            </h2>
            <p className="text-muted">
              Discover Reliable Cab Services in Top Cities with Nashik Mumbai
              Cabs. Click Below to Explore Availability!
            </p>
          </AnimationSecComponent>
        </div>
        <div className="row g-4 justify-content-center">
          {footerLinksData.map((section) => (
            <div key={section.id} className="col-12 col-sm-6 col-md-6 col-lg-3">
              <AnimationSecComponent
                type="vertical"
                direction="up"
                duration={0.5}
                distance={100}
                delay={0.2}
              >
                {/* Column Heading */}
                <h3
                  className="fs-6 fw-bold text-uppercase mb-2 mb-sm-3 tracking-wide text-dark"
                  style={{ letterSpacing: "0.5px" }}
                >
                  {section.title}
                </h3>

                {/* Links Stream Stack */}
                <ul className="list-unstyled d-flex flex-column pill-badge pill-badge-icon gap-1 gap-sm-2 gap-md-3 m-0 p-0">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      {/* Actual Clickable Hyperlink Route */}
                      <img
                        src="/images/hand-right.png"
                        className="icon"
                        alt="hand-right"
                      />
                      <Link
                        href={link.href}
                        className={`text-decoration-none small transition-all link-text link-text-dark ${
                          link.isHighlighted
                            ? "text-warning fw-semibold"
                            : "text-dark opacity-75 hover-opacity-100"
                        }`}
                        style={{
                          fontSize: "0.9rem",
                          transition: "opacity 0.2s",
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimationSecComponent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
