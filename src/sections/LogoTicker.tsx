import htmlLogo from "@/assets/logo-html-canva.png";
import cssLogo from "@/assets/logo-css-canva.png";
import javascriptLogo from "@/assets/logo-javascript-canva.png";
import uiLogo from "@/assets/logo-ui-canva.png";
import uxLogo from "@/assets/logo-ux-canva.png";
import reactLogo from "@/assets/logo-react-canva.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="bg-white">
      <div className="container">
        {/* Gradient ticker effect */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {/* Gap between skills */}
          <div className="flex gap-20 flex-none">
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
              src={reactLogo}
              alt="React Logo"
              className="logo-ticker-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
