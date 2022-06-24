import React from 'react'

const RectangleBarSmallMobiles = () => {
    
    return (
        <section name="Reactangle Bar till SM">
            <nav
                className="w-1/3 h-1/3 pt-6 absolute left-0 top-[17rem] mobile:top-[28rem] sm:top-[23rem] mobile:pt-16 mobile:p-2 sm:h-2/3 flex items-center justify-center overflow-scroll bg-gradient-to-t from-Greenish to-Grayish rounded-r-lg md:hidden">
                <ul className="p-3 space-y-4 flex flex-col items-center justify-evenly mobile:p-4 text-white mobile:space-y-5">
                    <img className="hidden grayscale" src="/images/pin.png" alt=""/>
                        <li className="hidden text-[0.5rem] mobile:text-sm">Location</li>
                        <li className="border-l-2 rounded border-Greenish"><input
                            className="focus:outline-none bg-transparent text-[0.5rem] mobile:text-[10px] mobile:w-36" type="text"
                            placeholder="Enter Your Location Here!"/></li>
                        <li className="text-[0.5rem] mobile:text-[10px] sm:text-sm border-b-2 border-Greenish rounded">
                            <select className="sm:font-semibold focus:outline-none bg-transparent hover:cursor-pointer"
                                name="Category" id="Category">
                                <option className="bg-Grayish" value="Category1">Category</option>
                                <option className="bg-Grayish" value="Category2">Category1</option>
                                <option className="bg-Grayish" value="Category3">Category2</option>
                            </select>
                        </li>
                        <li className="text-[0.5rem] mobile:text-[10px] sm:text-sm border-b-2 border-Greenish rounded">
                            <select className="sm:font-semibold focus:outline-none bg-transparent hover:cursor-pointer"
                                name="Category" id="Category">
                                <option className="bg-Grayish" value="Category1">Select</option>
                                <option className="bg-Grayish" value="Category2">Select1</option>
                                <option className="bg-Grayish" value="Category3">Select2</option>
                            </select>
                        </li>
                        <button className="px-3 py-1 text-[0.5rem] mobile:text-xs mobile:px-6 mobile:py-2 mobile:rounded-md sm:text-sm rounded trans bg-Greenish text-white xl:text-lg font-medium
                    hover:bg-Grayish">
                            Search</button>
                </ul>
            </nav>
        </section>
    )
}

export default RectangleBarSmallMobiles