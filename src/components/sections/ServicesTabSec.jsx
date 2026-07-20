"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CabsData } from "@/lib/data";

const ServiceTabsSection = ({
  title,
  highlightWord,
  sliderBtns = false,
  page = "home",
}) => {
  // 1. Define custom tab lists for each layout context
  const tabConfigurations = {
    cabs: ["Sedan", "SUV"],
    bus: ["Tempo Traveller", "Bus"],
    home: ["Sedan", "SUV", "Tempo Traveller", "Bus"],
  };

  // 2. Get target tabs based on the 'page' prop, fallback to home list if mismatched
  const tabsList = tabConfigurations[page] || tabConfigurations.home;

  // 3. Keep local tab state array responsive
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  // 4. FIXED: Stringify the array comparison so it only triggers when you change PAGES,
  // instead of re-running and freezing the button state when you click on a tab label.
  const serializedTabs = JSON.stringify(tabsList);

  useEffect(() => {
    const parsedTabs = JSON.parse(serializedTabs);
    if (parsedTabs.length > 0) {
      setActiveTab(parsedTabs[0]);
    }
  }, [serializedTabs]);

  // Filtering function logic handler
  const filteredCabs = CabsData.filter((cab) => {
    if (activeTab === "All Tabs") return true;
    return cab.category.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <section className="service-tabs-section section-padding position-relative">
      <Container>
        {/* Title Block */}
        <div className="text-center mb-4">
          <h2 className="section-title text-dark">
            {title} <span className="title-highlight">{highlightWord}</span>
          </h2>
        </div>

        {/* Dynamic Category Tab Filter Switcher */}
        <div className="tabs-nav-container d-flex justify-content-center mb-5">
          <div className="tabs-pill d-flex gap-1 gap-sm-2 align-items-center justify-content-center bg-white shadow-sm p-2 rounded-3">
            {tabsList.map((tabLabel) => (
              <button
                key={tabLabel}
                type="button"
                className={`tab-nav-btn rounded-2 border-0 px-2 px-sm-4 py-1 py-sm-2 fw-semibold transition-all ${
                  activeTab === tabLabel ? "active shadow-sm" : ""
                }`}
                onClick={() => setActiveTab(tabLabel)}
              >
                {tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Window Display */}
        <div className="tab-view-window position-relative">
          {sliderBtns === true && (
            <>
              <button type="button" className="slider-arrow arrow-left shadow-sm d-flex align-items-center justify-content-center position-absolute rounded-circle bg-white border">
                <ChevronLeft size={20} />
              </button>
              <button type="button" className="slider-arrow arrow-right shadow-sm d-flex align-items-center justify-content-center position-absolute rounded-circle bg-white border">
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div className="tab-content-wrapper">
            <Row className="g-4">
              {filteredCabs.length ? (
                filteredCabs.map((cab) => {
                  const currentCategory = cab.category.toLowerCase();
                  const pathPrefix = (currentCategory === "bus" || currentCategory === "tempo traveller") 
                    ? "/bus" 
                    : "/cabs";

                  return (
                    <Col
                      key={cab.id}
                      xs={6}
                      sm={6}
                      md={4}
                      lg={3}
                      className="d-flex"
                    >
                      <Card className="cab-display-card text-center w-100 shadow-sm border d-flex flex-column justify-content-between p-2 p-sm-3">
                        {/* Image Block */}
                        <div className="card-image-box d-flex align-items-center justify-content-center">
                          <img
                            src={cab.imageSrc}
                            alt={cab.name}
                            className="img-fluid vehicle-img"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://placehold.co/240x160?text=Vehicle+Image";
                            }}
                          />
                        </div>

                        {/* Info Block */}
                        <Card.Body className="p-2 d-grid align-items-center">
                          <Card.Title className="vehicle-name fw-semibold fs-5 mb-3 text-dark">
                            {cab.name}
                          </Card.Title>

                          {/* Dynamic View Route Button using computed pathPrefix */}
                          <Link
                            href={`${pathPrefix}/${cab.slug}`}
                            passHref
                            target="_blank"
                            className="w-100"
                          >
                            <Button className="btn-square btn-square-font-base btn-square-primary py-1 w-100">
                              View Details
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Col xs={12} className="text-center py-5">
                  <p className="text-muted">
                    No fleet available under this specific category selection.
                  </p>
                </Col>
              )}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

ServiceTabsSection.propTypes = {
  title: PropTypes.string.isRequired,
  highlightWord: PropTypes.string,
  sliderBtns: PropTypes.bool,
  page: PropTypes.oneOf(["home", "cabs", "bus"]),
};

export { ServiceTabsSection };