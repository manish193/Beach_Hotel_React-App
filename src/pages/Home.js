import React from 'react'
import {Hero} from '../components/Hero'
import {Banner} from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
const Home = () => {
    return (
        <>
            <Hero >
               <Banner title="Luxurious rooms" subtitle="delux rooms starting at $299">
                   <Link to="/rooms" className="btn-primary">
                       our rooms

                   </Link>
               </Banner>

            </Hero>
            <Services />
            <FeaturedRoom/>   
        </>
    )
}
export default Home;