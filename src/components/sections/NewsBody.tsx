import React from 'react'
import NewsAside from '../NewsAside'
import NewsMain from '../NewsMain'


const NewsBody = () => {
  return (
    <section className='main-container flex items-start mt-10 gap-8'>
        <div className='w-[70%] xl:w-[75%] h-fit'>
          <NewsMain />
        </div>
        <div className='sticky top-0 w-[30%] xl:w-[25%] h-fit'>
          <NewsAside />
        </div>
    </section>
  )
}

export default NewsBody