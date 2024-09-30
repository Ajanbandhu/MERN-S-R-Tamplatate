// import React from 'react'

import Acourses from "../component/Acourses"
import DarkVariantExample from "../component/BodyA"
import Connection from "../component/Connection"
import ContactUs from "../component/ContactUs"
import CoursesUs from "../component/CoursesUs"
import DashB from "../component/DashB"
import Degree from "../component/degree"
import Footer from "../component/Footer"
import Navbara from "../component/Navbar"
import Offer from "../component/Offer"
import Review from "../component/Review"
import WhyMe from "../component/WhyMe"

function HomePages() {
  return (
    <div>
        
      <Navbara/>
      <DarkVariantExample/>
      <Offer/>
      <Degree/>
      <DashB/>
      <CoursesUs/>
      <Acourses/>
      <Connection/>
      <WhyMe/>
      <Review/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default HomePages