"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { AnimationSecComponent } from "../ui/AnimationSecComponent";

const ServicesGridCardSection = ({ data }) => {
  return (
    <section className="taxi-services-section py-5 bg-white">
      <Container>
        {/* Component Header Block */}
        <div className="text-center mb-5">
          <h2 className="main-section-heading fw-bold text-dark">
            Nashik Mumbai Cabs & Travels Taxi Services
          </h2>
          <div className="heading-underline"></div>
        </div>

        {/* Dynamic Loops mapping exactly 4 cards per row on large devices */}
        <Row className="g-4">
          {data.map((tour, index) => (
            <Col lg={3} md={6} xs={6} key={tour.id}>
              <AnimationSecComponent
                distance={index * 5}
                duration={0.5}
                className="h-100"
              >
                <div className="tour-service-card rounded h-100 d-flex flex-column text-center bg-white">
                  {/* Image Wrap */}
                  <Link
                    href={tour.redirectUrl}
                    className="card-image-link overflow-hidden"
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="tour-card-img img-fluid"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/300x200?text=Nashik+Tour";
                      }}
                    />
                  </Link>

                  {/* Info & Title Container */}
                  <div className="card-body-content p-3 d-flex flex-column flex-grow-1 justify-content-between">
                    <h4 className="tour-card-title fw-semibold mb-2 mb-sm-3">
                      <Link
                        href={tour.redirectUrl}
                        className="text-decoration-none title-anchor"
                      >
                        {tour.title}
                      </Link>
                    </h4>

                    {/* Dynamic Action Redirect Link Block */}
                    <div className="mt-auto">
                      <Link
                        href={tour.redirectUrl}
                        className="btn-square btn-square-primary text-uppercase text-decoration-none d-inline-block w-100"
                      >
                        View Tour Details
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimationSecComponent>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesGridCardSection;
