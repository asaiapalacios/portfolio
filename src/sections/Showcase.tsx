// export const Showcase = () => {
//   return "hola bola";
// };

/* eslint-disable react/no-unescaped-entities */
import productImageLaptop from "@/assets/product-image-laptop.png";
// import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const Showcase = () => {
  return (
    // Style tag, heading, paragraph, product image, and 3d images
    <section
      id="showcase2"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pt-24 pb-14 overflow-x-clip"
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
            Vamos, the farmworker outreach desktop app, was missing a "Help"
            page for health and legal clients to access the resources that
            benefit and inform their work. After studying and researching the
            best design layout that suits the needs of the content - hyperlinks,
            an embedded Airtable bug form, and a contact section - the Vamos
            "Help" page was born (left design).
          </p>
          <p className="text-left section-description mt-5">
            Over the course of Vamos' redesign overhaul, I went in another
            design-layout direction to respect the Design Lead's already
            established design elements while staying true to the resources the
            health and legal groups refer to and need (right design).
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImageLaptop}
            alt="Product Image Laptop"
            className=""
          />
          {/* <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={225}
            width={225}
            className="hidden md:block absolute -right-20 -top-10 lg:-top-4"
          /> */}
          {/* Most likely not include donut image; Testing for now */}
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={225}
            className="hidden md:block lg:block absolute top-6 -left-20"
          />
        </div>
      </div>
    </section>
  );
};
