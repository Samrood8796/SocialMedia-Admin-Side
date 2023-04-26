import React, { useEffect, useState } from 'react'
import { getCounts } from '../utils/constatns'
import axios from '../utils/axios'
const Boxes = () => {

  const [users, setUsers] = useState(0)
  const [newUsers, setNewUsers] = useState(0)
  const [posts, setPosts] = useState(0)
  const [newPosts, setNewPosts] = useState(0)

  const getDashboard = async () => {
    try {
      const response = await axios.get(getCounts)
      setUsers(response.data.usercount)
      setNewPosts(response.data.newpost)
      setNewUsers(response.data.newuser)
      setPosts(response.data.postcount)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDashboard()
  }, [])
  return (
    <div className='m-2 flex gap-10'>
      <div className='w-48 bg-gray-600 p-2 text-white rounded-md'>
        <p className='text-2xl'>All users</p>
        <p className='text-xl pt-5'>{users}</p>
      </div>
      <div className='w-48 bg-gray-600 p-2 text-white rounded-md'>
        <p className='text-2xl'>New users</p>
        <p className='text-xl pt-5'>{newUsers}</p>
      </div>
      <div className='w-48 bg-gray-600 p-2 text-white rounded-md'>
        <p className='text-2xl'>All Posts</p>
        <p className='text-xl pt-5'>{posts}</p>
      </div>
      <div className='w-48 bg-gray-600 p-2 text-white rounded-md'>
        <p className='text-2xl'>New Posts</p>
        <p className='text-xl pt-5'>{newPosts}</p>
      </div>
      
    </div>
  )
}

export default Boxes