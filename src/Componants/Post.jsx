import React, { useState, useEffect, useRef } from 'react';
import axios from '../utils/axios';
import { fetchPosts, searchPosts } from '../utils/constatns';
import PostTable from './PostTable';
const postsPerPage = 1
export default function Table() {
    const [posts, setPosts] = useState([]);
    const [render, setRender] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);//for pagination
    const getPosts = async () => {
        const response = await axios.get(fetchPosts)
        console.log(response.data);
        setPosts(response.data)
    }


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }; //for pagination

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);//for pagination
    useEffect(() => {
        getPosts();
    }, [render]);
    const searchBy = (e) => {
        let key = e.target.value;
        console.log(key);
        if (!key) {
            getPosts()
        } else {
            axios.get(`${searchPosts}/${key}`).then((response) => {
                setPosts(response.data)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    return (
        <div className="p-20">
            <div className="pt-10 mb-6">
                <input
                    className='px-2 py-1 w-64 focus:outline-none rounded'
                    type="text"
                    name="query"
                    placeholder="Search...."
                    title="Enter search keyword"
                    onChange={searchBy}
                />
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-dark-purple dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Post
                        </th>
                        <th scope="col" className="px-6 py-3">
                            userName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                        <th scope="col" className="px-6 py-3">
                            post status
                        </th>
                    </tr>
                </thead>
                <tbody className='overflow-scroll'>
                    {posts.length !== 0 &&
                        currentPosts.map((post, index) => (
                            <PostTable key={index} post={post} index={index + indexOfLastPost} setRender={setRender} render={render} />
                        ))}
                </tbody>
            </table>
            {posts.length < 1 &&
                <div className='text-xl text-black p-5'>No Posts found</div>}

            <div className="pagination-button flex">
                <div className='flex'>
                    <button className="btn"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <p className='bg-gray-500 cursor-pointer rounded m-2 text-white px-2 py-1'>{`${currentPage - 1} <- Prev`}</p>
                    </button>
                    <p className='mx-1 w-6 text-center rounded my-3 text-xl bg-white '>{currentPage}</p>
                    <button className="btn"
                        disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <p className='bg-gray-500 cursor-pointer rounded m-2 text-white py-1 px-2'>{`Next -> ${currentPage + 1}`}</p>
                    </button>
                </div>
            </div>

        </div>
    );
}
