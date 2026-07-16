import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { PhoneCall } from "lucide-react";


import "../../styles/CommonSec.scss";
import { BookingForm } from "./CommonSec";

// first promotion banner
const PromoBanner = ({
  content = {
    highlightText: "",
    mainTitleNormal: "",
    mainTitleBold: "",
    mainTitleSuffix: "",
    highlightWord: "",
    buttonText: "Explore More",
    onBtnClick: () => {},
  },
  features = [],
  desc = [],
  bgImage,
}) => {
  return (
    <section className="promo-banner-section overflow-hidden">
      <Container fluid className="px-0">
        <Row className="g-0 align-items-stretch">
          {/* Left Column (50% Width): Split Image Box */}
          <Col lg={6} className="image-side">
            <div
              className="banner-bg-img h-100 w-100"
              style={{ backgroundImage: `url(${bgImage})` }}
              role="img"
              aria-label="Promo feature presentation"
            />
          </Col>

          {/* Right Column (50% Width): Text Content Box */}
          <Col lg={6} className="text-side d-flex align-items-center">
            <div className="content-wrapper">
              {/* 1. Main Content Block */}
              {content && (
                <>
                  {content.highlightText && (
                    <span className="highlight-tag d-block fw-bold mb-3">
                      {content.highlightText}
                    </span>
                  )}
                  <h2 className="section-title">
                    {content.mainTitleNormal}
                    {content.mainTitleNormal && <br />}
                    <span className="fw-extrabold">
                      {content.mainTitleBold}
                    </span>
                    {content.mainTitleSuffix}
                    {content.highlightWord && (
                      <span className="title-highlight text-warning ms-2">
                        {content.highlightWord}
                      </span>
                    )}
                  </h2>
                </>
              )}

              {/* 2. Optional Flat Paragraph Descriptions */}
              {desc?.map((value, i) => (
                <p key={i} className="mb-3 text-muted">
                  {value}
                </p>
              ))}

              {/* 3. Features Services List Layout */}
              {features && features.length > 0 && (
                <div className="features-list my-4">
                  {features.map((feature, index) => {
                    // Resolve Lucide component strings safely
                    const IconComponent =
                      LucideIcons[feature.icon] || LucideIcons.HelpCircle;

                    return (
                      <div
                        key={feature.id || index}
                        className="feature-item d-flex align-items-start mb-4"
                      >
                        <div className="icon-wrapper flex-shrink-0 me-2 me-sm-4 d-flex align-items-center justify-content-center">
                          <IconComponent
                            size={40}
                            strokeWidth={1.5}
                            className=""
                          />
                        </div>
                        <div>
                          <h5 className="feature-title fw-bold mb-1">
                            {feature.title}
                          </h5>
                          <p className="feature-desc text-muted mb-0 small">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* 4. Action Button */}
              {content?.buttonText && (
                <button
                  className="btn btn-square btn-square-primary d-inline-flex align-items-center gap-2 fw-semibold mt-2"
                  onClick={content.onBtnClick}
                >
                  {content.buttonText}{" "}
                  <span className="arrow-icon">&rarr;</span>
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// Fixed clean deep Prop validation mapping
PromoBanner.propTypes = {
  content: PropTypes.shape({
    highlightText: PropTypes.string,
    mainTitleNormal: PropTypes.string,
    mainTitleBold: PropTypes.string,
    mainTitleSuffix: PropTypes.string,
    buttonText: PropTypes.string,
    onBtnClick: PropTypes.func,
  }),
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  desc: PropTypes.array,
  bgImage: PropTypes.string.isRequired,
};

export { PromoBanner };

// second promotion banner
const AppDownloadBanner = ({
  titlePrefix,
  titleHighlight,
  titleSuffix,
  iosLink,
  androidLink,
  mockupImageSrc,
  bgImage,
  rightComponent, // Destructured and renamed to uppercase for component rendering
}) => {
  return (
    <section
      className={`app-download-banner section-padding d-flex align-items-center position-relative ${bgImage ? "bg-center-top" : "blue-gradient"}`}
      style={{
        backgroundImage: bgImage
          ? `url(${typeof bgImage === "object" && bgImage.src ? bgImage.src : bgImage})`
          : "none",
      }}
    >
      <div className="abstract-bg-waves" />

      <Container>
        <Row className="align-items-center g-4 g-md-0">
          {/* Left Side: Call to Action Texts & Buttons */}
          <Col
            md={6}
            sm={12}
            className="text-content-col position-relative z-1"
          >
            <h2 className="banner-heading text-white fw-bold mb-4">
              {titlePrefix}{" "}
              <span className="highlight-text">{titleHighlight}</span>{" "}
              {titleSuffix}
            </h2>

            <div className="download-buttons-group d-flex flex-wrap gap-3">
              <Link href={iosLink} passHref target="_blank">
                <div className="btn btn-ios d-inline-flex align-items-center gap-2 fw-semibold text-white">
                  <PhoneCall />
                  Contact Us
                </div>
              </Link>

              <Link href={androidLink} passHref target="_blank">
                <div className="btn btn-android d-inline-flex align-items-center gap-2 fw-semibold text-white bg-white">
                  <img src="/images/whatsapp.svg" alt="" />
                  Chat with Us
                </div>
              </Link>
            </div>
          </Col>

          {/* Right Side: Dynamic Component OR Fallback Image Mockup */}
          <Col
            md={6}
            sm={12}
            className="mockup-display-col position-relative d-flex align-items-end justify-content-center"
          >
            {rightComponent ? (
              /* Render dynamic React component/JSX if passed */
              <div className="dynamic-component-wrapper w-100">
                {rightComponent}
              </div>
            ) : mockupImageSrc ? (
              /* Fallback to image layout logic if no dynamic component is provided */
              <div className="mockup-img-wrapper">
                {typeof mockupImageSrc === "object" && mockupImageSrc.src ? (
                  <Image
                    src={mockupImageSrc}
                    alt="App Mobile Mockups"
                    className="double-mockup-img img-fluid"
                    priority
                  />
                ) : (
                  <img
                    src={mockupImageSrc}
                    alt="App Mobile Mockups Image"
                    className="double-mockup-img img-fluid"
                  />
                )}
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

AppDownloadBanner.propTypes = {
  titlePrefix: PropTypes.string.isRequired,
  titleHighlight: PropTypes.string.isRequired,
  titleSuffix: PropTypes.string.isRequired,
  iosLink: PropTypes.string.isRequired,
  androidLink: PropTypes.string.isRequired,
  mockupImageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightComponent: PropTypes.node, // Validates React components
  bgImage: PropTypes.string,
};

export { AppDownloadBanner };
