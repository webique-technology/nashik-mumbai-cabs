"use client";

import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { PopularDestinationsData } from '@/lib/data'; // Fetch updated centralized array
import '../../styles/PopularDestinayion.scss';

const PopularDestinations = ({
    title = "Most Popular Destinations",
    footerText = "These popular destinations have a lot to offer!",
    buttonText = "View All Destinations"
}) => {
    return (
        <section className="popular-destinations-section section-padding">
            <Container>

                {/* Main Section Header */}
                <Row className="justify-content-center mb-5 text-center">
                    <Col md={8}>
                        <h2 className="section-title fw-semibold">{title}</h2>
                    </Col>
                </Row>

                {/* Destination Grid */}
                <Row className="g-4 mb-5">
                    {PopularDestinationsData.map((dest) => (
                        <Col lg={4} md={6} sm={12} key={dest.id}>
                            <DestinationCard
                                image={dest.image}
                                count={dest.count}
                                title={dest.title}
                                slugPath={dest.slugPath}
                            />
                        </Col>
                    ))}
                </Row>

                {/* Section Footer Actions */}
                <Row className="justify-content-center align-items-center text-center mt-4">
                    <Col className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                        <span className="footer-promo-text text-muted">{footerText}</span>
                        <button className="btn btn-view-all d-flex align-items-center gap-2 px-4 py-2 border-0">
                            {buttonText} <span>&rarr;</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const DestinationCard = ({ image, count, title, slugPath }) => {
    return (
        // Replaced dynamic string interpolations with automated precise slugs
        <Link href={slugPath} target='_blank' className='text-decoration-none'>
            <div className="destination-card d-flex align-items-center bg-white shadow-sm overflow-hidden h-100">

                {/* Left side: Image container with hover zoom */}
                <div className="img-container flex-shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="card-img"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/140x100?text=Maharashtra";
                        }}
                    />
                </div>

                {/* Right side: Text details */}
                <div className="card-details p-4 flex-grow-1">
                    <div className="badge-hotel d-inline-flex align-items-center mb-2 px-2 py-1 rounded-pill">
                        <span className="dot me-1"></span>
                        <span className="count-text">{count} Sightseeing Spots</span>
                    </div>
                    <h4 className="destination-title fw-bold mb-0">{title}</h4>
                </div>
            </div>
        </Link>
    );
};

DestinationCard.propTypes = {
    image: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slugPath: PropTypes.string.isRequired,
};

export { DestinationCard };
export default PopularDestinations;