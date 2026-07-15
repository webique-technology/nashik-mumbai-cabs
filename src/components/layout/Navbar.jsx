"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import "../../styles/Navbar.scss";
import NavSidebar from "./Sidebar";
import { LinkPillBtn } from "../ui/Buttons";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            setTimeout(() => {
                setShowSidebar(true);
            }, 250);
        } else {
            closeMenu();
        }
    };

    const closeMenu = () => {
        setShowSidebar(false);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (showSidebar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [showSidebar]);

    return (
        <header className={`custom-navbar d-flex align-items-center ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between navbar-inner">

                    {/* Logo Section */}
                    <Link href="/" className="d-flex align-items-center text-decoration-none logo" onClick={closeMenu}>
                        {/* <div className="logo-icon"><span className="text-white">ॐ</span></div> */}
                        {/* <img src={""} alt="Logo" width={50} height={50} className="me-2" /> */}
                        <div className="logo-text">
                            <h1 className="text-light">Nashik</h1>
                            <p className="lh-auto highlight-text highlight-text-primary">Mumbai Cabs</p>
                        </div>
                    </Link>

                    {/* Navigation Stream Container Block */}
                    <nav className="d-none d-lg-flex sora align-items-center gap-4 nav-links">
                        <Link href="/" className={`nav-link-custom ${"/" === "/" ? "active" : ""}`}>
                            home
                        </Link>
                        <Link href="/about-us" className={`nav-link-custom ${"/about-us" === "/about-us" ? "active" : ""}`}>
                            about
                        </Link>
                        <Link href="/taxi-packages" className={`nav-link-custom ${"/taxi-packages" === "/taxi-packages" ? "active" : ""}`}>
                            Taxi Packages
                        </Link>
                        <Link href="/cities" className={`nav-link-custom ${"/cities" === "/cities" ? "active" : ""}`}>
                            Cities
                        </Link>
                        <Link href="/airport" className={`nav-link-custom ${"/airport" === "/airport" ? "active" : ""}`}>
                            Airport
                        </Link>
                        <Link href="/cabs" className={`nav-link-custom ${"/cabs" === "/cabs" ? "active" : ""}`}>
                            Cabs
                        </Link>
                        <Link href="/railway-station" className={`nav-link-custom ${"/railway-station" === "/railway-station" ? "active" : ""}`}>
                            Railway Station
                        </Link>
                        <Link href="/bus" className={`nav-link-custom ${"/bus" === "/bus" ? "active" : ""}`}>
                            Bus
                        </Link>
                        <Link href="/contact-us" className={`nav-link-custom ${"/contact-us" === "/contact-us" ? "active" : ""}`}>
                            contact
                        </Link>
                    </nav>

                    <div className="d-none d-lg-block">
                        <LinkPillBtn
                            btnText={"Book Now"}
                            href={"/#"}
                        />
                    </div>

                    {/* Actions Panel Wrapper */}
                    <div className="d-flex d-lg-none align-items-center gap-2 right-actions">
                        <button className="mobile-toggle d-lg-none" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                </div>
            </div>

            <div className={`nav-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu}></div>

            <div className={`mobile-menu d-lg-none ${showSidebar ? "open" : ""}`}>
                <NavSidebar
                    setIsMenuOpen={closeMenu}
                />
            </div>
        </header>
    );
}
export default Navbar;