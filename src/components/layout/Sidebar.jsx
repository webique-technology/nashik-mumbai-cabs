"use client"; // Good practice since it's used inside a Client Component (Navbar)

import React from 'react';
import { MapPin, Phone } from "lucide-react";
import Link from 'next/link'; // <--- Ensure this is exactly lowercase 'next/link'

const NavSidebar = ({ setIsMenuOpen }) => {
    return (
        <div className="container h-100 trinery-bg">
            <nav className="mobile-nav py-4">
                <Link href="/" className="d-flex mb-3 align-items-center text-decoration-none logo">
                    <div className="logo-text">
                        <h1>Nashik</h1>
                        <p className='lh-auto'>Mumbai Cabs</p>
                    </div>
                </Link>
                {/* Fixed links below */}
                <Link href="/" className="mobile-link" onClick={setIsMenuOpen}>Home</Link>
                <Link href="/about-us" className="mobile-link" onClick={setIsMenuOpen}>About-Us</Link>
                <Link href="/taxi-packages" className="mobile-link" onClick={setIsMenuOpen}>Taxi Packages</Link>
                <Link href="/cities" className="mobile-link" onClick={setIsMenuOpen}>Cities</Link>
                <Link href="/airport" className="mobile-link" onClick={setIsMenuOpen}>Airport</Link>
                <Link href="/cabs" className="mobile-link" onClick={setIsMenuOpen}>Cabs</Link>
                <Link href="/railway-station" className="mobile-link" onClick={setIsMenuOpen}>Railway Station</Link>
                <Link href="/bus" className="mobile-link" onClick={setIsMenuOpen}>Bus</Link>
                <Link href="/contact-us" className="mobile-link" onClick={setIsMenuOpen}>Contact-Us</Link>

                <div className="mobile-actions mt-4">
                    <div>
                        <h3 className="footer-heading poppins">contactInformation</h3>
                        <ul className="list-unstyled footer-contact">
                            <li className="d-flex mb-3">
                                <MapPin size={18} className="me-2 mt-1 icon" />
                                <span className="text-dark poppins small-base">
                                    Nashik Tourism Office <br />
                                    Panchavati, Nashik 422003 <br />
                                    Maharashtra, India
                                </span>
                            </li>
                            <li className="d-flex mb-3 poppins">
                                <Phone size={18} className="me-2 mt-1 icon" />
                                <div>
                                    <a href="tel:+917507778070" className="footer-link text-decoration-none small-base text-dark d-block">
                                        +91 7507778070
                                    </a>
                                </div>
                            </li>
                            <li className="d-flex poppins">
                                <div className='d-flex flex-column'>
                                    <a href="mailto:kumbhtourstravels@gmail.com" className="footer-link text-decoration-none small-base text-dark">
                                        kumbhtourstravels@gmail.com
                                    </a>
                                    <a href="mailto:mahakumbhtourstravels@gmail.com" className="footer-link text-decoration-none small-base text-dark">
                                        mahakumbhtourstravels@gmail.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavSidebar;