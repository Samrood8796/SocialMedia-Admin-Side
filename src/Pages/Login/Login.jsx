import React, { useState } from 'react'
import axios from '../../utils/axios'
import { useNavigate } from 'react-router-dom'
import { toast, Toaster } from "react-hot-toast";
const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (userName && password) {
      axios.post('/api/admin', { userName, password }, {
        headers: { "Content-type": "application/json" }
      }).then((response) => {
        localStorage.setItem("userName", response.data);
        console.log(response.data);
        navigate('/');
      }).catch((err) => {
        console.log(err);
        toast.error(err.response.data, { position: "top-center" });
      });
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-700 items-center justify-around py-32 px-4 sm:px-6 lg:px-8">
    <div></div>
    <div className="w-full max-w-md space-y-8 rounded p-2  ">
        <div>
            <h2 className=" text-3xl font-bold tracking-tight">Admin Login</h2>

        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>

            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="user-name" className="sr-only">User Name</label>
                    <input onChange={(e) => setUserName(e.target.value)} id="user-name" name="userName" type="text" required className=" pl-3 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm " placeholder="Enter UserName" />
                </div>
                <div className='pt-5'>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" required className="pl-3 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm sm:leading-6" placeholder="Password" />
                </div>
            </div>
            <div>
                <button type='submit' className="group relative flex w-full justify-center rounded-md bg-slate-800 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="h-5 w-5 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                    </span>
                    Sign in
                </button>
                <Toaster />
            </div>
        </form>
    </div>
</div>
  )
}

export default Login