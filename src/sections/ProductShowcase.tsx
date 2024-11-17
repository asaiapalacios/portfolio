/* eslint-disable react/no-unescaped-entities */
import productImage from "@/assets/product-image-screen.png";
import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    // Style tag, heading, paragraph, product image, and 3d images
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] pt-24 pb-14 overflow-x-clip">
      <div className="container">
        {/* Should `max-w-auto` be included in div below? */}
        <div className="max-w-[1000px] mx:auto">
          <div className="flex justify-left">
            <div className="tag">Design Showcase</div>
          </div>
          <h2 className="text-left text-3xl md:text-[48px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Non-profit client web and mobile redesign
          </h2>
          <p className="text-left text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Poder NC's former website was due for a revamp. A team of 3
            developers and I aimed to bring to light the organization's true
            vibrant nature and values behind the nonprofit's work of educating
            and empowering North Carolinians on public issues affecting the
            Latinx community.
          </p>
          <p className="text-left text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            From a black somber website to a responsive one that brings at the
            forefront Poder's colors, flair, and energy, the redesign sought to
            increase website engagement and community.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="" />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={185}
            width={185}
            className="hidden md:block absolute -right-16 -top-4"
          />
          {/* Most likely not include donut image; Testing for now */}
          {/* <Image
            src={tubeImage}
            alt="Tube Image"
            height={200}
            className="hidden lg:block absolute bottom-56 -left-24"
          /> */}
        </div>
      </div>
    </section>
  );
};
