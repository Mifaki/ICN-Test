import BreadCrumb from "@/components/shared/BreadCrumb";
import NewsAuhor from "@/components/News/NewsAuhor";
import NewsTitle from "@/components/News/NewsTitle";
import ReadTime from "@/components/News/ReadTime";
import Header from "@/components/sections/Header";
import NewsBody from "@/components/sections/NewsBody";
import { CRUM_SECTIONS, NEWS_DATA } from "@/constants";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] md:bg-white mt-[58px] md:mt-[124px]">
      {/* Destkop Layout */}
      <div className="hidden md:block">
        <div className="main-container flex items-center justify-between mb-9">
          <BreadCrumb sections={CRUM_SECTIONS} />
          <ReadTime readTime={NEWS_DATA.readTime} />
        </div>
        <Header
          category={NEWS_DATA.category}
          title={NEWS_DATA.title}
          thumbnail={NEWS_DATA.thumbnailUrl}
          author={NEWS_DATA.author}
          date={NEWS_DATA.postedAt}
          socials={NEWS_DATA.socials}
        />
        <NewsBody />
      </div>
      {/* Mobile Layout */}
      <div className="block md:hidden relative">
        <img src={NEWS_DATA.thumbnailUrl} alt={NEWS_DATA.title} className="w-full max-h-[356px] object-cover" />
        <div className="absolute top-[80%] flex flex-col gap-6 max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-40px)] left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col gap-6 py-6 px-4 bg-white rounded-md">
            <div className="flex flex-col gap-3">
              <BreadCrumb sections={CRUM_SECTIONS} />
              <ReadTime readTime={NEWS_DATA.readTime} />
              <NewsTitle
                category={NEWS_DATA.category}
                title={NEWS_DATA.title}
                author={NEWS_DATA.author}
                date={NEWS_DATA.postedAt}
                socials={NEWS_DATA.socials}
              />
            </div>
            <div className="w-full h-[1px] bg-[#F2F5F9]" />
            <NewsBody />
          </div>
          <NewsAuhor
            name={NEWS_DATA.author}
            bio={NEWS_DATA.authorBio}
            avatarUrl={NEWS_DATA.auhorAvatar}
            linkedinUrl={NEWS_DATA.authorSocials.linkedinUrl}
            twitterUrl={NEWS_DATA.authorSocials.twitterUrl}
            emailUrl={NEWS_DATA.authorSocials.emailUrl}
          />
        </div>
      </div>
    </main>
  )
}
