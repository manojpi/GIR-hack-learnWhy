import React from 'react'
import Navbar from './components/partials/navbar';
import Footer from './components/partials/footer';
import LearningGraph from './components/learningGraph';
import { useState } from 'react'






export default function Dashboard() {
    const[state, setState] = useState("")
    const[responseMsg,setResponseMsg] = useState([])
    const[responseMsgProduct,setResponseMsgProduct] = useState([])
    const formSubmissionHandler = async (event) => {
    
        event.preventDefault();
        let topic = event.target.querySelector('#topic-name').value;
        let userPassion = event.target.querySelector('#user-passion').value;
        console.log(topic);
        console.log(userPassion);
        let topicsUrl = `https://silver-theme-403917.uc.r.appspot.com/query?topic=${topic}&passion=${userPassion}`;
        try {
            const data = await fetch(topicsUrl, {
                method: 'GET',
                // headers: {
                //   'Referrer-Policy': 'no-referrer', // Set the desired referrer policy
                //   // Add other necessary headers if applicable
                // }
            })
            const response = await data.json()
            setState("success")
            setResponseMsg(response.message.slice(0, response.message.length-1))
            setResponseMsgProduct(response.message.slice(response.message.length-1))
    
        } catch (error) {
            console.log(error)
        };
    
    
    }
        console.log(state)
        {if (state === 'success'){
            console.log("yes")
            return <LearningGraph data={responseMsg} product={responseMsgProduct}/>
        }}
        return (
        <div className='bg-gradient-to-r from-purple-400 via-blue-400 to-green-200 h-screen'>
            <Navbar role="student" />

            <div className=''>
                <div className='grid grid-rows-2 gap-y-20 pt-28'>
                    <h1 className="text-5xl text-white text-center font-black" style={{ fontSize: "70px" }}>Know Why</h1>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">

                <div className="w-fit p-4 h-100p">

                    <form className="grid grid-rows-2 gap-4 mt-10" onSubmit={formSubmissionHandler}>
                        <div className="flex justify-between items-center mb-10">
                            <label className="text-lg text-white font-medium text-gray-700 w-96" style={{ fontSize: "25px" }}>Topic you are reading </label>
                            <input
                                type="text"
                                className="w-3/4 px-4 py-3 rounded-full"
                                placeholder='Enter here'
                                id='topic-name'
                            />
                        </div>
                        <div className="flex justify-between items-center mb-10">
                            <label className="text-lg text-white font-medium text-gray-700 w-96" style={{ fontSize: "25px" }}>Your Passion </label>
                            <input
                                type="text"
                                className="w-3/4 px-4 py-3 rounded-full"
                                placeholder='Enter here'
                                id='user-passion'
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 w-40 uppercase text-white py-3 font-semi-bold rounded-full tracking-widest" style={{ fontSize: "20px" }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
