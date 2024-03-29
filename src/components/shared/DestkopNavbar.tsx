"use client"

import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'

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

type DestkopNavbarProps = {
    links: NavLinkProps[]
}

const DestkopNavbar = ({
    links
}: DestkopNavbarProps) => {
    const [isOpen, setIsopen] = useState<boolean>(false);
    const [isDropdown, setIsDropdown] = useState<string>('');

    const handleDropdown = (linkKey: string) => {
        setIsDropdown(isDropdown === linkKey ? "" : linkKey);
    };

    
    return (
        <>
            <ul className="hidden xl:flex items-center gap-4 text-nav">
                {links.map((link, index) => {
                    return (

                        <div
                            key={link.key} className="relative flex items-center gap-[2px] p-2 text-nav cursor-pointer"
                            onClick={() => handleDropdown(link.key)}
                        >
                            {link.children ? (
                                <>
                                    <p className="hover:text-[#F2B124] hover:underline hover:font-semibold">
                                        {link.label}
                                    </p>
                                    {link.children && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            className={`${isDropdown === link.key && link.children ? 'rotate-180' : ''} hover:text-[#F2B124] hover:underline hover:font-semibold ease-in-out duration-300`}
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                                                fill="#43464D"
                                            />
                                        </svg>
                                    )}
                                    {isDropdown === link.key && link.children && (
                                        <div
                                            className="bg-[#1E386B] p-6 text-white absolute top-10 w-fit left-1/2 transform -translate-x-1/2 rounded-md"
                                        >
                                            <ul className="flex flex-col gap-4 text-center">
                                                {link.children.map((child) => (
                                                    <li key={child.key}>
                                                        <Link className="block w-max hover:text-[#ecde65] hover:underline" href={child.href}>{child.label}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link className="hover:text-[#F2B124] hover:underline hover:font-semibold" href={link.href}>
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    )
                })}
            </ul>
            <div className="hidden xl:flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-pointer">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.60002 4.79985C8.32699 4.79985 7.10609 5.30556 6.20591 6.20573C5.30574 7.10591 4.80002 8.32681 4.80002 9.59984C4.80002 10.8729 5.30574 12.0938 6.20591 12.994C7.10609 13.8941 8.32699 14.3998 9.60002 14.3998C10.8731 14.3998 12.094 13.8941 12.9941 12.994C13.8943 12.0938 14.4 10.8729 14.4 9.59984C14.4 8.32681 13.8943 7.10591 12.9941 6.20573C12.094 5.30556 10.8731 4.79985 9.60002 4.79985ZM2.40002 9.59984C2.39988 8.46669 2.6672 7.3495 3.18023 6.33913C3.69326 5.32877 4.43753 4.45376 5.3525 3.78528C6.26747 3.11679 7.3273 2.6737 8.4458 2.49204C9.5643 2.31039 10.7099 2.3953 11.7894 2.73987C12.8689 3.08443 13.8518 3.67893 14.6582 4.475C15.4646 5.27107 16.0718 6.24624 16.4303 7.3212C16.7887 8.39616 16.8884 9.54056 16.7212 10.6613C16.554 11.7821 16.1246 12.8475 15.468 13.771L21.2484 19.5514C21.467 19.7778 21.588 20.0809 21.5852 20.3955C21.5825 20.7102 21.4563 21.0111 21.2338 21.2336C21.0113 21.4561 20.7103 21.5823 20.3957 21.5851C20.0811 21.5878 19.7779 21.4668 19.5516 21.2482L13.7724 15.469C12.6953 16.235 11.428 16.6896 10.1096 16.7832C8.79123 16.8767 7.47251 16.6056 6.29798 15.9994C5.12346 15.3932 4.13845 14.4755 3.45089 13.3467C2.76334 12.2179 2.39977 10.9216 2.40002 9.59984Z" fill="#241B1B" />
                </svg>
                <Button type="button" color="Yellow" label="Beli Bitcoin Sekarang" size="Base" />
            </div>
        </>
    )
}

export default DestkopNavbar