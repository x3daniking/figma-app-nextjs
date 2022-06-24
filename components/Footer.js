import React from 'react'

const Footer = () => {
    return (
        <footer className="relative bg-Grayish py-6 sm:pt-12 sm:pb-8 md:pt-24 md:pb-12 xl:pt-32 xl:pb-20">
            <div className="flex flex-col justify-center items-center md:container md:mx-auto">
                <h2 className="text-md text-white font-extrabold mobile:text-2xl md:text-3xl xl:text-4xl">Contact Us</h2>
                <p
                    className="text-[0.5rem] text-white text-center leading-4 w-4/5 py-4 mobile:text-xs mobile:w-11/12 mobile:py-8 sm:py-6 mobile:leading-5 sm:text-xs md:text-sm md:py-12 xl:text-lg xl:py-14 md:w-full md:max-w-[66.313rem] lg:px-24 xl:px-0">
                    Finding a job that matches your skills &
                    interest is a lot easier now, You can browse the jobs & apply whenever & wherever you want. Finding a
                    Job that matches your skills & interest is a lot easier now, You can
                    browse the
                    jobs & apply whenever & wherever you want.</p>
                <div className="flex justify-center items-center space-x-2 sm:pt-2 md:pt-0 md:space-x-4">
                    <div
                        className="flex justify-center items-center w-7 h-7 bg-gray-700 rounded-full drop-shadow-mg trans hover:bg-Mettalic mobile:w-9 mobile:h-9 sm:w-11 sm:h-11 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 cursor-pointer">
                        <img className="w-2.5 md:w-5 lg:w-6 xl:w-auto" src="/images/footer-google.png" alt=""/>
                    </div>
                    <div
                        className="flex justify-center items-center w-7 h-7 bg-gray-700 rounded-full drop-shadow-mg trans hover:bg-Mettalic mobile:w-9 mobile:h-9 sm:w-11 sm:h-11 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 cursor-pointer">
                        <img className="w-2 md:w-3 lg:w-3.5 xl:w-auto" src="/images/footer-facebook.png" alt=""/>
                    </div>
                    <div
                        className="flex justify-center items-center w-7 h-7 bg-gray-700 rounded-full drop-shadow-mg trans hover:bg-Mettalic mobile:w-9 mobile:h-9 sm:w-11 sm:h-11 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 cursor-pointer">
                        <img className="w-3 md:w-5 lg:w-6 xl:w-auto" src="/images/footer-instagram.png" alt=""/>
                    </div>
                    <div
                        className="flex justify-center items-center w-7 h-7 bg-gray-700 rounded-full drop-shadow-mg trans hover:bg-Mettalic mobile:w-9 mobile:h-9 sm:w-11 sm:h-11 md:h-12 md:w-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 cursor-pointer">
                        <img className="w-3 md:w-5 lg:w-6 xl:w-auto" src="/images/footer-twitter.png" alt=""/>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-between items-center pt-6 w-4/5 mobile:py-12 sm:pt-8 sm:pb-4 mobile:w-full mobile:justify-evenly sm:mt-6 md:pt-14 xl:justify-around xl:w-full xl:pb-0 xl:pt-20 xl:m-0">
                    <div className="flex items-center justify-between">
                        <img className="w-4 mobile:w-5 sm:w-6 md:w-6 lg:w-7 xl:w-auto" src="/images/mobile.png" alt=""/>
                            <a className="text-[0.5rem] text-white trans hover:text-Greenish mobile:text-xs sm:text-xs md:text-sm lg:text-lg md:ml-4 xl:text-base xl:ml-5"
                                href="">+92-340-7909920</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <img className="w-4 mobile:w-5 sm:w-6 md:w-6 lg:w-7 xl:w-auto" src="/images/location.png" alt=""/>
                            <a className="text-[0.5rem] text-white trans hover:text-Greenish mobile:text-xs sm:text-xs md:text-sm md:ml-4 xl:text-base xl:ml-5"
                                href="">Somewhere in Islamabad,
                                Pakistan</a>
                    </div>
                    <div className="flex items-center justify-between">
                        <img className="w-4 mobile:w-5 sm:w-6 md:w-6 lg:w-7 xl:w-auto" src="/images/email.png" alt=""/>
                            <a className="text-[0.5rem] text-white trans hover:text-Greenish mobile:text-xs sm:text-xs md:text-sm md:ml-4 xl:text-base xl:ml-5"
                                href="">Someone@here.com</a>
                    </div>
                </div>
            </div>
            <img className="hidden sm:block sm:absolute sm:top-[1rem] sm:left-auto sm:right-8 sm:w-10 md:w-[3rem] md:right-[3rem] md:top-[2rem] lg:top-[2rem] lg:w-[4rem] lg:right-[3rem] xl:w-auto xl:top-[2rem] xl:right-[3rem]"
                src="/images/footer.png" alt=""/>
        </footer>
    )
}

export default Footer