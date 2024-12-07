"use client";
import htmlLogo from "@/assets/logo-html.png";
import cssLogo from "@/assets/logo-css-canva.png";
import javascriptLogo from "@/assets/logo-javascript.png";
import uiLogo from "@/assets/logo-ui.png";
import uxLogo from "@/assets/logo-ux.png";
import figmaLogo from "@/assets/logo-figma.png";
import reactLogo from "@/assets/logo-react.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-white">
      <div className="container">
        {/* Gradient grey effect: I removed it (after overflow-hidden) -> [mask-image:linear-gradient(to_right,transparent,black,transparent)] */}
        <div className="flex overflow-hidden">
          {/* Gap between skills */}
          <motion.div
            className="flex gap-20 flex-none pr-20"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={htmlLogo}
              alt="HTML Logo"
              className="logo-ticker-image"
            />
            <Image src={cssLogo} alt="CSS Logo" className="logo-ticker-image" />
            <Image
              src={javascriptLogo}
              alt="JavaScript Logo"
              className="logo-ticker-image"
            />
            <Image src={uxLogo} alt="UX Logo" className="logo-ticker-image" />
            <Image src={uiLogo} alt="UI Logo" className="logo-ticker-image" />
            <Image
              src={figmaLogo}
              alt="Figma Logo"
              className="logo-ticker-image"
            />
            <Image
              src={reactLogo}
              alt="React Logo"
              className="logo-ticker-image"
            />

            {/* Second set of skills for animation */}
            <Image
              src={htmlLogo}
              alt="HTML Logo"
              className="logo-ticker-image"
            />
            <Image src={cssLogo} alt="CSS Logo" className="logo-ticker-image" />
            <Image
              src={javascriptLogo}
              alt="JavaScript Logo"
              className="logo-ticker-image"
            />
            <Image src={uxLogo} alt="UX Logo" className="logo-ticker-image" />
            <Image src={uiLogo} alt="UI Logo" className="logo-ticker-image" />
            <Image
              src={figmaLogo}
              alt="Figma Logo"
              className="logo-ticker-image"
            />
            <Image
              src={reactLogo}
              alt="React Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
