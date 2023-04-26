import React from 'react'
import Sidebar from '../../Componants/Sidebar'
import Dashbord from '../../Componants/Dashbord'
import Navbar from '../../Componants/Navbar'

const Home = () => {
    return (
        <>
            <div className="w-full flex ">
                <Sidebar />
                <div className="min-h-screen flex flex-1">
                    <Navbar />
                    <Dashbord />
                </div>
            </div>

        </>
    )
}

export default Home