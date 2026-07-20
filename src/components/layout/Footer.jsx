"use client";
import React from 'react';
import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Col, Row } from 'react-bootstrap';

import "../../styles/Footer.scss";
import "../../styles/main.scss";

import facebook from "../../../public/images/facebook-logo.svg";
import insta from "../../../public/images/instagram-logo.svg";
import youtube from "../../../public/images/youtube-logo.svg";
import xLogo from "../../../public/images/x-logo.svg";
import logo from "../../../public/images/maharashtra-tour-logo.png"
import googleLogo from "../../../public/images/google-logo.png";
import tripAdvisorLogo from "../../../public/images/trip-advisor.png";
import justdial from "../../../public/images/justdial-logo.png";
import paymentLogos from "../../../public/images/footer_payment_icon.png";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="custom-footer pt-4 pt-md-5 position-relative text-white">

            {/* Main Footer Inner Grid Content */}
            <div className="container pb-2 pb-sm-4 pb-md-5">
                <Row className="gy-4">

                    {/* 1. About Module Frame Segment */}
                    <Col md={6} lg={3}>
                        <div className="d-flex align-items-center mb-4">
                            <div className="">
                                {/* <span>ॐ</span> */}
                                <img src={logo.src} alt="Logo" width={50} height={50} className="me-1" />
                            </div>
                            <div className="ms-2">
                                <h3 className="footer-title">Nashik</h3>
                                <p className="footer-subtitle highlight-text highlight-text-primary">Mumbai Cabs</p>
                            </div>
                        </div>
                        <p className="footer-text d-none d-md-block p-0 pe-sm-3">
                            Maharashtra’s most trusted 24/7 intercity taxi service, providing safe, comfortable, and affordable rides between Nashik, Mumbai, & surrounding regions.
                        </p>

                        {/* Social Link Wrappers */}
                        <div className="d-flex gap-2 mt-3 mb-3">
                            <a href="https://www.facebook.com/people/Mahakumbh-Tours-Travels/61585265510417/?ref=PROFILE_EDIT_xav_ig_profile_page_web#" target='_blank' rel="noopener noreferrer" className="social-icon">
                                <Image
                                    src={facebook}
                                    alt="Facebook"
                                    width={18}
                                    height={18}
                                    className='img-fluid'
                                />
                            </a>
                            <a href="https://www.threads.com/@mahakumbh_tours_travels" target='_blank' rel="noopener noreferrer" className="social-icon">
                                <Image
                                    src={xLogo}
                                    alt="Facebook"
                                    width={18}
                                    height={18}
                                    className='img-fluid'
                                />
                            </a>
                            <a href="https://www.instagram.com/mahakumbh_tours_travels/" target='_blank' rel="noopener noreferrer" className="social-icon">
                                <Image
                                    src={insta}
                                    alt="Instagram"
                                    width={18}
                                    height={18}
                                    className='img-fluid'
                                />
                            </a>
                            <a href="https://www.youtube.com/@mahakumbhtourstravels" className="social-icon">
                                <Image
                                    src={youtube}
                                    alt="Youtube"
                                    width={18}
                                    height={18}
                                    className='img-fluid'
                                />
                            </a>
                        </div>
                    </Col>

                    {/* 2. Navlinks Column Layer Map */}
                    <Col md={6} lg={2} className='d-none d-md-block'>
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li> <Link href="/" target='_blank' className='footer-link d-block mb-1 py-1'>Home</Link> </li>
                            <li> <Link href="/about-us" target='_blank' className='footer-link d-block mb-1 py-1'>About</Link> </li>
                            <li> <Link href="/contact-us" target='_blank' className='footer-link d-block mb-1 py-1'>Contact</Link> </li>
                        </ul>
                    </Col>

                    {/* 3. Operational B2B Core Services Render Module */}
                    <Col md={6} lg={3}>
                        <h3 className="footer-heading">Other Services</h3>
                        <ul className='services-link list-unstyled'>
                            {/* <li className='mb-2 p-0'>
                                <Link href="/taxi-packages" target='_blank' className='footer-link d-block mb-1 py-1'>Taxi Packages</Link>
                            </li> */}
                            <li className='mb-2 p-0'>
                                <Link href="/cities" target='_blank' className='footer-link d-block mb-1 py-1'>Cities</Link>
                            </li>
                            <li className='mb-2 p-0'>
                                <Link href="/airport" target='_blank' className='footer-link d-block mb-1 py-1'>Airport</Link>
                            </li>
                            <li className='mb-2 p-0'>
                                <Link href="/cabs" target='_blank' className='footer-link d-block mb-1 py-1'>Cabs</Link>
                            </li>
                            <li className='mb-2 p-0'>
                                <Link href="/railway-station" target='_blank' className='footer-link d-block mb-1 py-1'>Railway Station</Link>
                            </li>
                            <li className='mb-2 p-0'>
                                <Link href="/bus" target='_blank' className='footer-link d-block mb-1 py-1'>Bus</Link>
                            </li>
                        </ul>
                    </Col>

                    {/* 4. Local Contact Mapping Block */}
                    <Col md={6} lg={4} className=''>
                        <div className='d-none d-md-block'>
                            <h3 className="footer-heading">Contact Info</h3>
                            <ul className="list-unstyled footer-contact">
                                <li className="d-flex mb-3">
                                    <MapPin size={18} className="me-2 mt-1 icon flex-shrink-0" />
                                    <Link href="https://maps.app.goo.gl/2snH44TGiHw6UATM7" target='_blank' className='footer-link d-block'>
                                        <span>Office Shop No 11, NYSA Business Centre, Makhmalabad Rd, Ghadge Nagar, Nashik, Maharashtra 422003</span>
                                    </Link>
                                </li>
                                <li className="d-flex mb-3">
                                    <Phone size={18} className="me-2 mt-1 icon flex-shrink-0" />
                                    <div>
                                        <a href="tel:+919225899899" className="footer-link d-block">
                                            +91 92258 99899
                                        </a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <Mail size={18} className="me-2 mt-1 icon flex-shrink-0" />
                                    <div className="d-flex flex-column">
                                        <a href="mailto:kumbhtourstravels@gmail.com" className="footer-link">
                                            kumbhtourstravels@gmail.com
                                        </a>
                                        <a href="mailto:mahakumbhtourstravels@gmail.com" className="footer-link">
                                            mahakumbhtourstravels@gmail.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex mb-3 mb-md-0 flex-wrap align-items-center gap-2 justify-content-start">
                            {/* Apple App Store Button */}
                            <Link
                                href={"https://share.google/aNNTiYPnbUpJd4oaT"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="play-style-btn p-1 px-2 d-flex gap-2 align-items-center flex-row transition-hover"
                            // style={{ height: "45px" }} // Explicit height forces matching scale
                            >
                                <img
                                    src={googleLogo.src} // Update this path to where your image is saved
                                    alt="Download on the App Store"
                                    className="w-auto h-100 object-fit-contain rounded-2"
                                    style={{ maxHeight: "25px" }}
                                />
                                <div className='d-flex flex-column align-items-start'>
                                    <p className='small-12 mb-0'>Get It On</p>
                                    <h4 className="fs-6 m-0">Google Search</h4>
                                </div>
                            </Link>
                            {/* Google Play Store Button */}
                            <Link
                                href={"https://www.tripadvisor.in/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="play-style-btn p-1 px-2 d-flex gap-2 align-items-center flex-row transition-hover"
                            // style={{ height: "45px" }} // Identical explicit height
                            >
                                <img
                                    src={tripAdvisorLogo.src}// Update this path to where your image is saved
                                    alt="Get it on Google Play"
                                    className="w-auto h-100 object-fit-contain rounded-2"
                                    style={{ maxHeight: "25px" }}
                                />
                                <div className='d-flex flex-column align-items-start'>
                                    <p className='small-12 mb-0'>Get It On</p>
                                    <h4 className="fs-6 m-0">Trip Advisor</h4>
                                </div>
                            </Link>
                            {/* Just dail btn */}
                            <Link
                                href={"https://www.justdial.com/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="play-style-btn p-1 px-2 d-flex gap-2 align-items-center flex-row transition-hover"
                            // style={{ height: "45px" }} // Identical explicit height
                            >
                                <img
                                    src={justdial.src}// Update this path to where your image is saved
                                    alt="Get it on Google Play"
                                    className="w-auto h-100 object-fit-contain rounded-2"
                                    style={{ maxHeight: "25px" }}
                                />
                                <div className='d-flex flex-column align-items-start'>
                                    <p className='small-12 mb-0'>Get It On</p>
                                    <h4 className="fs-6 m-0">Justdial</h4>
                                </div>
                            </Link>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* Bottom Copyright Status Panel */}
            <div className="footer-bottom">
                <div className="container py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <p className="mb-0 fs-6 fw-medium text-light text-center text-md-start">
                        © 2026 All Rights Reserved by <span className='text-light fs-6 fw-bold'>NarzoTech</span> {currentYear}
                    </p>
                    <div className="d-flex gap-3">
                        <img src={paymentLogos.src} alt="payment logos" />
                        {/* <p className="footer-text m-0">
                            developedBy
                            <a href="https://webique.in/" target="_blank" rel="noopener noreferrer" className='footer-link--webname'>
                                Webique Technology
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;