"use client";
/* eslint-disable react/no-unescaped-entities */
import productImageTablet from "@/assets/product-image-tablets.png";
// import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Showcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    // Style tag, heading, paragraph, product image, and 3d images
    <section
      id="showcase2"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] pt-24 pb-16 overflow-x-clip"
    >
      <div className="container">
        {/* Should `max-w-auto` be included in div below? */}
        <div className="max-w-[1000px] mx:auto">
          <div className="flex justify-left">
            <div className="tag">Design Showcase #2</div>
          </div>
          <h2 className="text-left text-3xl md:text-[48px] md:leading-[60px] section-title mt-5">
            Client "Help" page redesign
          </h2>
          <p className="text-left section-description mt-5">
            The farmworker outreach desktop app, Vamos, was missing a "Help"
            page for health and legal clients to access the resources that
            benefit and inform their work. In going from the wireframe to the
            final design, I aimed to leverage the team’s existing design
            language. So after studying and researching the best design layout
            that suits the needs of the content - hyperlinks, an embedded
            Airtable bug form, and a contact section - the Vamos "Help"
            wireframe was born (left design).
          </p>
          <p className="text-left section-description mt-5">
            Over the course of Vamos' redesign overhaul, I went in another
            design-layout direction to respect the Design Lead's already
            established design elements while staying true to the resources the
            health and legal groups refer to and need (right design).
          </p>
          <p className="text-left section-description mt-5">
            <strong>Skills</strong>: User Research, User Experience, User
            Interface, Low-Fidelity Wireframes, High-Fidelity Mockups
          </p>
        </div>
        <div className="relative">
          <Image src={productImageTablet} alt="Product Image Tablet" />
          {/* <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={225}
            width={225}
            className="hidden md:block absolute -right-20 -top-10 lg:-top-4"
          /> */}
          {/* <Image
            src={tubeImage}
            alt="Tube Image"
            height={225}
            className="hidden md:block lg:block absolute top-1 -left-40"
          /> */}
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={225}
            width={225}
            className="hidden md:block absolute -right-20 -top-10 lg:top-2"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
