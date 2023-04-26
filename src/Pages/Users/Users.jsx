import React from 'react'
import Sidebar from '../../Componants/Sidebar'
import Navbar from '../../Componants/Navbar'
import UserTable from '../../Componants/UserTable'

const Users = () => {
    return (
        <div className="flex bg-gray-300">
            <Sidebar />
            <div className=''>
                <Navbar />
                <UserTable />
            </div>
        </div>
    )
}

export default Users