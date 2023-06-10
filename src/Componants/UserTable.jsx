import React, { useState, useEffect, useRef } from 'react';
import axios from '../utils/axios';
import { fetchUsers, searchUser } from '../utils/constatns';

export default function UserTable() {
    const block = useRef()
    const [users, setUsers] = useState([]);
    const [render, setRender] = useState(false);
    const handleBlock = (userId, checked) => {
        axios.put(`/api/admin/userblock/${userId}`, { checked }).then((response) => {
            console.log(response);
            if (response.isBlocked) {
                block.current.defaultChecked = true
            } else {
                block.current.defaultChecked = false
            }
            setRender(!render)
        }).catch((err) => {
            console.log(err);
        })
    }
    const getUsers = async () => {
        const response = await axios.get(fetchUsers)
        console.log(response.data[0]);
        setUsers(response.data)
    }
    useEffect(() => {
        getUsers();
    }, [render]);

    const searchBy = (e) => {
        let key = e.target.value;
        console.log(key);
        if (!key) {
            getUsers()
        } else {
            axios.get(`${searchUser}/${key}`).then((response) => {
                setUsers(response.data)
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
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-dark-purple dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            profilePic
                        </th>
                        <th scope="col" className="px-6 py-3">
                            userName
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            followers
                        </th>
                        <th scope="col" className="px-6 py-3">
                            followings
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {users.length >= 1 &&
                        users?.map((user) => (
                            <tr className=" border-b dark:bg-[#efefef] text-black dark:border-gray-700" key={user._id}>
                                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                    {user.name}
                                </th>
                                <td className="px-6 py-4 w-6 h-6">
                                    {user.profilePic ?
                                        <img className=' rounded' src={user.profilePic} alt='profilepic' /> :
                                        <p>no profile</p>
                                    }
                                </td>
                                <td className="px-6 py-4">
                                    {user.userName}
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.followers.length}
                                </td>
                                <td className="px-6 py-4">
                                    {user.followings.length}
                                </td>
                                <td className="px-6 py-4 " >
                                    {user.isBlocked ?
                                        <input
                                        onChange={() => handleBlock(user._id, true)}
                                        ref={block}
                                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchChecked"
                                        checked /> :
                                        <input
                                        onChange={() => handleBlock(user._id, false)}
                                        ref={block}
                                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                        type="checkbox"
                                        role="switch"
                                        id="flexSwitchChecked"
                                        />
                                    }
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {users?.length < 1 &&
                <div className='text-xl text-black p-5'>No User found</div>}
        </div>
    );
}
