import Image from "next/image"

type NewsCardProps = {
    title: string
    author: string
    thumbnailUrl: string
}

const NewsCard = ({
    title,
    author,
    thumbnailUrl
}: NewsCardProps) => {
  return (
    <div className="flex items-center w-full border-solid border-[1px] border-[#F2F5F9] rounded-sm">
        <div className="w-full flex flex-col gap-2 p-6">
            <p className="destkop-md font-semibold text-[#2B4A86]">{title}</p>
            <p className="destkop-caption font-semibold text-[#9CADD3]">{author}</p>
        </div>
        <Image src={thumbnailUrl} alt={title} width={172} height={96} />
    </div>
  )
}

export default NewsCard