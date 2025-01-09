"use client";
import asaiaImage from "@/assets/asaia-web.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    // Gradient effect
    <section
      ref={heroRef}
      id="hero"
      className="pt-8 pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_95%)] overflow-x-clip"
    >
      <div className="container">
        {/* Image placed appropriately per screen size */}
        <div className="md:flex items-center">
          {/* Wrap our content */}
          <div className="md:w-[378px] lg:w-[478px]">
            <div className="tag">Product Designer</div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Asaia Palacios
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              From building apps with code to designing websites, I am on a
              journey to design accessible and interactive 3D user experiences
              for smart wearable tech - augmented reality glasses!
            </p>
            <p className="text-xl text-[#010D3E] tracking-tight mt-4">
              Currently in the exploratory phase, I aim to build human-centered
              designs in 3D for extended reality experiences on Meta’s Quest VR
              headset, navigating the Unity game engine, programming in C#, and
              experimenting with AI integration. Be on the lookout for more!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href="#cta">
                <button className="btn btn-primary hover:bg-white hover:text-black hover:border hover:border-black">
                  Get in touch
                </button>
              </Link>
              <Link href="#showcase">
                <button className="btn btn-text no-underline hover:underline">
                  2D Work Showcase
                </button>
              </Link>
            </div>
          </div>
          {/* Wrap our image  */}
          <div className="mt-10 md:mt-0 md:h-[648px] md:flex-1 relative">
            {/* Asaia image in motion - up and down effect */}
            <motion.img
              src={asaiaImage.src}
              alt="Asaia image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:-left-6"
              animate={{
                translateY: [-10, 10],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* Use parallax effect for cylinder and noodle images */}
            <motion.img
              src={cylinderImage.src}
              width={195}
              height={195}
              alt="Cylinder image"
              className="hidden md:block -top-24 -left-28 md:absolute lg:-left-14"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={205}
              alt="Noodle image"
              className="hidden lg:block absolute top-[528px] left-[488px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
