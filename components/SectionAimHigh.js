import React from 'react'

const SectionAimHigh = () => {
    return (
        <section className="bg-Mettalic py-10 md:py-44 lg:py-36 xl:py-0" name="Aim High">
            <img className="relative left-0 w-1/2 rounded-r-3xl md:hidden" src="/images/aimhigh.png" alt="" />
            <div className="flex">
                <div className="md:w-full md:h-full md:max-w-[704px] md:max-h-[810px]">
                    <img className="hidden md:block md:relative md:left-0"
                        src="/images/aimhigh.png" alt="" />
                </div>
                <div className='md:flex md:items-center md:container md:pl-8 lg:pl-16 xl:pl-16'>
                    <div
                        className="flex flex-col pt-10 sm:pt-14 mobile:w-full md:px-4 md:p-0 md:w-full md:max-w-[27.063rem]">
                        <h2
                            className="text-xs text-center text-gray-900 font-extrabold sm:text-xl mobile:text-base mobile:leading-5 md:text-2xl md:text-left md:w-auto lg:text-3xl xl:text-4xl xl:text-left">
                            How to Explore the
                            Best Opportunites for
                            Yourself?</h2>
                        <p
                            className="mx-auto text-[0.5rem] text-gray-700 font-normal text-center pt-2 pb-4 w-3/5 mobile:w-4/5 mobile:text-xs mobile:py-5 sm:w-4/5 sm:p-4 sm:text-sm sm:leading-6 sm:pt-4 sm:pb-10 md:text-base md:w-full md:text-left md:px-0 lg:leading-7 lg:py-6 xl:text-lg xl:py-10">
                            Finding a
                            Job that matches your skills & interest
                            is a lot
                            easier now, You can browse the Jobs & apply whenever
                            & wherever you want.</p>
                        <div
                            className="w-full sm:space-y-4 flex flex-col justify-center items-center md:justify-end md:items-end md:space-y-2 lg:space-y-5">
                            <div
                                className="flex space-x-4 justify-start sm:justify-around mobile:justify-evenly mobile:w-3/5 md:justify-between md:w-full xl:space-x-0">
                                <div className="flex">
                                    <div>
                                        <img className="pr-1 w-5 mobile:w-8 sm:w-10 md:w-12 xl:w-auto" src="/images/jobs.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xs text-gray-700 font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                            5000+
                                        </h2>
                                        <p className="text-[0.5rem] text-gray-700 mobile:text-xs sm:text-sm md:text-base">Total Jobs
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <img className="w-5 pr-1 mobile:w-8 sm:w-10 md:w-12 xl:w-auto" src="/images/employees.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xs text-gray-700 font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">80+
                                        </h2>
                                        <p className="text-[0.5rem] text-gray-700 mobile:text-xs sm:text-sm md:text-base">Total
                                            Exployees</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex pt-2 space-x-1 justify-start sm:justify-around mobile:justify-evenly mobile:space-x-0 mobile:w-3/5 md:w-full md:justify-between lg:space-x-4 xl:space-x-0">
                                <div className="flex">
                                    <div>
                                        <img className="pr-1 w-5 mobile:w-8 sm:w-10 md:w-12 xl:w-auto" src="/images/seekers.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xs text-gray-700 font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                            2000+
                                        </h2>
                                        <p className="text-[0.5rem] text-gray-700 mobile:text-xs sm:text-sm md:text-base">Total
                                            Seekers
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <img className="w-5 pr-1 mobile:w-8 sm:w-10 md:w-12 xl:w-auto" src="/images/years.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xs text-gray-700 font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">5
                                            years
                                        </h2>
                                        <p className="text-[0.5rem] text-gray-700 mobile:text-xs sm:text-sm md:text-base">Total
                                            Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className="absolute hidden w-12 left-[2rem] top-[64.5rem] sm:block sm:w-[4.5rem] sm:absolute sm:top-[95rem] sm:left-[2.5rem] md:w-[5.5rem] md:top-[95rem] lg:top-[97rem] lg:w-[7rem] xl:w-auto xl:top-[109rem]"
                src="/images/aim-left.png" alt="" />
            <img className="hidden absolute w-10 left-[21.1rem] top-[66.9rem] md:block md:w-[3rem] md:top-[90rem] md:left-[26.5rem] lg:w-[4rem] lg:left-[36rem] lg:top-[97rem] xl:w-auto xl:top-[112rem] xl:left-[44rem]"
                src="/images/aim-mid.png" alt="" />
            <img className="hidden absolute w-12 left-[34.5rem] top-[59rem] md:block md:absolute md:w-[5rem] md:top-[78rem] md:left-auto md:right-[5rem] lg:w-[6rem] lg:top-[85rem] lg:left-auto lg:right-[5rem] xl:w-auto xl:left-auto xl:right-[8rem] xl:top-[98rem]"
                src="/images/aim-right.png" alt="" />
        </section>
    )
}

export default SectionAimHigh