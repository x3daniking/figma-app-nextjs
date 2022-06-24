import React from 'react'
import Navbar from './Navbar'
import { logContext } from '../pages/api/Context'
import { useContext } from 'react'


const Header = () => {
    const { state, onChange } =useContext(logContext)

console.log(onChange)
const click=onChange

    return (
        <header className="bg-Grayish text-white">
            <Navbar />
            <section name="Hero-Section"
                className="pt-12 pb-24 mobile:pt-24 mobile:pb-48 sm:pt-12 sm:pb-36 md:pb-40 md:container md:mx-auto xl:m-0 xl:py-[12.5rem] xl:pl-[7rem]">
                <article>
                    <div
                        className="w-full flex flex-col items-center justify-center md:items-start md:max-w-[27.75rem] md:pt-24 md:pl-3 lg:pt-28 lg:pl-10 xl:p-0">
                        <h1
                            className="w-1/2 text-xl text-center font-black leading-5 mobile:text-2xl sm:text-3xl md:text-4xl md:w-full md:text-left md:w-2/3 lg:text-5xl lg:w-full xl:text-6xl">
                            Your Dream Job is waiting for you!</h1>
                        <p
                            className="w-1/2 py-4 text-[0.5rem] text-center mobile:text-xs mobile:py-5 mobile:w-4/5 sm:w-1/2 sm:text-sm sm:py-6 md:text-left md:w-9/12 lg:text-base lg:w-full">
                            Finding a Job that
                            matches your skills & interest is a lot easier
                            now, You
                            can browse the Jobs & apply
                            whenever & wherever you want.</p>
                        <div className="flex w-1/3 items-center justify-center md:w-2/3 md:justify-start">
                            <div className="flex items-center">
                                <p className="text-[0.5rem] pr-1 mobile:text-xs mobile:pr-2 sm:text-sm sm:pr-3 lg:text-base">
                                    Protection</p>
                                <label className="switch">
                                    <input type="checkbox"
                                        checked={state} onChange={onChange}
                                        className="opacity-0 h-0 w-0" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="flex items-center pl-3 mobile:pl-8 xl:pl-10">
                                <p className="text-[0.5rem] pr-1 mobile:text-xs mobile:pr-2 sm:text-sm sm:pr-3 lg:text-base">
                                    Onsite
                                </p>
                                <label className="switch">
                                    <input type="checkbox"
                                        className="opacity-0 h-0 w-0" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <img className="w-5/12 absolute top-[18rem] right-0 xsmobile:top-[16rem] mobile:top-[22rem] md:hidden" src="/images/header.png"
                            alt="" />
                    </div>
                    <img className="hidden md:block md:absolute md:right-0 md:top-[6rem] md:w-6/12 lg:top-28 xl:w-auto"
                        src="/images/header.png" alt="" />
                </article>
            </section>
            <img className="absolute hidden mobile:w-16 mobile:left-[1.3rem] mobile:top-[11rem] sm:block sm:absolute sm:w-20 sm:top-[5rem] sm:left-[10rem] md:w-[5rem] md:top-[11rem] md:left-[1.25rem] lg:w-[6rem] lg:left-[1rem] lg:top-[11rem] xl:left-[6.3rem] xl:top-[13.313rem] xl:w-auto"
                src="/images/header-left.png" alt="" />
            <img className="absolute hidden mobile:w-2.5 mobile:left-[9.7rem] mobile:top-[17.7rem] sm:block sm:absolute sm:w-3 sm:top-[11rem] sm:left-[27.5rem] md:w-[0.9rem] md:left-[6rem] md:top-[19.5rem] lg:w-[1rem] lg:top-[22.5rem] lg:left-[9.5rem] xl:left-[22rem] xl:top-[27rem] xl:w-auto"
                src="/images/header-o.png" alt="" />
            <img className="absolute hidden mobile:h-9 mobile:left-[18rem] mobile:top-[9rem] sm:block sm:h-10 sm:absolute sm:top-[18rem] sm:right-[3rem] sm:left-auto md:h-[3rem] md:left-[21.5rem] md:top-[10rem] lg:left-[29rem] lg:top-[12rem] lg:h-[3.5rem] xl:h-auto xl:left-[32.438rem] xl:top-[11.563rem] 2xl:left-[49rem]"
                src="/images/header-mid.png" alt="" />
            <img className="hidden absolute sm:block sm:h-10 sm:absolute sm:top-[25rem] sm:left-[17rem] md:h-[3rem] md:top-[31rem] md:left-[7rem] lg:top-[35rem] lg:h-[3.5rem] lg:left-[4.5rem] xl:h-auto xl:left-[5rem] xl:top-[40rem]"
                src="/images/header-bottom.png" alt="" />
        </header>
    )
}

export default Header