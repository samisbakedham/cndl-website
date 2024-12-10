import { useLocation } from "react-router-dom";
import { enablePageScroll } from "scroll-lock"; 
import { openai } from "../assets";

const Header = () => {
    const pathname = useLocation();

    // Ensure page scroll is enabled at all times since no navigation is shown.
    enablePageScroll();

    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={openai} width={190} height={40} alt="Candle" />
                </a>
            </div>
        </div>
    );
};

export default Header;
