import React, { useState,useEffect } from 'react'
import Logo from '../assets/Logo.png'
import Logo_white from '../assets/Logo-white.png'
import sun from '../assets/sun.png'
import black from '../assets/black.png'
import white from '../assets/white.png'
import sun_white from '../assets/sun_white.png'

export const NavBar = () => {

    // Dark mode setup
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        const newMode = !darkMode;
        localStorage.setItem('theme', newMode ? 'dark' : 'light')
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
        setDarkMode(true);
        }
    }, [])

    const [collapse,setCollapse] = useState(true)

  return (
    <div  data-aos="fade-down">
        <div className='container relative z-10 flex items-center justify-between py-8'>
            {
                darkMode && <img src={Logo_white} alt="logo"/>
            }
            {
                !darkMode && <img src={Logo} alt="logo"/>
            }
            <div className='hidden md:flex gap-4 items-center'>
                <nav className="flex gap-10  ">
                    <a href="#home" className="home-link">Home </a>
                    <a href="#aboutUs" className="home-link">About Us</a>
                    <a href="#courses" className="home-link">courses</a>
                    <a href="#faq" className="home-link">FAQ </a>
                </nav>
                <div className='bg-[#8B5CF6] cursor-pointer rounded-xl px-3 py-2 dark:bg-[#DDD6FE] font-bold dark:text-[#4C1D95] text-[white]'>
                    Contact Us
                </div>
                <button onClick={toggleTheme} className='border-2 p-[6px] border-solid border-[#E5E5E5] rounded-xl'>
                    {
                        !darkMode && <img src={sun} alt="logo"/>
                    }
                    {
                        darkMode && <img src={sun_white} alt="logo"/>
                    }
                </button>
            </div>

            <div className='md:hidden relative '>
                <button onClick={()=>{setCollapse(!collapse) }}>
                    {
                        darkMode && <img src={white} alt="logo"/>
                    }
                    {
                        !darkMode && <img src={black} alt="logo"/>
                    }
                    
                </button>
                {
                    !collapse && (
                        <div className={`absolute w-[280px] -right-10 top-10 dark:bg-[#333]  bg-white z-20 h-fil rounded-xl p-8`}>
                            <div className='flex flex-col gap-4 items-center'>
                                <nav className="flex flex-col gap-10  ">
                                    <a href="#home" className="home-link">Home </a>
                                    <a href="#aboutUs" className="home-link">About Us</a>
                                    <a href="#courses" className="home-link">courses</a>
                                    <a href="#faq" className="home-link">FAQ </a>
                                </nav>
                                <div className='bg-[#8B5CF6] cursor-pointer rounded-xl px-3 py-2 dark:bg-[#DDD6FE]  text-[white] dark:text-[#4C1D95]'>
                                    Contact Us
                                </div>
                                <button onClick={toggleTheme} className='border-2 p-[6px] border-solid border-[#E5E5E5] rounded-xl'>
                                    {
                                        !darkMode && <img src={sun} alt="logo"/>
                                    }
                                    {
                                        darkMode && <img src={sun_white} alt="logo"/>
                                    }
                                </button>
                            </div>
                        </div>
                )} 
                
            </div>
        </div>
        
        
    </div>)
}
