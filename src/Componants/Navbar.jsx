import React from 'react'

const Navbar = () => {
  const user = localStorage.getItem("userName")
  return (
    <>
    <nav className='fixed w-full bg-gray-500 flex justify-between h-16 items-center py-3 shadow-md'>
      <div className='flex item-center space-x-5'>
        <i className='fa-solid fa-bars'></i>
        <h1 className='text-3xl text-white italic from-neutral-700'>Social</h1>
      </div>
      <div className='flex'>
        <div className="flex items-center">
          <div className='px-4'>
            {/* <BellIcon /> */}
          </div>

          {/* <ChatIcon /> */}
        </div>

        {user &&
          <p className=" px-3 py-3 text-white rounded-md text-sm font-bold">{user}</p>
        }

        {/* <div className='relative'>
          {userData.profilePic ?
            <button className='block w-12 h-12 md:hidden' onClick={toggleMenu}>
              <img className='rounded-full h-full w-full' src={userData?.profilePic ? userData?.profilePic : ""} alt=''></img>
            </button> : <div onClick={toggleMenu} className='block md:hidden border bg-white w-10 h-10 rounded-full'>
              <FaUser className='w-full h-full rounded-full' /> </div>}
          {userData.profilePic ?
            <button onClick={() => navigate(`/profile/${userData._id}`)} className='hidden md:block w-12 h-12'>
              <img className='rounded-full h-full w-full' src={userData?.profilePic ? userData?.profilePic : ""} alt=''></img>
            </button> : <div className='hidden md:block  border bg-white border-[#fffff] w-10 h-10 rounded-full'>
              <FaUser className='w-full h-full rounded-full' /> </div>}
          <div className={`absolute top-12 right-0 w-52 justify-start bg-white text-center border border-zinc-400 rounded-lg py-2 ${isOpen ? '' : 'hidden'}`}>
            <p onClick={() => navigate(`/`)} className='m-2 hover:text-white hover:bg-[#02abc5] py-2 rounded transition duration-200'>Home</p>
            <p onClick={() => navigate(`/profile/${userData._id}`)} className='py-2 rounded m-2 hover:text-white hover:bg-[#02abc5] transition duration-200'>Profile</p>
            <p onClick={() => navigate('/chat')} className='py-2 rounded m-2 hover:text-white hover:bg-[#02abc5] transition duration-200'>Messages</p>
            <p onClick={() => navigate('/notifications')} className='py-2 rounded m-2 hover:text-white hover:bg-[#02abc5] transition duration-200'>Notification</p>
            {userData ? <p onClick={handleLogout} className='py-2 rounded m-2 hover:text-white hover:bg-[#02abc5] transition duration-200'>Logout</p> :
              <p onClick={() => navigate('/login')} className='py-2rounded m-2 hover:text-white hover:bg-[#02abc5] transition duration-200'>Login</p>
            }
          </div>
        </div> */}
        {/* {userData && <p className='p-3 font-bold'>{userData.userName}</p>} */}
      </div>
    </nav>
   
  </>
  )
}

export default Navbar