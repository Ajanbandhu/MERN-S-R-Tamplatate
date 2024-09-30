// import React from 'react'

function Acourses() {

    const categories = [
        {
            title: "C / C++",
            description: "Become expert at drawing intelligence from data and get noticed by top...",
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlufwEYttqwFw8P88Va54kAVlOQwj8O7sGnU-4f03aksImAewvyp4itfBrdKEzzGPsLx7zfWjTS7mDJ7f9Fx5mzclkxB4a-x9B5yaIE4mwapf7gshj720kWNK4rnfJiJn7QJrot5TwfYtCbcR9XNObz6BvqOf0YsJmfXAnbYpg3FK-wJHScwRJJ2K21Z5t/s1024/image_search_1707265748541.png",
            alt: "icon",
        },
        {
            title: "Python  Courses",
            description: "Upskill in-demand software & technology skills to attain desired jobs",
            image: "https://courses.smeclabs.com/wp-content/uploads/2022/01/python.png",
            alt: "Software development icon",
        },
        {
            title: "Advanced Excell",
            description: "Up-skill yourself with relevant courses to become job ready in Banking...",
            image: "https://th.bing.com/th/id/OIP.69dsU7qO5RItr5VpVRDLCgHaD-?rs=1&pid=ImgDetMain",
            alt: "Banking icon",
        },
        {
            title: "Tally Courses",
            description: "Build strong coding foundations for a high-paying technology career",
            image: "https://tallyerp9renewal.com/wp-content/uploads/elementor/thumbs/features-of-tally2-p00ew337nx5knciartvv2soas2avlppczl45p286ms.jpg",
            alt: "Programming icon",
        },
        {
            title: "Business Technology",
            description: "Explore the vast area of new categories under Business Technology",
            image: "https://th.bing.com/th/id/OIP.qrO3hYy3QwIgXBIPcAdipwHaE8?rs=1&pid=ImgDetMain",
            alt: "Business technology icon",
        },
        {
            title: "PW School of Healthcare",
            description: "Explore the vast sector of Healthcare by Joining our Degree & Diploma...",
            image: "https://placehold.co/60x60?text=Healthcare",
            alt: "Healthcare icon",
        },
    ];

  return (
    <div className="container mx-auto p-6">
                    <h1 className="text-3xl font-bold mb-2">Explore Our Categories</h1>
                    <p className="text-gray-600 mb-6">Discover Your Passion</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                                <div className="flex-shrink-0">
                                    <img src={category.image} alt={category.alt} className="w-28 h-24 " />
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h2 className="text-xl font-semibold">{category.title}</h2>
                                    <p className="text-gray-600 mt-2">{category.description}</p>
                                    <a href="#" className="text-orange-500 mt-4 inline-flex items-center">
                                        Know More <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
  )
}

export default Acourses