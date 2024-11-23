import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialGitHub from "@/assets/social-github-white.svg";
import SocialX from "@/assets/social-x.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-[#BCBCBC] text-sm py-10 text-center"
    >
      <div className="container">
        {/* Blurring logo effect */}
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="Saas Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#hero">About</Link>
          <Link href="#showcase">Showcase</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialLinkedIn />
          <SocialGitHub width={24} height={24} />
          <SocialX />
        </div>
        <p className="mt-6">&copy; 2024. All rights reserved.</p>
        <p>
          Thank you, Frontend Tribe, for the online tutorial and the starting
          template.
        </p>
      </div>
    </footer>
  );
};
