"use client"

import { useState } from "react"
import Button from "./Button"
import Notification from "./Notification"

type NewsTitleProps = {
    category: string,
    title: string,
    author: string,
    date: string,
    socials: {
        key: string
        icon: string
        label: string
        socialUrl?: string
    }[]
}

const NewsTitle = ({
    category,
    title,
    author,
    date,
    socials
}: NewsTitleProps) => {

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
        <>
            <div className="w-full">
                <p className="hidden sm:flex font-inter text-base leading-6 text-[#2792DF]">{category}</p>
                <h1 className="text-2xl md:text-[32px] leading-8 md:leading-[44px] font-bold  my-2">{title}</h1>
                <p className="mobile-md md:destkop-sm text-[#A6B0C0] mb-4">{author} · {date}</p>
                <div className="flex gap-2">
                    {socials.map((social) => {
                        return (
                            <span key={social.key}>
                                <Button
                                    type='button'
                                    label={social.label}
                                    color='Outline'
                                    size='Small'
                                    icon={social.icon}
                                    onClick={() => handleButtonClick(social.label, social.socialUrl)}
                                />
                            </span>
                        )
                    })}
                </div>
            </div>
            {notification && (
                <Notification message={notification} onClose={() => setNotification(null)} />
            )}
        </>

    )
}

export default NewsTitle
