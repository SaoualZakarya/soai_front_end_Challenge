import React from 'react'
import logo_white from '../assets/Logo-white.png'
import logo_dark from '../assets/Logo.png'
import insta from '../assets/Instagram.svg'
import figma from '../assets/Figma.svg'
import linkedin from '../assets/LinkedIn.svg'
import twiter from '../assets/Twitter.svg'
import telegram from '../assets/Telegram.svg'

export const Footer = () => {

    const theme = localStorage.getItem("theme")

  return (
    <div className='md:flex justify-between container py-[80px]'>
        <div className='flex md:mb-0 mb-14 items-center flex-col gap-10 '   data-aos="fade-right">
            {
                theme === 'dark' && <img className='w-[83px] h-[32px]' src={logo_white} alt='img' />
            }
            {
                theme === 'light' && <img className='w-[83px] h-[32px]' src={logo_dark} alt='img' />
            }
            <div className='flex gap-5'>
                <a href='' > <img src={insta} alt='alt' /> </a>
                <a href='' > <img src={figma} alt='alt' /> </a>
                <a href='' > <img src={linkedin} alt='alt' /> </a>
                <a href='' > <img src={twiter} alt='alt' /> </a>
                <a href='' > <img src={telegram} alt='alt' /> </a>
            </div>
        </div>
        <div className='flex gap-14 justify-center text-black dark:text-white'   data-aos="fade-left">
            <div className='flex flex-col '>
                <h1 className='text-xl pb-4 font-bold'> Products</h1>
                <span className='pb-4'>Courses</span>
                <span className='pb-4'>Developement</span>
            </div>
            <div className='flex flex-col '>
                <h1 className='text-xl pb-4 font-bold'> Resources</h1>
                <span className='pb-4'>Careers</span>
                <span className='pb-4'>Blog</span>
            </div>
        </div>
    </div>
  )
}
