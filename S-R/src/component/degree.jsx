// import React from 'react'

function Degree() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 m-10">
    <div className="md:w-1/2">
        <p className="text-sm text-gray-600">Online Degree</p>
        <h1 className="text-5xl font-bold mt-2">
  Where 
  <span 
    className="text-pink-500 hover:text-pink-700 cursor-pointer"
    onMouseEnter={(e) => {
      e.target.classList.add("typing-effect");
    }}
    onMouseLeave={(e) => {
      e.target.classList.remove("typing-effect");
    }}
  >
    <span className="inner-text">Learning</span>
  </span> 
     Meets The Expectation
</h1>
        <p className="text-gray-600 mt-4">
            At S-R, we are Revolutionising your journey of stepping your first foot into your Career through our college programs with partnering up with Top Tier Colleges
        </p>
        <div className="mt-6 flex space-x-4">
  <button
    className="bg-orange-500 text-white px-4 py-2 rounded hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out"
  >
    Explore Courses
  </button>
  <button
    className="border border-orange-500 text-orange-500 px-4 py-2 rounded flex items-center hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out"
  >
    Talk to counsellor <i className="fas fa-phone-alt ml-2"></i>
  </button>
</div>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-4">
        <div className="col-span-2">
            <img src="https://coipl.com/uploads/images/online-courses.png"  alt="Student holding books in front of a building" className="rounded-lg w-70 h-60"/>
        </div>
        <div className="col-span-1">
            <img src="https://coipl.com/uploads/images/online-courses.png" alt="Graduation ceremony with students throwing caps" className="rounded-lg w-70 h-60"/>
        </div>
        <div className="col-span-1">
            <img src="https://coipl.com/uploads/images/online-courses.png" alt="University building with a clear sky" className="rounded-lg w-70 h-60"/>
        </div>
       
    </div>
</div>
  )
}

export default Degree