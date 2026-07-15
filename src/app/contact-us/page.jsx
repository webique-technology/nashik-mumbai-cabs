"use client"
import React, { useState } from 'react';
import { CommonBanner } from '@/components/ui/cards';
import innerPageBg from '../../../public/images/common-banner.avif'; // Import your static layout graphics
import { AppDownloadBanner } from '@/components/sections/PromoSection';
import mobileImg from "../../../public/images/promo-mobiles.png"
import appDBgImage from "../../../public/images/promo-banner-2.jpg"
import "../../styles/contactPage.scss";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';


export default function ContactPage() {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "Contact Us", url: "/contact-us" }
    ];

    const downloadSectionData = {
        titlePrefix: "Your First Booking Discount -",
        titleHighlight: "Get 25% Off",
        titleSuffix: "on Your Next Adventure with Us!",
        iosLink: "https://apps.apple.com/your-app-link",
        androidLink: "https://play.google.com/store/your-app-link",
        mockupImageSrc: mobileImg,
        // Can accept imported static object 'dualPhonesMockup' or normal string route paths
    };

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agreeToPrivacy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. WhatsApp number { Mahakumbh Tours & Travles number }
        const targetWhatsAppNumber = "917507778088";

        // 2. Format a clean message using line breaks (%0A)
        const formattedText = `*New Inquiry From Website*%0A%0A` +
            `*Name:* ${formData.fullName}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Subject:* ${formData.subject || 'N/A'}%0A%0A` +
            `*Message:* ${formData.message}`;

        // 3. Build the official web API redirection link
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${formattedText}`;

        // 4. Open the WhatsApp chat window tab layout context
        window.open(whatsappUrl, '_blank');

        // 5. CLEAN UP FIX: Reset the state fields cleanly back to empty values right after submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            agreeToPrivacy: false
        });
    };

    return (
        <main>
            {/* CASE 1: Using a Background Image with 60% Dark Overlay (Matches image layout exactly) */}
            <CommonBanner
                title="Contact Us"
                breadcrumbs={breadcrumbPaths}
                bgImage={innerPageBg} // Can be static object image frame or direct hotlink string paths
                overlayOpacity={0.6}
                textAlign="center"
            />

            <section className="contact-page-section section-padding">
                <Container>
                    {/* Section Header Top Text Group */}
                    <Row className="mb-5">
                        <Col className='text-center'>
                            <h2 className="contact-main-heading fw-bold mb-3">Get in Touch</h2>
                            <p className="contact-sub-text text-muted mb-0">
                                Premium intercity mobility across Maharashtra. We're here to assist with your travel needs, 24/7.
                            </p>
                        </Col>
                    </Row>

                    <Row className="gy-5">
                        {/* Left Column: Form Card Wrapper */}
                        <Col lg={7} md={12}>
                            <div className="contact-form-card shadow-sm">
                                <Form onSubmit={handleSubmit}>
                                    <Row className="gy-4">

                                        <Col md={6} xs={12}>
                                            <Form.Group controlId="formFullName">
                                                <Form.Label className="field-custom-label text-uppercase fw-bold">Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="John Doe"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    className="custom-input-field border-0"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6} xs={12}>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label className="field-custom-label text-uppercase fw-bold">Email Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="custom-input-field border-0"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6} xs={12}>
                                            <Form.Group controlId="formPhone">
                                                <Form.Label className="field-custom-label text-uppercase fw-bold">Phone Number</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="phone"
                                                    placeholder="+91 00000 00000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="custom-input-field border-0"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col md={6} xs={12}>
                                            <Form.Group controlId="formSubject">
                                                <Form.Label className="field-custom-label text-uppercase fw-bold">Subject</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Inquiry about..."
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="custom-input-field border-0"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group controlId="formMessage">
                                                <Form.Label className="field-custom-label text-uppercase fw-bold">Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name="message"
                                                    rows={4}
                                                    placeholder="How can we help you today?"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="custom-textarea-field border-0"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <button type="submit" className="pill-btn primary d-inline-flex align-items-center gap-2">
                                                Submit Message <ArrowRight size={18} />
                                            </button>
                                        </Col>

                                    </Row>
                                </Form>
                            </div>
                        </Col>

                        {/* Right Column: Direct Info Blocks & Road Media Aspect */}
                        <Col lg={5} md={12} className="d-flex flex-column gap-4">

                            {/* Box Item 1: Office Info */}
                            <div className="info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                                <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                                    <MapPin size={22} />
                                </div>
                                <div className="info-meta">
                                    <h4 className="info-title fw-semibold mb-2">Our Office</h4>
                                    <Link href="#" className="info-anchor-link fw-semibold text-decoration-none">
                                        Office Shop No 11, NYSA Business Centre, Makhmalabad Rd, Ghadge Nagar, Nashik, Maharashtra 422003
                                    </Link>
                                </div>
                            </div>

                            {/* Box Item 2: Email Us */}
                            <div className="info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                                <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                                    <Mail size={22} />
                                </div>
                                <div className="info-meta">
                                    <h4 className="info-title fw-semibold mb-2">Email Us</h4>
                                    <Link href="mailto:kumbhtourstravels@gmail.com" className="info-anchor-link fw-semibold text-decoration-none">
                                        kumbhtourstravels@gmail.com
                                    </Link>
                                </div>
                            </div>

                            {/* Box Item 3: Call Us */}
                            <div className="info-block-item d-flex align-items-start gap-4 p-4 shadow-sm bg-white">
                                <div className="info-icon-circle rounded-circle flex-shrink-0 d-flex align-items-center justify-content-center text-white">
                                    <Phone size={22} />
                                </div>
                                <div className="info-meta">
                                    <h4 className="info-title fw-bold mb-2">Call Us</h4>
                                    <Link href="telto:+917507778088" className="info-anchor-link fw-semibold text-decoration-none">+91 75077 78088</Link>
                                    <p className="info-description mb-0 text-muted small">Available 24/7 for support and bookings.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <AppDownloadBanner
                titlePrefix={downloadSectionData.titlePrefix}
                titleHighlight={downloadSectionData.titleHighlight}
                titleSuffix={downloadSectionData.titleSuffix}
                iosLink={downloadSectionData.iosLink}
                androidLink={downloadSectionData.androidLink}
                mockupImageSrc={downloadSectionData.mockupImageSrc}
                bgImage={appDBgImage}
            />
        </main>
    );
}