import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './components/partials/navbar';
import axios from 'axios';

export default function Dashboard() {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');

    axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/dashboard')
        .then((res) => {
            if(res.data.Success === true){
                setAuth(true);
                setName(res.data.name);
            } else{
                setAuth(false);
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='bg-gradient-to-r from-purple-400 via-blue-400 to-green-200 h-screen'>
        <Navbar role="student"/>
        { auth && 
            <div>Hello</div>
        }

        <div className=''>
            <div className='grid grid-rows-2 gap-y-20 pt-28'>
                <h1 className="text-5xl text-white text-center font-black" style={{ fontSize: "70px" }}>Know Why</h1>
            </div>
        </div>
    
        <div className="flex flex-row justify-center items-center">
            
            <div className="w-fit p-4 h-100p">
            
                <form className="grid grid-rows-2 gap-4 mt-10">
                    <div className="flex justify-between items-center mb-10">
                    <label className="text-lg text-white font-medium text-gray-700 w-96" style={{ fontSize: "25px" }}>Topic you are reading </label>
                    <input
                        type="text"
                        className="w-3/4 px-4 py-3 rounded-full"
                        placeholder='Enter here'
                    />
                    </div>
                    <div className="flex justify-between items-center mb-10">
                    <label className="text-lg text-white font-medium text-gray-700 w-96" style={{ fontSize: "25px" }}>Your Passion </label>
                    <input
                        type="text"
                        className="w-3/4 px-4 py-3 rounded-full"
                        placeholder='Enter here'
                    />
                    </div>
                    <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-40 uppercase text-white mb-5 py-3 font-semi-bold rounded-full tracking-widest" style={{ fontSize: "20px" }}
                    >
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        </div>
  </div>
  )
}
