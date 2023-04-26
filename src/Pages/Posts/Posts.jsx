import React from 'react'
import Navbar from '../../Componants/Navbar'
import Sidebar from '../../Componants/Sidebar'
import Post from '../../Componants/Post'

const Posts = () => {
    return (
        <div className="flex bg-gray-300">
            <Sidebar />
            <div>
                <Navbar />
                <Post />
            </div>
        </div>
    )
}

export default Posts