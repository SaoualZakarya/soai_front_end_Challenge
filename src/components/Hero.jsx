import React from 'react'

export const Hero = () => {
  return (
    <div className='flex relative flex-col gap-7 justify-center items-center py-[70px]'>
        <div className='md:text-4xl dark:text-[#F5F5F5] text-[#262626] text-center text-3xl font-bold w-[350px] md:w-[500px]'>
            When the join of learn meets the power of community
        </div>
        <div className='md:text-2xl text-xl w-[400px] md:w-[550px] text-[#737373] dark:text-[#A3A3A3]'>
            Dive deep in immersive , interactive small groups . Expand horizons,
            engage in discussion, and elevate your learning journey with us .
        </div>
        <div className='bg-[#8B5CF6] font-bold cursor-pointer rounded-xl px-3 py-2 dark:bg-[#DDD6FE] dark:text-[#4C1D95] text-[white]'>
            Start your training
        </div>
        <p className='dark:text-[#DDD6FE] text-[#8B5CF6]'>Watch video</p>
    </div>
  )
}
