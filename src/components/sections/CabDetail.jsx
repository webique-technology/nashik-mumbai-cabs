"use client";

import React from "react";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import {
  ArrowLeft,
  ShieldCheck,
  Compass,
  HelpCircle,
  CheckCircle2,
  DollarSign,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import "../../styles/CommonSec.scss";
import { BookingForm } from "./CommonSec";
import { LinkPillBtn } from "../ui/Buttons";

const CabDetail = ({ cab }) => {
  return (
    <section className="cab-detail-wrapper section-padding">
      <Container className="py-3">
        
        {/* 1. BACK BUTTON: Renders first at the absolute top on all screens */}
        <div className="mb-4">
          <Link
            href="/"
            className="back-link border border-dark py-1 px-2 rounded-4 d-inline-flex align-items-center text-decoration-none small fw-semibold text-muted"
          >
            <ArrowLeft size={16} className="me-2" /> Back to Fleet Selection
          </Link>
        </div>

        {/* 2. MOBILE-ONLY IMAGE CARD: Displays second on viewports under 992px (< lg) */}
        <div className="vehicle-image-card bg-white border shadow-sm p-4 mb-4 rounded-3 text-center d-lg-none">
          <div
            className="img-frame mb-3 p-2 d-flex align-items-center justify-content-center bg-light rounded"
            style={{ minHeight: "240px" }}
          >
            <img
              src={cab.imageSrc}
              alt={cab.name}
              className="img-fluid detail-vehicle-img rounded"
              style={{ maxHeight: "280px", objectFit: "contain" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/500x350?text=Vehicle+Image";
              }}
            />
          </div>
          <h2 className="h4 fw-bold text-dark mb-0">{cab.name}</h2>
        </div>

        {/* Grid Setup: Managed via visual order helpers */}
        <Row className="g-4 lg-g-5">
          
          {/* 3. MAIN LEFT COLUMN: Renders headings/content text next on mobile */}
          {/* order-1 on mobile ensures text sits right below the mobile image banner, above the form */}
          <Col xs={12} lg={7} className="order-1 order-lg-1">
            <div className="detail-header-block mb-4">
              <Badge
                bg="dark"
                className="text-uppercase mb-2 px-3 py-2 tracking-wider rounded-1"
              >
                {cab.category} Fleet Choice
              </Badge>
              <h1 className="main-title fw-bold text-dark display-6 mb-2">
                {cab.title}
              </h1>
              <p className="route-subtitle text-primary fw-medium small-base mb-0">
                {cab.routesSubtitle}
              </p>
            </div>

            <hr className="my-4 border-slate-200" />

            {/* Description Paragraph Block */}
            <div className="description-block mb-4">
              <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                <Compass size={18} className="me-2 text-primary" /> Journey Overview
              </h3>
              <p className="description-text text-muted lh-lg mb-0">
                {cab.description}
              </p>
            </div>

            {/* DYNAMIC VEHICLE FEATURES DISPLAY CORE */}
            {cab.features && cab.features.length > 0 && (
              <div className="features-block mb-4 p-4 bg-white rounded border shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                  <CheckCircle2 size={18} className="me-2 text-success" /> Vehicle Amenities & Inclusions
                </h3>
                <div className="row g-2">
                  {cab.features.map((feature, idx) => (
                    <div key={idx} className="col-12 col-sm-6">
                      <div className="d-flex align-items-center p-2 bg-light rounded border border-light-subtle">
                        <span className="text-success me-2 fw-bold small">✓</span>
                        <span className="text-secondary small fw-semibold">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DYNAMIC PER METER PRICING MATRIX TABLE */}
            {cab.pricingTable && cab.pricingTable.length > 0 && (
              <div className="pricing-table-block mb-4 p-4 bg-white rounded border shadow-sm">
                <h3 className="h5 fw-bold text-dark mb-3 d-flex align-items-center">
                  <DollarSign size={18} className="me-2 text-warning" /> Estimated Rate Card (Per-Km Matrix)
                </h3>
                <div className="table-responsive">
                  <Table striped bordered hover className="align-middle mb-0 small-base">
                    <thead className="table-dark">
                      <tr>
                        <th>Vehicle Model</th>
                        <th>Rate / KM</th>
                        <th>Min. Limit</th>
                        <th>Driver Allowance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cab.pricingTable.map((row, idx) => (
                        <tr key={idx}>
                          <td className="fw-bold text-dark">{row.vehicle}</td>
                          <td className="highlight-text highlight-text-primary fw-semibold">
                            {row.ratePerKm}
                          </td>
                          <td className="text-secondary">{row.minKm}</td>
                          <td className="text-secondary">{row.driverAllowance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <p className="small text-muted mt-2 mb-0 italic">
                  *Note: Tolls, state permits, and state parking charges are calculated additionally based on your exact route checkpoints.
                </p>
              </div>
            )}

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

          {/* 4. INTERACTIVE SIDEBAR RIGHT COLUMN */}
          {/* order-2 on mobile forces the form and call buttons down below the text descriptions on small devices */}
          <Col
            xs={12}
            lg={5}
            className="order-2 order-lg-2 d-flex flex-column align-items-center justify-content-start"
          >
            <div className="w-100 position-sticky" style={{ top: "30px" }}>
              
              {/* DESKTOP-ONLY VEHICLE CARD: Renders exclusively on viewports >= 992px */}
              <div className="vehicle-image-card bg-white border shadow-sm p-4 mb-4 rounded-3 text-center d-none d-lg-block">
                <div
                  className="img-frame mb-3 p-2 d-flex align-items-center justify-content-center bg-light rounded"
                  style={{ minHeight: "240px" }}
                >
                  <img
                    src={cab.imageSrc}
                    alt={cab.name}
                    className="img-fluid detail-vehicle-img rounded"
                    style={{ maxHeight: "280px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/500x350?text=Vehicle+Image";
                    }}
                  />
                </div>
                <h2 className="h4 fw-bold text-dark mb-0">{cab.name}</h2>
              </div>

              {/* Dynamic Interactive Booking Form */}
              <BookingForm btnClass="w-100 py-2.5" />

              {/* Call and WhatsApp Action Row Elements */}
              <Row className="g-3 mt-1">
                <Col xs={6}>
                  <LinkPillBtn
                    href={"tel:+919225899899"}
                    icon={<PhoneCall size={18} />}
                    btnText={"Call Us"}
                    varaint="pill-btn primary rounded-2 text-center w-100 d-block py-2"
                  />
                </Col>
                <Col xs={6}>
                  <LinkPillBtn
                    href={`https://wa.me/919225899899?text=${encodeURIComponent("Hello! I want to book a taxi request.")}`}
                    target="_blank"
                    btnText={"Contact Us"}
                    img={"/images/whatsapp.svg"}
                    varaint="pill-btn pill-btn-whatsapp gap-2 rounded-2 text-center w-100 d-block py-2"
                  />
                </Col>
              </Row>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default CabDetail;