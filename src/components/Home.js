import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from './Body'
import "../CompStyles/home.css"

function Home() {
    return (
        <>
            <div className='home'>
                <div> <Header />
                </div>
                <div>
                    <Body />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home