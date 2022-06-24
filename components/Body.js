import React from 'react'
import RectangleBarSmallMobiles from '../components/RectangleBarSmallMobiles'
import RectangleBarTablet from '../components/RectangleBarTablet'
import SectionDream from '../components/SectionDream'
import SectionAimHigh from '../components/SectionAimHigh'
import SectionTeam from '../components/SectionTeam'
import SectionSocialMedia from '../components/SectionSocialMedia'
import Form from './Form'

const Body = () => {
    return (
        <>
            <Form />
            <RectangleBarSmallMobiles />
            <RectangleBarTablet />
            <SectionDream />
            <SectionAimHigh />
            <SectionTeam />
            <SectionSocialMedia />
        </>
    )
}

export default Body