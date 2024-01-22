"use client"
import Link from 'next/link';
import React, { useState } from 'react'

type NavLinkProps = {
    href: string,
    key: string,
    label: string
    children?: {
        href: string,
        key: string,
        label: string
    }[]
}

type MobileNavbarProps = {
    links: NavLinkProps[]
}

const MobileNavbar = ({
    links
}: MobileNavbarProps) => {
    const [isOpen, setIsopen] = useState<boolean>(false);
    const [isDropdown, setIsDropdown] = useState<string>('');
    
    const handleClick = () => {
        setIsopen(!isOpen);
    }

    const handleDropdown = (linkKey: string) => {
        setIsDropdown(isDropdown === linkKey ? "" : linkKey);
    };
    return (
        <>
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
                    <ul className="flex flex-col items-start gap-4 text-nav cursor-pointer ease-in-out duration-300">
                        {links.map((link) => (
                            <div key={link.key} className="flex flex-col w-full">
                                <div
                                    className="flex items-center justify-between w-full p-2 hover:text-[#F2B124] hover:underline hover:font-semibold"
                                    onClick={() => handleDropdown(link.key)}
                                >
                                    {link.children ? (
                                        <>
                                            <p className="hover:text-[#F2B124] hover:underline hover:font-semibold">
                                                {link.label}
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="#ffffff"
                                                className={`${isDropdown === link.key && link.children ? 'rotate-180' : ''} hover:text-[#F2B124] hover:underline hover:font-semibold ease-in-out duration-300`}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                                />
                                            </svg>
                                        </>

                                    ) : (
                                        <Link className="hover:text-[#F2B124] hover:underline hover:font-semibold" href={link.href}>
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                                {isDropdown === link.key && link.children && (
                                    <ul className="flex flex-col gap-4 pl-6 text-center">
                                        {link.children.map((child) => (
                                            <li key={child.key}>
                                                <Link className="block w-max hover:text-[#ecde65] hover:underline" href={child.href}>
                                                    {child.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default MobileNavbar