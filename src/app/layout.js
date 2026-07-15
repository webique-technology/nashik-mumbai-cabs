import { Inter, Poppins, Roboto } from "next/font/google";
import "../styles/variable.scss";
import "../styles/main.scss";
// src/app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // Your custom global styles
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryMarquee from "@/components/sections/IndustryMarquee";

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: 'Nashik Mumbai Cabs | Reliable Taxi & Car Rentals',
  description: 'Book affordable and comfortable cab services between Nashik and Mumbai. Available 24/7.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
      <body>
        <Navbar />
        {children}
        <IndustryMarquee />
        <Footer />
      </body>
    </html>
  );
}
