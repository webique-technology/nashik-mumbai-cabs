"use client";

import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { ArrowLeft, ShieldCheck, User, Compass, HelpCircle } from "lucide-react";
import Link from "next/link";
import "../../styles/CommonSec.scss"

const CabDetail = ({ cab }) => {
    return (
        <section className="cab-detail-wrapper py-5 bg-light">
            <Container className="py-3">

                {/* Back Button Action Trigger */}
                <div className="mb-4">
                    <Link href="/" className="back-link d-inline-flex align-items-center text-decoration-none small fw-semibold text-muted">
                        <ArrowLeft size={16} className="me-2" /> Back to Fleet Selection
                    </Link>
                </div>

                <Row className="g-5">
                    {/* Left Column: Context Text Blocks */}
                    <Col xs={12} lg={7} className="order-2 order-lg-1">
                        <div className="detail-header-block mb-4">
                            <Badge bg="dark" className="text-uppercase mb-2 px-3 py-2 tracking-wider rounded-1">
                                {cab.category} Fleet Choice
                            </Badge>
                            <h1 className="main-title fw-bold text-dark display-5 mb-2">{cab.title}</h1>
                            <p className="route-subtitle text-primary fw-medium small-base">{cab.routesSubtitle}</p>
                        </div>

                        <hr className="my-4 border-slate-200" />

                        {/* Description Paragraph Block */}
                        <div className="description-block mb-4">
                            <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                                <Compass size={18} className="me-2 text-primary" /> Journey Overview
                            </h3>
                            <p className="description-text text-muted lh-lg">{cab.description}</p>
                        </div>

                        {/* Trust Driver Fallback Notice */}
                        <div className="driver-notice-card p-3 rounded mb-4 d-flex align-items-start bg-white border shadow-sm">
                            <ShieldCheck size={24} className="text-success me-3 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="h6 fw-bold mb-1 text-dark">Experienced Drivers Included</h4>
                                <p className="small text-muted mb-0">
                                    Every ride booked with <strong>{cab.providerFallback}</strong> includes an experienced, professional driver-cum-guide who is well-mannered and fully vetted for a safe journey.
                                </p>
                            </div>
                        </div>

                        {/* SEO and Route Notes Box */}
                        <div className="notes-block p-4 rounded bg-white border">
                            <h4 className="h6 fw-bold text-dark mb-3 d-flex align-items-center">
                                <HelpCircle size={16} className="me-2 text-warning" /> Booking Reference & Service Scope
                            </h4>
                            <p className="notes-text text-muted small lh-base mb-0">{cab.notes}</p>
                        </div>
                    </Col>

                    {/* Right Column: Interactive Image Frame Box */}
                    <Col xs={12} lg={5} className="order-1 order-lg-2 d-flex flex-column align-items-center justify-content-start">
                        <div className="vehicle-image-card p-4 bg-white border shadow-sm rounded text-center w-100 position-sticky" style={{ top: '100px' }}>
                            <div className="img-frame mb-4 p-3 d-flex align-items-center justify-content-center bg-light rounded">
                                <img
                                    src={cab.imageSrc}
                                    alt={cab.name}
                                    className="img-fluid detail-vehicle-img"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/500x350?text=Vehicle+Image";
                                    }}
                                />
                            </div>

                            <h2 className="h4 fw-bold text-dark mb-3">{cab.name}</h2>

                            {/* Call to Action Button */}
                            <a href="tel:+917507778070" className="w-100 d-block text-decoration-none">
                                <Button variant="dark" className="book-now-cta-btn w-100 py-3 text-uppercase fw-bold rounded-0">
                                    Book This Vehicle Now
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default CabDetail;