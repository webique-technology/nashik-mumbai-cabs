"use client"; // Good practice since it's used inside a Client Component (Navbar)

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link"; // <--- Ensure this is exactly lowercase 'next/link'

const NavSidebar = ({ setIsMenuOpen }) => {
  return (
    <div className="container h-100 trinery-bg">
      <nav className="mobile-nav py-4">
        <Link
          href="/"
          className="d-flex mb-3 align-items-center text-decoration-none"
        >
          <div className="logo-text">
            <img src={"/images/nmc-logo-2.png"} alt="Logo" className="me-2 brand-logo" />
            {/* <h1>Nashik</h1>
            <p className="lh-auto highlight-text highlight-text-primary">Mumbai Cabs</p> */}
          </div>
        </Link>
        {/* Fixed links below */}
        <Link href="/" className="mobile-link" onClick={setIsMenuOpen}>
          Home
        </Link>
        <Link href="/about-us" className="mobile-link" onClick={setIsMenuOpen}>
          About-Us
        </Link>
        {/* <Link href="/taxi-packages" className="mobile-link" onClick={setIsMenuOpen}>Taxi Packages</Link> */}
        <Link href="/cities" className="mobile-link" onClick={setIsMenuOpen}>
          Cities
        </Link>
        <Link href="/airport" className="mobile-link" onClick={setIsMenuOpen}>
          Airport
        </Link>
        <Link href="/cabs" className="mobile-link" onClick={setIsMenuOpen}>
          Cabs
        </Link>
        <Link
          href="/railway-station"
          className="mobile-link"
          onClick={setIsMenuOpen}
        >
          Railway Station
        </Link>
        <Link href="/bus" className="mobile-link" onClick={setIsMenuOpen}>
          Bus
        </Link>
        <Link
          href="/contact-us"
          className="mobile-link"
          onClick={setIsMenuOpen}
        >
          Contact-Us
        </Link>

        <div className="mobile-actions text-light mt-4">
          <div>
            <h3 className="footer-heading text-light poppins">Contact Us</h3>
            <ul className="list-unstyled footer-contact">
              <li className="d-flex mb-3">
                <MapPin size={18} className="me-2 mt-1 icon" />
                <div className="d-flex w-100">
                  <a
                    href="https://maps.app.goo.gl/SgWUvNo8fQQ3uv7y6"
                    target="_blank"
                  >
                    <span className="poppins small-base">
                      Shop No. 7, Nysa Buisness Centre, Ghadge Nagar, Makhmalabad, Nashik, Maharashtra 422003
                    </span>
                  </a>
                </div>
              </li>
              <li className="d-flex mb-3 poppins">
                <Phone size={18} className="me-2 mt-1 icon text-light" />
                <div>
                  <a
                    href="tel:+919225899899"
                    className="text-decoration-none small-base d-block"
                  >
                    +91 92258 99899
                  </a>
                </div>
              </li>
              <li className="d-flex gap-1 poppins">
                {/* <Mail size={24} className="mt-1 icon text-light" /> */}
                <div className="">
                  <a
                    href="mailto:nashikmumbaicabs@gmail.com"
                    className="text-decoration-none small-base"
                  >
                    nashikmumbaicabs@gmail.com
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
