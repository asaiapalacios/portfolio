import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
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
            This responsive webpage - available for view in desktop, tablet, and
            mobile - was built and customized using code (Hello, former web dev
            here). Thank you, Frontend Tribe, for the online tutorial and the
            starting template.
          </p>
          <Image
            src={starImage}
            alt="Star Image"
            width={300}
            className="hidden md:block absolute md:-left-[275px] lg:-left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="Sprint Image"
            width={300}
            className="hidden md:block absolute md:-right-[290px] lg:-right-[337px] -bottom-[145px]"
          />
        </div>
      </div>
    </section>
  );
};
