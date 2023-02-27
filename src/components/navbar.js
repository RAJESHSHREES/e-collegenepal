import React from 'react'

function navbar() {
  return (
    <div>
      <div className="h-16 bg-white flex items-center justify-center drop-shadow-xl hover:drop-shadow-2xl">
        <ul className= "flex justify-center font-serif" >
            <li className="pt-8  shadow-indigo-500/40">
                Bsc CSIT
            </li>
            <li className="p-8 ">
                MBA
            </li>
            <li className="p-8 decoration-red ">
                MBA
            </li>
            <li className="p-8 ">
                MBA
            </li>
            <li className="p-8 ">
                MBA
            </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar
