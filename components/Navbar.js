import React from 'react'
import { BiAlignMiddle } from "react-icons/bi"
import { useContext } from 'react'
import { logContext } from '../pages/api/Context'
import { useState } from 'react'

const Navbar = () => {
    const { link } = useContext(logContext)
    const [isActive, setActive] = useState('false')
    const handleToggle = () => {
        setActive(!isActive)
    }

    
    return (
        <>
            <section name="Navigation-Bar" className="hidden md:block container mx-auto pt-[1.431rem]">
                <nav className="flex justify-around md:justify-between md:px-4 lg:px-0 lg:justify-around xl:justify-evenly items-center">
                    <div>
                        <img className="w-20 md:w-24 lg:w-28 xl:w-auto" src="/images/logo.png" alt="" />
                    </div>
                    <div>
                        <ul
                            className="flex items-center space-x-4 font-semibold text-sm md:text-base md:space-x-6 lg:space-x-8 lg:text-lg xl:space-x-[2.5rem]">
                            <li className="trans hover:text-Greenish"><a href="">Product</a></li>
                            <img className="hidden md:block" src="/images/dots.png" alt="" />
                            <li className="trans hover:text-Greenish"><a href="">Performance</a></li>
                            <img className="hidden md:block" src="/images/dots.png" alt="" />
                            <li className="trans hover:text-Greenish"><a href="">Dashboard</a></li>
                        </ul>
                    </div>
                    <div>
                        <button
                            onClick={link}
                            className="text-sm text-Greenish font-semibold trans hover:text-white md:text-base md:mr-2 lg:mr-5 xl:mr-[2.25rem] lg:text-lg">Login</button>
                        <button
                            className="px-4 py-2 ml-2 text-sm bg-Greenish rounded-lg cursor-pointer trans hover:bg-Mettalic hover:text-Greenish xl:px-[1.831rem] xl:py-[0.625rem] md:font-medium xl:text-lg md:rounded-md md:text-base lg:text-lg lg:rounded-lg lg:px-6 lg:py-2.25">Sign
                            Up</button>
                    </div>
                </nav>
            </section>
            <div className="pt-4 pl-8 mobile:pt-8 mobile:pl-10 md:hidden ">
                <img className="w-16 mobile:w-20" src="/images/logo.png" alt="" />
            </div>
            <div id="menu" onClick={handleToggle}
                className="top-5 right-5 mobile:top-10 mobile:right-8 absolute trans cursor-pointer md:hidden"
                name='menu'><BiAlignMiddle /></div>
            <nav className={isActive ? '.showmenu' : 'hidden'} id='nav' name="Navbar till SM">
                <ul
                    className="md:hidden flex flex-col justify-evenly text-[0.5rem] sm:text-sm text-center font-medium space-y-3 p-3 absolute top-12 right-0 z-10 rounded-l-xl bg-gradient-to-l from-Greenish to-Grayish opacity-90 mobile:p-5 mobile:text-xs mobile:font-semibold mobile:space-y-4 mobile:top-16 mobile:right-0">
                    <li
                        className="hover:text-Greenish mobile:p-2 hover:bg-white bg-Grayish rounded trans border-b-2 drop-shadow-xl">
                        <a href="">Product</a>
                    </li>
                    <li
                        className="hover:text-Greenish mobile:p-2 hover:bg-white bg-Grayish rounded trans border-b-2 drop-shadow-xl">
                        <a href="">Performance</a>
                    </li>
                    <li
                        className="hover:text-Greenish mobile:p-2 hover:bg-white bg-Grayish rounded trans border-b-2 drop-shadow-xl">
                        <a href="">Dashboard</a>
                    </li>
                    <button onClick={link}
                        className="text-center font-medium mobile:text-xs sm:text-sm mobile:font-semibold text-Greenish hover:text-white trans border-b-2 border-Grayish rounded-md">Login</button>
                    <button
                        className="px-1 py-1 rounded font-medium mobile:font-semibold sm:text-sm sm:font-medium text-center mobile:px-12 mobile:py-2 mobile:text-xs mobile:rounded-md bg-Greenish cursor-pointer hover:bg-white hover:text-Greenish trans drop-shadow-xl">Sign
                        Up</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar