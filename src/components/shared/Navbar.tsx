"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import DestkopNavbar from "./DestkopNavbar"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if (window.scrollY > 0) setIsScrolled(true);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${isScrolled ? "scrolled-shadow" : ""} fixed top-0 left-0 w-full z-[9999999] bg-white`}>
            <div className="main-container my-4 flex justify-between items-center relative">
                <Link href="/">
                    <Image
                        src='/logo-text.svg'
                        alt="Coinvestasi Logo"
                        width={112}
                        height={48}
                        className="md:w-[182px] md:h-[42px]"
                        priority={true}
                    />
                </Link>
                <DestkopNavbar links={NAV_LINKS} />
                <MobileNavbar links={NAV_LINKS} />
            </div>
        </nav>
    )
}

export default Navbar