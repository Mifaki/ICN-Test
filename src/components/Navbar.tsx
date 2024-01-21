"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useEffect, useState } from "react"

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsopen] = useState<boolean>(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    const handleClick = () => {
        setIsopen(!isOpen);
    }


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
                {/* DESTKOP NAVBAR */}
                <>
                    <ul className="hidden xl:flex items-center gap-4 text-nav">
                        {NAV_LINKS.map((link) => {
                            return (
                                <div key={link.key} className="flex items-center gap-[2px] p-2 text-nav hover:text-[#F2B124] hover:underline hover:font-semibold">
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                    {link.children && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                                fill="#43464D"
                                            />
                                        </svg>
                                    )}
                                </div>
                            )
                        })}
                    </ul>
                    <div className="hidden xl:flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.60002 4.79985C8.32699 4.79985 7.10609 5.30556 6.20591 6.20573C5.30574 7.10591 4.80002 8.32681 4.80002 9.59984C4.80002 10.8729 5.30574 12.0938 6.20591 12.994C7.10609 13.8941 8.32699 14.3998 9.60002 14.3998C10.8731 14.3998 12.094 13.8941 12.9941 12.994C13.8943 12.0938 14.4 10.8729 14.4 9.59984C14.4 8.32681 13.8943 7.10591 12.9941 6.20573C12.094 5.30556 10.8731 4.79985 9.60002 4.79985ZM2.40002 9.59984C2.39988 8.46669 2.6672 7.3495 3.18023 6.33913C3.69326 5.32877 4.43753 4.45376 5.3525 3.78528C6.26747 3.11679 7.3273 2.6737 8.4458 2.49204C9.5643 2.31039 10.7099 2.3953 11.7894 2.73987C12.8689 3.08443 13.8518 3.67893 14.6582 4.475C15.4646 5.27107 16.0718 6.24624 16.4303 7.3212C16.7887 8.39616 16.8884 9.54056 16.7212 10.6613C16.554 11.7821 16.1246 12.8475 15.468 13.771L21.2484 19.5514C21.467 19.7778 21.588 20.0809 21.5852 20.3955C21.5825 20.7102 21.4563 21.0111 21.2338 21.2336C21.0113 21.4561 20.7103 21.5823 20.3957 21.5851C20.0811 21.5878 19.7779 21.4668 19.5516 21.2482L13.7724 15.469C12.6953 16.235 11.428 16.6896 10.1096 16.7832C8.79123 16.8767 7.47251 16.6056 6.29798 15.9994C5.12346 15.3932 4.13845 14.4755 3.45089 13.3467C2.76334 12.2179 2.39977 10.9216 2.40002 9.59984Z" fill="#241B1B" />
                        </svg>
                        <Button type="button" color="Yellow" label="Beli Bitcoin Sekarang" size="Base" />
                    </div>
                </>
                {/* MOBILE NAVBAR */}
                <button className="flex xl:hidden" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <line x1="3.75" y1="7.25" x2="20.25" y2="7.25" stroke="#1E386B" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="3.75" y1="15.25" x2="20.25" y2="15.25" stroke="#1E386B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute -top-4 right-0 h-screen w-[80%] max-w-[360px] bg-[#1E386B] px-6 py-4 text-white">
                        <button className="w-full flex justify-end mb-6" onClick={handleClick}>
                            <svg className="h-6 w-6 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <ul className="flex flex-col items-start gap-4 text-nav cursor-pointer">
                            {NAV_LINKS.map((link) => {
                                return (
                                    <div key={link.key} className="flex items-center justify-between w-full p-2 hover:text-[#F2B124] hover:underline hover:font-semibold">
                                        <Link href={link.href}>
                                            {link.label}
                                        </Link>
                                        {link.children && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#ffffff"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar