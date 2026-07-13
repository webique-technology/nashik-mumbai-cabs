"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import * as LucideIcons from "lucide-react";
import '../../styles/CommonSec.scss';


export const FeatureGridSec = ({
    badgeText = "OUR EXPERTISE",
    mainHeading = "Our Premium Travel Solutions.",
    subHeading = "Experience comfort and reliability with our specialized transport services tailored for the discerning traveler.",
    featuresData = []
}) => {
    return (
        <section className="feature-grid-section py-5 text-white">
            <Container className="py-4">

                {/* Header Block using React-Bootstrap Grid */}
                <Row className="justify-content-center text-center mb-5 header-block">
                    <Col xs={12} md={10} lg={8}>
                        {badgeText && (
                            <span className="feature-badge text-uppercase fw-semibold mb-2 d-inline-block">
                                {badgeText}
                            </span>
                        )}
                        <h2 className="feature-main-heading section-title fw-semibold mb-3">{mainHeading}</h2>
                        {subHeading && (
                            <p className="feature-sub-heading text-muted small-base mb-0">
                                {subHeading}
                            </p>
                        )}
                    </Col>
                </Row>

                {/* Dynamic Grid Layout using React-Bootstrap Grid */}
                <Row className="g-4 justify-content-center">
                    {featuresData.map((feature, index) => {
                        // Dynamically resolve Lucide Icon string from props
                        const IconComponent = LucideIcons[feature.iconName] || LucideIcons.HelpCircle;

                        return (
                            <Col
                                key={feature.id || index}
                                xs={12}
                                md={6}
                                lg={4}
                                className="d-flex"
                            >
                                <div className="feature-card p-4 d-flex flex-column justify-content-between w-100">

                                    {/* Top Content Wrapper */}
                                    <div>
                                        {/* Dynamic Icon Ring */}
                                        <div
                                            className="icon-wrapper mb-4 d-flex align-items-center justify-content-center"
                                            style={{
                                                backgroundColor: feature.iconBg || 'rgba(255, 255, 255, 0.05)',
                                                color: feature.iconColor || '#ffffff'
                                            }}
                                        >
                                            <IconComponent size={24} strokeWidth={2} />
                                        </div>

                                        {/* Card Title & Desc */}
                                        <h3 className="card-title h5 fw-bold mb-3">{feature.title}</h3>
                                        <p className="card-desc small text-muted lh-base mb-4">{feature.description}</p>
                                    </div>

                                    {/* Dynamic Action Trigger */}
                                    <div className="card-footer-action pt-2">
                                        <Link
                                            href={feature.linkUrl || "#"}
                                            className="learn-more-btn d-inline-flex align-items-center text-decoration-none fw-semibold small"
                                            style={{ color: feature.themeColor || '#38bdf8' }}
                                        >
                                            Learn More
                                            <LucideIcons.ArrowRight size={14} className="ms-2 transition-arrow" />
                                        </Link>
                                    </div>

                                </div>
                            </Col>
                        );
                    })}
                </Row>

            </Container>
        </section>
    );
};
