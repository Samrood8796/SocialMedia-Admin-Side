import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { deletePost } from '../utils/constatns'
const ReportTable = ({ report, index, render, setRender }) => {
    const [open, setOpen] = useState(false)
    const handleReport = () => {
            if (confirm(`Remember you can't revert this`)) {
                axios.put(`${deletePost}/${report.postId._id}`).then((response) => {
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
            <tr className="  border-b dark:bg-[#efefef] text-black dark:border-gray-700 " key={report._id}>
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {index}
                </th>
                <td className="px-6 py-4 w-36">
                    {report.postId.image ?
                        <img className='' src={report.postId.image} alt='profilepic' /> :
                        <p>no image</p>
                    } 
                </td>
                <td className="px-6 py-4">
                    {report?.reporter?.userName}
                </td>

                <td className="px-6 py-4">
                    {formatDate(report.createdAt)}
                </td>
                <td className="px-6 py-4 object-fill ">
                {report?.reason}
                </td>
                <td className="px-6 py-4 object-fill ">
                    {report.postId.isDeleted ?
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
                            <p>UserName: {report.author.userName} </p>
                            <p>report Id: {report._id}</p>
                            <p>Description: {report.desc}</p>
                            <p>comments: {report.comments.length}</p>
                            <p>likes: {Object.keys(report.likes).length}</p>
                            <p>reported On: {formatDate(report.createdAt)}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ReportTable