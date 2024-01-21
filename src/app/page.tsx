import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/sections/Header";
import NewsBody from "@/components/sections/NewsBody";
import { CRUM_SECTIONS, NEWS_DATA } from "@/constants";


export default function Home() {
  return (
    <main className="min-h-screen mt-[124px]">
      <div className="main-container mb-9">
        <BreadCrumb sections={CRUM_SECTIONS} />
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
    </main>
  )
}
