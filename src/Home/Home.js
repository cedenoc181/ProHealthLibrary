import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className="bg-gray-100 w-fill h-screen">
        <div className=" rounded p-16">
            <p className="p-10 font-semibold text-gray-600 text-3xl">
                    Pro Health and Fitness PDF library is an essential tool for physical and occupational therapists as well as administrative staff in their day-to-day clinical operations.
                 It serves as a centralized repository for all the PDF documents needed for clinical operations, such as patient intake forms, APOS treatment plans, Direct Access form, APOS follow up questionaire and much more. 
                 The library is designed to be user-friendly and easily searchable, allowing therapists and administrative staff to quickly access the information they need. 
                 This not only saves time but also ensures that important documents are organized and readily available when needed. 
                 Overall, your PDF library is a valuable asset that helps streamline clinical operations and improve patient care.
            </p>
        </div>

        <div className="flex justify-around border-t-2 border-gray-300">
            <a href="/Auth"><button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">Authorization PDF</button></a>
            <a href="/PTOT"><button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">Physical and Occupational therapy PDF </button></a>
            <a href="/APOS"><button className="border border-blue-600 border-2 p-1 text-blue-500 hover:text-blue-800 hover:bg-gray-300 rounded font-semibold cursor-pointer">APOS therapy PDF</button></a>
        </div>
    </div>
  )
}

export default Home