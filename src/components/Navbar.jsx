import { useLocation } from "react-router-dom";
import { enablePageScroll } from "scroll-lock"; // No need for disablePageScroll since we removed nav
import { background, openai } from "../assets";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    // Since we removed the navigation, we don't need toggle logic.
    // Just ensure page scroll is enabled.
    enablePageScroll();

    return (
        <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={openai} width={190} height={40} alt="Candle" />
                </a>

                {/* Removed nav and menu button */}

                <a href="#signup" className="button hidden mr-8 text-white/50 transition-colors hover:text-white lg:block">
                    New account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>
            </div>
        </div>
    );
};

export default Header;
