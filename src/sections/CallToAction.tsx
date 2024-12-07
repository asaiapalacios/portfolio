"use client";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      id="cta"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <div className="flex justify-center">
            <div className="tag">Get in touch</div>
          </div>
          {/* Include global styles when possible */}
          <h2 className="text-center text-2xl md:text-3xl section-title mt-5">
            asaiavpalacios@gmail.com
          </h2>
          <p className="text-center section-description mt-5">
            This responsive webpage - available for view in desktop and tablet -
            was built and customized using code.
          </p>
          <p className="text-center section-description mt-5">
            (Hello, former web developer here)
          </p>
          {/* Add parallex effect to star and spring */}
          <motion.img
            src={starImage.src}
            alt="Star Image"
            width={250}
            className="hidden md:block absolute md:-left-[275px] lg:-left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt="Sprint Image"
            width={300}
            className="hidden md:block absolute md:-right-[290px] lg:-right-[405px] -bottom-[145px]"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
