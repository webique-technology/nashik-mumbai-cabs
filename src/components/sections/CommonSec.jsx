"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { usePathname } from "next/navigation";
import * as LucideIcons from "lucide-react";
import { Award, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import "../../styles/CommonSec.scss";
import { CabsData } from "@/lib/data";

export const FeatureGridSec = ({
  badgeText = "OUR EXPERTISE",
  mainHeading = "Our Premium Travel Solutions.",
  subHeading = "Experience comfort and reliability with our specialized transport services tailored for the discerning traveler.",
  featuresData = [],
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
            <h2 className="feature-main-heading section-title fw-semibold mb-3">
              {mainHeading}
            </h2>
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
            const IconComponent =
              LucideIcons[feature.iconName] || LucideIcons.HelpCircle;

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
                        backgroundColor:
                          feature.iconBg || "rgba(255, 255, 255, 0.05)",
                        color: feature.iconColor || "#ffffff",
                      }}
                    >
                      <IconComponent size={24} strokeWidth={2} />
                    </div>

                    {/* Card Title & Desc */}
                    <h3 className="card-title h5 fw-bold mb-3">
                      {feature.title}
                    </h3>
                    <p className="card-desc small text-muted lh-base mb-4">
                      {feature.description}
                    </p>
                  </div>

                  {/* Dynamic Action Trigger */}
                  <div className="card-footer-action pt-2">
                    <Link
                      href={feature.linkUrl || "#"}
                      className="learn-more-btn d-inline-flex align-items-center text-decoration-none fw-semibold small"
                      style={{ color: feature.themeColor || "#38bdf8" }}
                    >
                      Learn More
                      <LucideIcons.ArrowRight
                        size={14}
                        className="ms-2 transition-arrow"
                      />
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

export const CarBlock = ({}) => {
  const carBlockData = [
    {
      title: "Sedan",
      icon: "/images/sedan.png",
    },
    {
      title: "Hatchback",
      icon: "/images/hatchback.png",
    },
    {
      title: "SUV",
      icon: "/images/suv.png",
    },
    {
      title: "Jeep",
      icon: "/images/jeep.png",
    },
    {
      title: "Traveller",
      icon: "/images/traveller.png",
    },
    {
      title: "Bus",
      icon: "/images/bus.png",
    },
  ];

  return (
    <section className="car-block py-5  pb-1">
      <Container>
        <Row className="g-3 g-md-4">
          {carBlockData.map((car, index) => {
            return (
              <Col xs={4} md={4} xl={2} key={index}>
                <div className="car-block-card shadow-sm border">
                  <img src={car.icon} alt={car.title} className="img-fluid" />
                  <h3 className="card-title h5 fw-bold mb-0">{car.title}</h3>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const BookingForm = ({ titleClass, btnClass = "btn-square-light" }) => {
  const pathname = usePathname();

  const isAirportPage = pathname?.includes("/airport");

  const tourTypeOptions = [
    { tourType: "Outstation" },
    { tourType: "One Way" },
    { tourType: "Round Trip" },
    { tourType: "Airport Pickup / Drop" },
    { tourType: "Local" },
  ];

  const [formData, setFormData] = useState({
    taxiType: "",
    tourType: "",
    pickupAddress: "",
    dropAddress: "",
    pickupDate: "",
    pickupTime: "",
    completeName: "",
    emailAddress: "",
    phoneNo: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "919876543210";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dynamically build the service specification string based on route condition
    const serviceSelection = isAirportPage
      ? `*Taxi Type:* ${formData.taxiType || "N/A"}`
      : `*Tour Type:* ${formData.tourType || "N/A"}`;

    const textMessage =
      `*New Cab Booking Request*\n` +
      `Hello, I would like to book a cab. Here are my ride details:\n\n` +
      `*Customer Name:* ${formData.completeName}\n` +
      `*Contact Number:* ${formData.phoneNo}\n` +
      `*Email:* ${formData.emailAddress}\n\n` +
      `${serviceSelection}\n` + // Dynamically injects the selected option value
      `*Pickup Date:* ${formData.pickupDate}\n` +
      `*Pickup Time:* ${formData.pickupTime}\n\n` +
      `*Pickup Add:* ${formData.pickupAddress}\n` +
      `*Drop Add:* ${formData.dropAddress}\n\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset all form arrays cleanly
    setFormData({
      taxiType: "",
      tourType: "",
      pickupAddress: "",
      dropAddress: "",
      pickupDate: "",
      pickupTime: "",
      completeName: "",
      emailAddress: "",
      phoneNo: "",
      message: "",
    });
  };

  return (
    <div className="taxi-booking-card border shadow-sm p-4 rounded-3">
      <div className={`card-header-block text-start mb-4 ${titleClass}`}>
        <h2 className="booking-main-title h4 fw-bold text-dark mb-1">
          Book Your Taxi Ride
        </h2>
        <p className="booking-subtitle small text-muted mb-0">
          To get the ride of your taxi please select from the following:
        </p>
      </div>

      <Form onSubmit={handleSubmit} className="booking-form-element">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="completeName"
            placeholder="Full Name"
            value={formData.completeName}
            onChange={handleChange}
            className="form-input-field"
            required
          />
        </Form.Group>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="tel"
                name="phoneNo"
                placeholder="Phone No"
                value={formData.phoneNo}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
        </div>

        {isAirportPage ? (
          <Form.Group className="mb-3">
            <Form.Select
              name="taxiType"
              value={formData.taxiType}
              onChange={handleChange}
              className="form-select form-input-field custom-select"
              required
            >
              <option value="" className="w-100 p-3">
                Choose Vehicle Type
              </option>
              {CabsData.map((taxi, index) => (
                <option key={index} value={taxi.name} className="w-100 p-3">
                  {taxi.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        ) : (
          <Form.Group className="mb-3">
            <Form.Select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              className="form-select form-input-field custom-select"
              required
            >
              <option value="">Choose Tour Type</option>
              {tourTypeOptions.map((tour, index) => (
                <option key={index} value={tour.tourType}>
                  {tour.tourType}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        )}

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="pickupAddress"
                placeholder="Pickup Add."
                value={formData.pickupAddress}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="dropAddress"
                placeholder="Drop Add."
                value={formData.dropAddress}
                onChange={handleChange}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="pickupDate"
                placeholder="Pickup Date"
                value={formData.pickupDate}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>

          <div className="col-12 col-sm-6">
            <Form.Group>
              <Form.Control
                type="text"
                name="pickupTime"
                placeholder="Pickup Time"
                value={formData.pickupTime}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "time")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                className="form-input-field"
                required
              />
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Additional Instructions / Message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="form-input-field text-area-field"
          />
        </Form.Group>

        <div className="text-start">
          <button
            type="submit"
            className={`btn-square btn-square-light ${btnClass}`}
          >
            Submit Request
          </button>
        </div>
      </Form>
    </div>
  );
};

export const PilgrimStandard = () => {
  const standardsList = [
    {
      id: "standard-1",
      icon: <Award size={32} className="card-icon" />,
      title: "Vetted & Verified Drivers",
      description:
        "Every driver undergoes a background check and a specialized orientation for the Nashik city routes and temple etiquettes.",
      isFeatured: false,
    },
    {
      id: "standard-2",
      icon: <ShieldCheck size={36} className="card-icon" />,
      title: "100% Booking Guarantee",
      description:
        "Once confirmed, your vehicle is locked in. No cancellations during the peak mela hours.",
      isFeatured: true, // This maps to the primary colored card in the image
    },
    {
      id: "standard-3",
      icon: <Sparkles size={32} className="card-icon" />,
      title: "Sanitized Fleet",
      description:
        "Vehicles are deep cleaned after every trip following international hygiene protocols.",
      isFeatured: false,
    },
    {
      id: "standard-4",
      icon: <PhoneCall size={30} className="card-icon" />,
      title: "24/7 Roadside Assistance",
      description:
        "Dedicated helpline for any on-road emergencies, ensuring your journey remains uninterrupted.",
      isFeatured: false,
    },
  ];

  return (
    <section className="pilgrim-standard-section section-padding bg-light">
      <Container>
        {/* Section Heading */}
        <div className="text-center section-header">
          <h2 className="section-title">The Premium Ride <span className="title-highlight">Standard</span></h2>
        </div>

        {/* Dynamic Cards Grid */}
        <Row className="g-4 justify-content-center align-items-stretch">
          {standardsList.map((item) => (
            <Col key={item.id} xs={6} sm={6} md={6} lg={3} className="d-flex">
              <div
                className={`standard-card d-flex flex-column rounded-4 p-4 transition-all w-100 ${
                  item.isFeatured
                    ? "featured-card shadow"
                    : "standard-white shadow-sm"
                }`}
              >
                {/* Icon Wrapper Context */}
                <div className="icon-container mb-4">{item.icon}</div>

                {/* Card Title */}
                <h3 className="card-heading fw-bold mb-3">{item.title}</h3>

                {/* Card Description */}
                <p className="card-desc lh-base mb-0">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
