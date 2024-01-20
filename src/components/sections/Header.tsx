"use client"

import Image from "next/image"
import Button from "../Button"
import Notification from "../Notification"
import { useState } from "react"

type Props = {
    category: string,
    title: string,
    thumbnail: string,
    author: string,
    date: string,
    socials: {
        key: string
        icon: string
        label: string
        socialUrl?: string
    }[]
}

const Header = ({
    category,
    title,
    thumbnail,
    author,
    date,
    socials
}: Props) => {

    const [notification, setNotification] = useState<string | null>(null);


    const handleButtonClick = (label: string, socialUrl?: string) => {
        if (socialUrl) {
            window.open(socialUrl, '_blank');
        } else if (label === 'Copy') {
            navigator.clipboard.writeText(window.location.href)
            setNotification('Copied to clipboard!');
        }
    };

    return (
        <section className="flex items-center relative">
            <div className="w-[60%] h-[492px] flex flex-col justify-center items-center bg-gradient-to-r from-[#F2F5F9] via-[#F2F1FD] to-[#FFF1FB] shadow-sm">
                <div className="max-w-[318px]">
                    <p className="font-inter text-base leading-6 text-[#2792DF]">{category}</p>
                    <h1 className="text-[32px] font-bold leading-[44px] my-2">{title}</h1>
                    <p className="destkop-sm text-[#A6B0C0] mb-4">{author} · {date}</p>
                    <div className="flex gap-2">
                        {socials.map((social) => {
                            return (
                                <Button
                                    type='button'
                                    label={social.label}
                                    color='Outline'
                                    size='Small'
                                    icon={social.icon}
                                    onClick={() => handleButtonClick(social.label, social.socialUrl)}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Image className="absolute right-[5%] w-[40%]" src={thumbnail} alt={title} width={110} height={48} />
            {notification && (
                <Notification message={notification} onClose={() => setNotification(null)} />
            )}
        </section>
    )
}

export default Header