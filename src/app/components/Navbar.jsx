"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';

const internationalDestinations = [
    { label: "Dubai", href: "/destinations/dubai" },
    { label: "Abu Dhabi", href: "/destinations/abu-dhabi" },
    { label: "Ras Al Khaimah", href: "/destinations/ras-al-khaimah" },
];

const domesticDestinations = [
    { label: "Goa", href: "#" },
    { label: "Kerala", href: "#" },
    { label: "Ladakh", href: "#" },
];

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [BgColor, setBgColor] = useState(false);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setBgColor(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setShowNavbar(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
            prevScrollPos.current = currentScrollPos;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <div className="w-full text-black fixed z-30 top-5 transition-all duration-300 lg:px-0 px-4">
                <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/30 rounded-full py-1 px-4 flex items-center justify-between">
                    <div className="text-2xl font-bold h-18 relative bottom-5">
                        <Link href="/">
                            <Image
                                src="/fht_logo.png"
                                alt="FlyHigh Logo"
                                width={100}
                                height={20}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <ul className="hidden md:flex items-center justify-center space-x-14 text-xl font-medium">
                        <li className="hover:text-blue-700 cursor-pointer">
                            <Link href="/mice">Mice</Link>
                        </li>

                        {/* Desktop Dropdown */}
                        <li className="relative group cursor-pointer hover:text-blue-700">
                            <div className="flex items-center">
                                <span className="py-4">Destination</span>
                                <RiArrowDropDownLine className="text-3xl transition-transform duration-300 group-hover:-rotate-180" />
                            </div>
                            <div className="absolute top-12 left-0 bg-white shadow-md mt-2 p-4 w-72 rounded-md z-50 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 hidden group-hover:flex">
                                <div className="flex flex-col space-y-2">
                                    {internationalDestinations.map((item) => (
                                        <Link key={item.label} href={item.href} className="hover:text-yellow-500">
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className="hover:text-blue-700 cursor-pointer">
                            <Link href="/services">Services</Link>
                        </li>
                        <li className="hover:text-blue-700 cursor-pointer">
                            <Link href="/about">About us</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                            <Link
                                href="/contact"
                                className="block bg-green-500 text-white rounded-full px-4 py-2 hover:text-gray-200 hover:bg-green-600 transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-4xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${mobileMenuOpen ? "translate-x-0" : "-translate-x-[1000px]"} fixed w-full md:max-w-1/3 inset-0 z-50 bg-white text-black p-6 overflow-y-auto transition-translate duration-200 transform`}>
                <div className="flex justify-between items-center mb-6">
                    <div className="text-2xl font-bold">LOGO</div>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-4xl text-gray-800"
                    >
                        <IoCloseOutline />
                    </button>
                </div>

                <nav className="space-y-6 text-lg font-medium">
                    <Link href="/trip-planner" className="block hover:text-yellow-500">
                        Trip Planner <sup className="text-red-400">New</sup>
                    </Link>

                    <div>
                        <p className="font-semibold mb-1">Destinations</p>
                        <ul className="ml-3 text-sm text-gray-700 space-y-1">
                            <li className="text-gray-500">Domestic:</li>
                            {domesticDestinations.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-yellow-500">{item.label}</Link>
                                </li>
                            ))}

                            <li className="mt-3 text-gray-500">International:</li>
                            {internationalDestinations.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="hover:text-yellow-500">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/services" className="block hover:text-yellow-500">
                        Services
                    </Link>
                    <Link href="/blogs" className="block hover:text-yellow-500">
                        Blogs
                    </Link>
                    <Link href="/contact" className="block hover:text-yellow-500">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
