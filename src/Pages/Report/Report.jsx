import React from 'react'
import Navbar from '../../Componants/Navbar'
import Sidebar from '../../Componants/Sidebar'
import ReportList from '../../Componants/ReportList'

const Report = () => {
    return (
        <div className="flex bg-gray-300">
            <Sidebar />
            <div>
                <Navbar /> 
                <ReportList />
            </div>
        </div>
    )
}

export default Report