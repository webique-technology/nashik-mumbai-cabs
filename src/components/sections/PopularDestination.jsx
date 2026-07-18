"use client";

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { TaxiServicesCityToCity } from "@/lib/data"; // Fetch updated centralized array
import "../../styles/PopularDestinayion.scss";
import { DestinationCard } from "../ui/cards";

const PopularDestinations = ({
  title = "Most Popular",
  footerText = "These popular City have a lot to offer!",
  buttonText = "View All City",
  highlightWord = "City",
}) => {
  return (
    <section className="popular-destinations-section section-padding">
      <Container>
        {/* Main Section Header */}
        <Row className="justify-content-center mb-4 text-center">
          <Col md={8}>
            <h2 className="section-title">
              {title}{" "}
              {highlightWord && (
                <span className="title-highlight">{highlightWord}</span>
              )}
            </h2>
          </Col>
        </Row>

        {/* Destination Grid */}
        <Row className="g-4 mb-4 mb-md-5">
          {TaxiServicesCityToCity.filter((dest) => dest.popularCity === true).map((dest) => (
            <Col lg={4} xs={6} key={dest.id}>
              <DestinationCard
                image={dest.image}
                title={dest.popularCityTitle}
                slugPath={`/cities/${dest.slug}`}
                description={dest.longDistance?.content || [dest.intro]}
              />
            </Col>
          ))}
        </Row>

        {/* Section Footer Actions */}
        <Row className="justify-content-center align-items-center text-center mt-4">
          <Col className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
            <span className="footer-promo-text text-muted">{footerText}</span>
            <Link href="/cities" target="_blank" className="btn btn-view-all d-flex align-items-center gap-2 px-4 py-2 border-0">
              {buttonText} <span>&rarr;</span>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PopularDestinations;
