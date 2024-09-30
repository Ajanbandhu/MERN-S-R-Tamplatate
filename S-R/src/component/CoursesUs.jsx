// import React from 'react'

function CoursesUs() {
  return (
    <div className="max-w-7xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4 pt-11 text-center">Our Courses</h1>
    <h2 className="text-xl text-orange-500 mb-6">Information Technology Most Popular </h2>
    <div className="flex justify-between items-center mb-6">
        <div></div>
        <button className="text-gray-600 hover:text-gray-800 flex items-center">
            View All <i className="fas fa-arrow-right ml-2"></i>
        </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out">
            <div className="relative">
                <img src="https://th.bing.com/th/id/OIP.aiOtyCgh9f4gYGLSu5NHqwAAAA?rs=1&pid=ImgDetMain" alt="Data Science with Generative AI Course" className="w-full h-48 object-cover"/>
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded"> Best Course</span>
            </div>
            <div className="p-4">
                <p className="text-sm text-green-500 mb-2">Premium Offerings Available</p>
                <h3 className="text-lg font-bold mb-2">MS-CIT Maharashtra State-certificate </h3>
                <p className="text-sm text-gray-600 mb-4">Job Assistance | fast-tracked career growth in IT</p>
                <p className="text-sm text-red-500 mb-4">Admission Closing soon, Enroll Now!</p>
                <div className="flex justify-between">
                    <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out">Explore</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out">
            <div className="relative">
                <img src="https://www.fullstackgurupune.com/storage/blog_icons/3a4b5e6c9a4a040c48ea39732d663257.jpeg" alt="Data Analytics Course" className="w-full h-48 object-cover"/>
                <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">Popular</span>
            </div>
            <div className="p-4">
                <p className="text-sm text-green-500 mb-2">Premium Offerings Available</p>
                <h3 className="text-lg font-bold mb-2">JAVA FullStack Course</h3>
                <p className="text-sm text-gray-600 mb-4">Job Assistance | Gain Advance Project Expertise</p>
                <p className="text-sm text-red-500 mb-4">Admission Closing soon, Enroll Now!</p>
                <div className="flex justify-between">
                    <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded">Explore</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500 hover:scale-105 transition duration-300 ease-in-out">
            <div className="relative">
                <img src="https://th.bing.com/th/id/R.ee8b91d98692e708668607f6bff42b4b?rik=cyQPPuSLsyLSuA&riu=http%3a%2f%2fwww.printingtoprint.com%2fwp-content%2fuploads%2f2013%2f05%2fGraphic-Design-Company-Los-Angeles.jpg&ehk=LVSIZJtvzQxzQqS7a80riM3l8mcJcFxjjdtYVJ0jMLE%3d&risl=&pid=ImgRaw&r=0" alt="Data Analytics Course Hinglish" className="w-full h-48 object-cover"/>
            </div>
            <div className="p-4">
                <p className="text-sm text-green-500 mb-2">Premium Offerings Available</p>
                <h3 className="text-lg font-bold mb-2">Graphic Design Course Hinglish</h3>
                <p className="text-sm text-gray-600 mb-4">Job Assistance | Gain Advanced Expertise</p>
                <p className="text-sm text-red-500 mb-4">Registrations Started</p>
                <div className="flex justify-between">
                    <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded">Explore</button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CoursesUs