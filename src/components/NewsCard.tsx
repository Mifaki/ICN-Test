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
    <div className="flex flex-col-reverse sm:flex-row items-center w-full border-solid border-[2px] border-[#e8f1fc] rounded-sm">
        <div className="w-full flex flex-col gap-2 p-4 md:p-6">
            <p className="destkop-md font-semibold text-[#2B4A86]">{title}</p>
            <p className="destkop-caption font-semibold text-[#9CADD3]">{author}</p>
        </div>
        <img className="w-full sm:w-auto max-w-auto sm:max-w-[172px] sm:max h-auto rounded-t-sm md:rounded-r-sm" src={thumbnailUrl} alt={title} />
    </div>
  )
}

export default NewsCard