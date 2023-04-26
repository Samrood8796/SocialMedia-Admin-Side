import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { deletePost } from '../utils/constatns'
const PostTable = ({ post, index, render, setRender }) => {
    const [open, setOpen] = useState(false)
    const handleReport = () => {
            if (confirm(`Remember you can't revert this`)) {
                axios.put(`${deletePost}/${post._id}`).then((response) => {
                    console.log(response.data);
                    setRender(!render)
                    // alert('restricted successfully')
                })
                console.log('Thing was saved to the database.');
              } else {
                console.log('Thing was not saved to the database.');
              }
    }
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    }

    const searchBy = (e) => {
        let key = e.target.value;
        if (!key) {
          getallPosts()
        } else {
          axios.get(`/api/admin/searchPost/${key}`).then((response) => {
            setPosts(response.data)
          }).catch((err) => {
            console.log(err);
          })
        }
      }
    return (
        <>
            <tr className="  border-b dark:bg-[#efefef] text-black dark:border-gray-700 " key={post._id}>
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {index}
                </th>
                <td className="px-6 py-4 w-36">
                    {post.image ?
                        <img className='' src={post.image} alt='profilepic' /> :
                        <p>no image</p>
                    } 
                </td>
                <td className="px-6 py-4">
                    {post?.author?.userName}
                </td>

                <td className="px-6 py-4">
                    {formatDate(post.createdAt)}
                </td>
                <td className="px-6 py-4 object-fill ">
                    <button onClick={(e) => setOpen(true)} className="bg-gray-600 text-white p-1.5 rounded-md btn">
                        Details
                    </button>
                </td>
                <td className="px-6 py-4 object-fill ">
                    {post.isDeleted ?
                        <p className=' p-1.5 '>Restricted</p>
                        :
                        <button onClick={handleReport} className="bg-gray-600 text-white p-1.5 rounded-md btn">
                            Restrict
                        </button>
                    }
                </td>
            </tr>
            {open &&
                <div onClick={() => setOpen(false)} className="text-black fixed top-0 left-0 w-full min-h-full bg-gray-800 bg-opacity-50 z-50">
                    <div className="w-3/4 md:w-full  max-w-md mx-auto mt-48">
                        {/* Modal content */}
                        <div className="bg-gray-200 space-y-4 text-lg rounded-lg shadow-lg p-6">
                            <h2 className="text-lg font-bold mb-4">Details</h2>
                            <p>UserName: {post.author.userName} </p>
                            <p>Post Id: {post._id}</p>
                            <p>Description: {post.desc}</p>
                            <p>comments: {post.comments.length}</p>
                            <p>likes: {Object.keys(post.likes).length}</p>
                            <p>Posted On: {formatDate(post.createdAt)}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PostTable