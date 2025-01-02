"use client";
/* eslint-disable react/no-unescaped-entities */
import productImage from "@/assets/product-image-screen.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    // Style tag, heading, paragraph, product image, and 3d images
    <section
      id="showcase"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pt-24 pb-16 overflow-x-clip"
    >
      <div className="container">
        {/* Should `max-w-auto` be included in div below? */}
        <div className="max-w-[1000px] mx:auto">
          <div className="flex justify-left">
            <div className="tag">Design Showcase #1</div>
          </div>
          <h2 className="text-left text-3xl md:text-[48px] md:leading-[60px] section-title mt-5">
            Non-profit client web and mobile redesign
          </h2>
          <p className="text-left section-description mt-5">
            Poder NC's former website was due for a revamp. A team of 2
            developers and I collaborated to bring to light the organization's
            true vibrant nature and values behind the nonprofit's work of
            educating and empowering North Carolinians on public issues
            affecting the Latinx community.
          </p>
          <p className="text-left section-description mt-5">
            From a black somber website to a responsive one that brings at the
            forefront Poder's colors, flair, and energy, the redesign sought to
            increase Poder's engagement and community-building intitiative,
            reaching their core audience of Gen Z and Millennials.
          </p>
          <p className="text-left section-description mt-5">
            <strong>Skills</strong>: Design Strategy, User Research, User
            Experience, User Interface, High-Fidelity Mockups
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={225}
            width={225}
            className="hidden md:block absolute -right-20 -top-10 lg:-top-4"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={225}
            width={225}
            className="hidden lg:block absolute bottom-60 -left-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
