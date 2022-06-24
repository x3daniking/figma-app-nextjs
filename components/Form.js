import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [location, setLocation] = useState("")
    function onChangeLocation(e) {
        setLocation(e.currentTarget.value)
    }

    const [car, setCar] = useState('Audi')
    function onChangeCar(e) {
        setCar(e.currentTarget.value)
    }

    const [color, setColor] = useState("Black")
    function onChangeColor(e) {
        setColor(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (location == "") {
            alert('Please Enter Your Location!')
        }
        else {
            const states_ = [{ car }, { color }, { location }]
            console.log({ states_ })
        }
        setLocation("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className="hidden md:block bg-white rounded-md absolute top-[33.875rem] md:top-[36rem] lg:top-[39.625rem] xl:top-[46.125rem] xl:l-[2.625rem] xl:pr-12 left-0 right-0 w-fit mx-auto px-4 flex items-center justify-center shadow-md">
                <ul className="flex items-center justify-center text-gray-700">
                    <li><img className="w-8 xl:w-auto" src="/images/pin.png" alt="" /></li>
                    <li className="text-sm lg:text-base md:pl-2 xl:pl-4 font-normal xl:text-lg">Location</li>
                    <li className="px-0.5 py-3.5 mx-2 md:p-0 md:w-[0.1rem] md:h-5 xl:h-7 xl:w-1.5 bg-Greenish xl:mx-1.5"></li>
                    <li><input value={location} onChange={onChangeLocation} className="w-40 text-xs focus:outline-none md:w-auto xl:text-base" type="text"
                        placeholder="Enter Your Location Here!" />
                    </li>
                    <li className="h-20 lg:h-24 xl:h-28 w-0.5 bg-gray-300"></li>
                    <li className="px-4 md:px-6 lg:px-8 xl:px-4 xl:mx-9">
                        <select
                            onChange={onChangeCar} value={car} className="focus:outline-none bg-transparent hover:cursor-pointer text-sm lg:text-base font-normal"
                            name="Category" id="Category">
                            <option className="bg-Grayish" value="Audi">Audi</option>
                            <option className="bg-Grayish" value="Porsche selected">Porsche</option>
                            <option className="bg-Grayish" value="Ferrari">Ferrari</option>
                        </select>
                    </li>
                    <li className="h-20 lg:h-24 xl:h-28 w-0.5 bg-gray-300"></li>
                    <li className="px-4 md:px-6 lg:px-8 xl:px-4 xl:mx-9">
                        <select
                            onChange={onChangeColor} value={color} className="focus:outline-none bg-transparent hover:cursor-pointer text-sm lg:text-base xl:text-lg font-normal"
                            name="Category" id="Category">
                            <option className="bg-Grayish" value="Black">Black</option>
                            <option className="bg-Grayish" value="Silver">Silver</option>
                            <option className="bg-Grayish" value="Red" selected>Red</option>
                        </select>
                    </li>
                    <li className="h-20 lg:h-24 xl:h-28 w-0.5 bg-gray-300"></li>
                    <li className="pl-6 md:pr-4 lg:pl-8 lg:pr-4 xl:pl-6 xl:pr-0">
                        <button type='submit'
                            className="bg-Greenish rounded-md text-white px-5 py-2 lg:text-lg md:font-medium trans hover:bg-Grayish md:px-6 md:py-2.25 lg:px-8 lg:py-3 xl:text-lg xl:px-[3.094rem] xl:py-[0.875rem]">Submit</button>
                    </li>
                </ul>
            </div >
        </form>
    )
}

export default Form