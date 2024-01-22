import NewsTitle from "../News/NewsTitle"

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
    return (
        <section className="flex items-center relative">
            <div className="w-[60%] h-[492px] flex flex-col justify-center items-center bg-gradient-to-r from-[#F2F5F9] via-[#F2F1FD] to-[#FFF1FB] shadow-sm">
                <div className="max-w-[318px]">
                    <NewsTitle category={category} title={title} author={author} date={date} socials={socials} />
                </div>
            </div>
            <img className="absolute right-[5%] w-[40%]" src={thumbnail} alt={title} width={110} height={48} />
        </section>
    )
}

export default Header