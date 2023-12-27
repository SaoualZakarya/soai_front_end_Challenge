import React from 'react'
import Frame from '../assets/Frame.png'
import timer from '../assets/timer.png'

export const CourseCard = () => {
  return (
    <div className='p-4 h-fit bg-white dark:bg-[#333] dark:text-white w-[310px] rounded-xl border-solid border-2 dark:border-[#737373] border-[#E5E5E5]'>
        <img src={Frame} alt='img' />
        <h2 className='py-2 text-2xl font-bold'>Fontend development with javascript</h2>
        <div className=' text-[#737373] dark:text-[#A3A3A3]'> by Zakarya saoual</div>
        <div className='flex gap-3 items-center py-3'>
            <img src={timer} className='h-5' alt='d' />
            <h1 className='font-bold'>Duration</h1>
            <h1 > 7 weeks </h1>
        </div>
        <div className=' text-[#737373] dark:text-[#A3A3A3]'> $80.00 USD 80% discount </div>
        <div className='bg-[#8B5CF6] text-center my-2 cursor-pointer rounded-xl px-3 py-2 dark:bg-[#DDD6FE] font-bold dark:text-[#4C1D95] text-[white]'>
            BUY now $ 14.00 USD
        </div>
    </div>
  )
}
