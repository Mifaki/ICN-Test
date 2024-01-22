"use client"

import React, { useEffect, useState } from 'react'
import Button from '../shared/Button'
import { getRelatedNews } from '@/app/action'
import { DateFormat } from '@/util/Dateformat'
import { NEWS_TOPICS } from '@/constants'

const NewsAside = () => {

  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const result = await getRelatedNews();
      setData(result);
    } catch (error) {
      console.error(error); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <aside className='relative flex items-start xl:gap-6 mb-[60px]'>
      <div className='absolute top-0 bottom-0 w-[1px] bg-[#F2F5F9]' />
      <div className='ml-4'>
        <div className='w-full h-fit p-4 xl:p-6 bg-[#F2F5F9] rounded-lg'>
          <h4 className='destkop-md font-bold mb-1'>This is A Heading Example Of the Leads Sticky</h4>
          <p className='destkop-sm text-[#A6B0C0] mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          <div className='mx-auto w-fit'>
            <Button type='button' size='Base' color='Blue' label='Lorem ipsum dolor' />
          </div>
        </div>
        <div>
          <h2 className='mobile-h2 mb-4 mt-6'>Related</h2>
          <div className='flex flex-col gap-8'>
            {data && data.map((newsItem: any) => {
              return (
                <div key={newsItem.id}>
                  <div className='flex items-center gap-1 flex-wrap mb-2'>
                    {newsItem.tagNames.map((tag: string, index: number) => {
                      return (
                        <p key={index} className='destkop-caption w-fit px-2 py-1 text-[#43464D] bg-[#F8F8F8] rounded-full'>{tag}</p>
                      )
                    })}
                  </div>
                  <a href={newsItem.link} target='_blank' className='font-poppins text-sm font-semibold leading-5 my-2 cursor-pointer'>{newsItem.title.rendered}</a>
                  <p className='destkop-caption font-semibold text-[#A6B0C0] mb-4'>{newsItem.authorName} · {DateFormat(newsItem.modified_gmt)}</p>
                  <div className='h-[1px] w-full bg-[#F2F5F9]' />
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <h2 className='mobile-h2 mb-4 mt-6'>Topik lainnya</h2>
          <div className='flex gap-2 flex-wrap'>
            {NEWS_TOPICS.map((topic: string) => {
              return (
                <span key={topic} className='p-2 rounded-full destkop-caption'>{topic}</span>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default NewsAside