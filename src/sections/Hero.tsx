import asaiaImage from "@/assets/asaia-web.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";

export const Hero = () => {
  return (
    // Gradient effect
    <section className="pt-8 pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_95%)] overflow-x-clip">
      <div className="container">
        {/* Image placed appropriately per screen size */}
        <div className="md:flex items-center">
          {/* Wrap our content */}
          <div className="md:w-[378px] lg:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Product Designer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Asaia Palacios
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              From building websites to UX design, I am on a journey to design
              accesssible and interactive 3D experiences for augmented reality
              wearables - smart glasses!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get in touch</button>
              <button className="btn btn-text">Learn more</button>
            </div>
          </div>
          {/* Wrap our image */}
          <div className="mt-10 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={asaiaImage}
              alt="Asaia image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:-left-6"
            />
            <Image
              src={cylinderImage}
              width={150}
              height={150}
              alt="Cylinder image"
              className="hidden md:block -top-8 -left-24 md:absolute lg:-left-10"
            />
            <Image
              src={noodleImage}
              width={150}
              alt="Noodle image"
              className="hidden lg:block absolute top-[578px] left-[488px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
