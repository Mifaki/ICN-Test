import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

type NewsAuthorProps = {
    name: string
    avatarUrl: string
    bio: string
    linkedinUrl: string
    twitterUrl: string
    emailUrl: string
}

const NewsAuhor = ({
    name,
    avatarUrl,
    bio,
    linkedinUrl,
    twitterUrl,
    emailUrl
}: NewsAuthorProps) => {
    return (
        <div className="flex items-start gap-4 p-14 rounded #F2F5F9">
            <Image className="rounded-full aspect-square h-auto" src={avatarUrl} alt={name} width={64} height={64} />
            <div className="flex flex-col gap-2">
                <p className="destkop-md font-medium italic text-[#A6B0C0]"><span className="not-italic text-[#43464D] font-bold">Tentang Penulis —{name}</span>{bio}</p>
                <div className="flex items-center gap-3">
                    <Link href={linkedinUrl}>
                        <Image src='/linkedin-icon.png' alt="Linkedin" width={24} height={24}/>
                    </Link>
                    <Link href={twitterUrl}>
                        <Image src='/twitter-white-icon.png' alt="Twitter" width={24} height={24}/>
                    </Link>
                    <Link href={emailUrl}>
                        <Image src='/email-icon.png' alt="Email" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsAuhor