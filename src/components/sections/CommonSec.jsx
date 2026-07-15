"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
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

export const CarBlock = ({ }) => {

    const carBlockData = [
        {
            title: "Jeep",
            icon: "/images/jeep.png"
        },
        {
            title: "Sedan",
            icon: "/images/sedan.png"
        },
        {
            title: "SUV",
            icon: "/images/suv.png"
        },
        {
            title: "Hatchback",
            icon: "/images/hatchback.png"
        },
        {
            title: "Traveller",
            icon: "/images/traveller.png"
        },
        {
            title: "Bus",
            icon: "/images/bus.png"
        },
    ]

    return (
        <section className="car-block py-5">
            <Container>
                <Row className="g-4">
                    {carBlockData.map((car, index) => {
                        return (
                            <Col xs={6} md={4} xl={2} key={index}>
                                <div className="car-block-card shadow-sm border">
                                    <img src={car.icon} alt={car.title} className="img-fluid" />
                                    <h3 className="card-title h5 fw-bold mb-0">{car.title}</h3>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}


export const BookingForm = () => {
    const [formData, setFormData] = useState({
        taxiType: '',
        startDestination: '',
        endDestination: '',
        completeName: '',
        emailAddress: '',
        phoneNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Data Submitted:", formData);
        // Add your submission logic or endpoint routing integration agent here

        setFormData({
            taxiType: '',
            startDestination: '',
            endDestination: '',
            completeName: '',
            emailAddress: '',
            phoneNo: '',
            message: ''
        })
    };

    return (
        <div className="taxi-booking-card border bg-white shadow-sm">
            <div className="card-header-block text-start mb-4">
                <h2 className="booking-main-title fw-bold text-dark">
                    Book Your Taxi Ride
                </h2>
                <p className="booking-subtitle text-muted mb-0">
                    To get the ride of your taxi please select from the following:
                </p>
            </div>

            <Form onSubmit={handleSubmit} className="booking-form-element">
                {/* Taxi Type Select Dropdown */}
                <Form.Group className="mb-4">
                    <Form.Select
                        name="taxiType"
                        value={formData.taxiType}
                        onChange={handleChange}
                        className="form-input-field custom-select"
                        required
                    >
                        <option value="">Choose Taxi Type</option>
                        <option value="sedan">Swift / Etios (Sedan)</option>
                        <option value="suv">Innova Crysta / Ertiga (SUV)</option>
                        <option value="tempo">Tempo Traveller (17 Str)</option>
                        <option value="bus">AC Luxury Tour Bus</option>
                    </Form.Select>
                </Form.Group>

                {/* Grid Split Rows for Destinations */}
                <div className="form-grid-row mb-4">
                    <Form.Group className="grid-item">
                        <Form.Control
                            type="text"
                            name="startDestination"
                            placeholder="Start Destination"
                            value={formData.startDestination}
                            onChange={handleChange}
                            className="form-input-field"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="grid-item">
                        <Form.Control
                            type="text"
                            name="endDestination"
                            placeholder="End Destination"
                            value={formData.endDestination}
                            onChange={handleChange}
                            className="form-input-field"
                            required
                        />
                    </Form.Group>
                </div>

                {/* Grid Split Rows for Personal Data */}
                <div className="form-grid-row mb-4">
                    <Form.Group className="grid-item">
                        <Form.Control
                            type="text"
                            name="completeName"
                            placeholder="Complete Name"
                            value={formData.completeName}
                            onChange={handleChange}
                            className="form-input-field"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="grid-item">
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

                {/* Full-width Phone Number Group */}
                <Form.Group className="mb-4">
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

                {/* Textarea Message Field */}
                <Form.Group className="mb-4">
                    <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input-field text-area-field"
                    />
                </Form.Group>

                {/* Left-Aligned Primary Yellow Button */}
                <div className="text-start mt-4">
                    <button type="submit" className="btn btn-square btn-square-primary text-uppercase fw-bold">
                        Submit Request
                    </button>
                </div>
            </Form>
        </div>
    );
};