import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    // Nav blur effect
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">¡Bienvenidos!</p>
        <div className="inline-flex gap-1 items-center">
          <p>Welcome to my page!</p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="#hero">About</Link>
              <Link href="#showcase">Showcase</Link>
              {/* <Link href="#"><a>Goals</a></Link> */}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get in touch
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
