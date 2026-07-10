import React from 'react';
import { CommonBanner } from '@/components/ui/cards';
import innerPageBg from '../../../public/images/common-banner.avif'; // Import your static layout graphics
import TestimonialSec from '@/components/sections/TestimonialSec';
import { AppDownloadBanner } from '@/components/sections/PromoSection';


import mobileImg from "../../../public/images/promo-mobiles.png"
import appDBgImage from "../../../public/images/promo-banner-2.jpg"
import { FaqSec } from '@/components/sections/FaqSec';

export default function AboutPage() {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" }
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

    return (
        <main>
            {/* CASE 1: Using a Background Image with 60% Dark Overlay (Matches image layout exactly) */}
            <CommonBanner
                title="About Us"
                breadcrumbs={breadcrumbPaths}
                bgImage={innerPageBg} // Can be static object image frame or direct hotlink string paths
                overlayOpacity={0.6}
                textAlign="center"
            />
            <TestimonialSec />
            <AppDownloadBanner
                titlePrefix={downloadSectionData.titlePrefix}
                titleHighlight={downloadSectionData.titleHighlight}
                titleSuffix={downloadSectionData.titleSuffix}
                iosLink={downloadSectionData.iosLink}
                androidLink={downloadSectionData.androidLink}
                mockupImageSrc={downloadSectionData.mockupImageSrc}
                bgImage={appDBgImage}
            />
            <FaqSec />
        </main>
    );
}