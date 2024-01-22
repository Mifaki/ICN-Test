import NewsAside from '../News/NewsAside'
import NewsMain from '../News/NewsMain'


const NewsBody = () => {
  return (
    <section className='main-container flex items-start mt-10 gap-8'>
        <div className='w-full md:w-[70%] xl:w-[75%] h-fit'>
          <NewsMain />
        </div>
        <div className='hidden md:flex sticky top-[102px] w-[30%] xl:w-[25%] h-fit'>
          <NewsAside />
        </div>
    </section>
  )
}

export default NewsBody