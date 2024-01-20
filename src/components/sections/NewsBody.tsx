import React from 'react'
import NewsAside from '../NewsAside'


const NewsBody = () => {
  return (
    <section className='main-container flex items-start mt-10 gap-8'>
        <div className='w-[75%] xl:w-[80%] h-[500vh]  bg-gradient-to-b from-[#F2F5F9] via-[#F2F1FD] to-[#FFF1FB]' />
        <div className='sticky top-0 w-[25%] xl:w-[20%] h-fit'>
          <NewsAside />
        </div>
    </section>
  )
}

export default NewsBody