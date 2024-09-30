import { BiPhoneCall } from "react-icons/bi"; 
import { GoMail } from "react-icons/go"; 
import { CiLocationOn } from "react-icons/ci"; 
import { GiBatwingEmblem } from "react-icons/gi"; 
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import { BsGoogle } from "react-icons/bs"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
{/* <FontAwesomeIcon icon={faFacebook} /> */}
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-between items-center border-b border-gray-700 pb-6 mb-6">
                            <span>Get connected with us on social networks:</span>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 "> <BsFacebook /></a>
                                <a href="#" className="text-gray-300 "><AiFillTwitterCircle /></a>
                                <a href="#" className="text-gray-300 "><BsGoogle /></a>
                                <a href="#" className="text-gray-300 "><BsInstagram /></a>
                                <a href="#" className="text-gray-300 "><AiFillLinkedin /></a>
                                <a href="#" className="text-gray-300 "><AiFillGithub /></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div>
                                <h6 className="uppercase font-semibold mb-4 flex items-center">
                                    <GiBatwingEmblem />  -  Company name 
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold mb-4">Products</h6>
                                <p className="mb-4"><a href="#" className="text-gray-300">Angular</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">React</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">Vue</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">Laravel</a></p>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold mb-4">Useful links</h6>
                                <p className="mb-4"><a href="#" className="text-gray-300">Pricing</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">Settings</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">Orders</a></p>
                                <p className="mb-4"><a href="#" className="text-gray-300">Help</a></p>
                            </div>
                            <div>
                                <h6 className="uppercase font-semibold mb-4">Contact</h6>
                                <p className="flex items-center mb-4">
                                    <CiLocationOn className="mr-2"/> New York, NY 10012, US
                                </p>
                                <p className="flex items-center mb-4">
                                    <GoMail className="mr-2"/> info@example.com
                                </p>
                                <p className="flex items-center mb-4">
                                    <BiPhoneCall className="mr-2" /> + 01 234 567 88
                                </p>
                                <p className="flex items-center mb-4">
                                    <BiPhoneCall className="mr-2" />  + 01 234 567 89
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center p-6 bg-gray-700">
                        <span>© 2024 Copyright: </span>
                        <a className="text-gray-300 font-semibold" href="#">S-R Computer Institute</a>
                    </div>
                </footer>
  )
}

export default Footer