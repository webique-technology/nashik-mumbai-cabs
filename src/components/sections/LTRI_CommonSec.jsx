import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import * as LucideIcons from "lucide-react";
import "../../styles/CommonSec.scss"
import { AnimationSecComponent } from '../ui/AnimationSecComponent';

// section Left text content and right side image
const LeftTextRightImageCommnSec = ({
    heading,
    features,
    imageSrc,
    badgeText
}) => {
    return (
        <section className="leftTextRightImage section-padding">
            <Container>
                <Row className="align-items-center gy-5">

                    {/* Left Column: Content & Features */}
                    <Col lg={6} md={12} className="content-col">
                        <AnimationSecComponent>
                            <h2 className="section-title mb-4 fw-semibold">{heading}</h2>

                            <div className="features-list">
                                {features?.map((feature, index) => (
                                    <div key={feature.id || index} className="feature-item d-flex align-items-start mb-4">
                                        <div className="icon-wrapper flex-shrink-0 me-2 me-sm-4 d-flex align-items-center justify-content-center">
                                            {/* Accepts either a component/node or an image path */}
                                            {typeof feature.icon === 'string' ? (
                                                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                                            ) : (
                                                feature.icon
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="feature-title fw-bold mb-1">{feature.title}</h5>
                                            <p className="feature-desc text-muted mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimationSecComponent>
                    </Col>

                    {/* Right Column: Creative Visual Showcase */}
                    <Col lg={6} md={12} className="">
                        <AnimationSecComponent>
                            <div className='visual-col d-flex justify-content-center align-items-center'>
                                <div className="image-wrapper position-relative">
                                    {/* Masked/Brush-stroke style image container */}
                                    <div className="masked-image-container">
                                        <img
                                            src={imageSrc}
                                            alt="Destination Showcase"
                                            className="main-showcase-img img-fluid"
                                        />
                                    </div>

                                    {/* Floating Badge/Card */}
                                    {badgeText && (
                                        <div className="floating-badge floating-badge-right shadow-sm p-4 bg-white rounded-3 position-absolute">
                                            <p className="badge-content mb-0 text-secondary">
                                                {badgeText.normalText} <span className="text-dark fw-bold">{badgeText.highlightedText}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimationSecComponent>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

// PropTypes for type safety
LeftTextRightImageCommnSec.propTypes = {
    heading: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    imageSrc: PropTypes.string.isRequired,
    badgeText: PropTypes.shape({
        normalText: PropTypes.string,
        highlightedText: PropTypes.string,
    }),
};

export { LeftTextRightImageCommnSec };


// section LEFT side image and right side text content

const RightTextLeftImageCommnSec = ({
    heading,
    features,
    imageSrc,
    badgeText
}) => {
    return (
        <section className="leftTextRightImage section-padding">
            <Container>
                <Row className="align-items-center gy-5">

                    {/* Left Column: Creative Visual Showcase */}
                    <Col lg={6} md={12} className="visual-col d-flex justify-content-center align-items-center">
                        <div className="image-wrapper position-relative">
                            {/* Masked/Brush-stroke style image container */}
                            <div className="masked-image-container-2">
                                <img
                                    src={imageSrc}
                                    alt="Destination Showcase"
                                    className="main-showcase-img rounded-2 img-fluid aspect-4x4"
                                />
                            </div>

                            {/* Floating Badge/Card */}
                            {badgeText && (
                                <div className="floating-badge floating-badge-left shadow-sm p-4 bg-white rounded-3 position-absolute">
                                    <p className="badge-content mb-0 text-secondary">
                                        {badgeText.normalText} <span className="text-dark fw-bold">{badgeText.highlightedText}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </Col>

                    {/* Right Column: Content & Features */}
                    <Col lg={6} md={12} className="content-col">
                        <h2 className="section-title mb-4 fw-semibold">{heading}</h2>

                        <div className="features-list">
                            {features?.map((feature, index) => {
                                // 1. Check if it's a valid Lucide icon string
                                const isLucideIconName = typeof feature.icon === 'string' && LucideIcons[feature.icon];

                                // 2. Fallback to HelpCircle if it's a string but doesn't map to a Lucide Icon, or if it isn't defined
                                const IconComponent = isLucideIconName ? LucideIcons[feature.icon] : LucideIcons.HelpCircle;

                                // 3. Determine if it's an image file path (e.g., ends with .png, .svg, .webp or starts with /)
                                const isImagePath = typeof feature.icon === 'string' &&
                                    (feature.icon.includes('/') || /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(feature.icon));

                                return (
                                    <div key={feature.id || index} className="feature-item d-flex align-items-start mb-4">
                                        <div className="icon-wrapper flex-shrink-0 me-4 d-flex align-items-center justify-content-center">
                                            {/* Accepts either a component/node or an image path */}
                                            {isImagePath ? (
                                                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                                            ) : (
                                                <IconComponent size={24} strokeWidth={2} className="text-primary" />
                                            )}
                                        </div>
                                        <div>
                                            <h5 className="feature-title fw-bold mb-1">{feature.title}</h5>
                                            <p className="feature-desc text-muted mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

// PropTypes for type safety
RightTextLeftImageCommnSec.propTypes = {
    heading: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    imageSrc: PropTypes.string.isRequired,
    badgeText: PropTypes.shape({
        normalText: PropTypes.string,
        highlightedText: PropTypes.string,
    }),
};

export { RightTextLeftImageCommnSec };

