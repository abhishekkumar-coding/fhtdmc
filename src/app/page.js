"use client";
import Image from "next/image";
import { useState } from "react";
import { Heading1, Menu, X } from "lucide-react";
import HomeHero from "./components/HomeHero";
import WhatWeProvide from "./components/WhatWeProvide";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactCTA from "./components/CallToAction";
import VisitedPeople from "./components/VisitedPeople";
import HomeFAQS from "./components/HomeFAQS";
import PopularDubaiPackages from "./components/PopularDubaiPackages";
import CallToAction from "./components/CallToAction";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="relative bg-white">
    <HomeHero/>
    <PopularDubaiPackages/>
    <VisitedPeople/>
    <WhyChooseUs/>
    <HomeFAQS/>
    <CallToAction/>
    </div>
  );
}

