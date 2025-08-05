import { BsPinterest, BsFacebook } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-gray-300 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Contact Info */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-green-600 text-xl font-semibold">Get in Touch</h2>
          <p className="text-black font-semibold">
            <a
              href="mailto:support@amrutam.global"
              className="text-green-700 hover:underline"
            >
              support@amrutam.global
            </a>
          </p>
          <p className="text-black">
            Amrutam Pharmaceuticals Pvt Ltd, <br />
            Chitragupta Ganj, Nai Sadak, Lashkar, <br />
            Gwalior - 474001
          </p>
          <p className="text-black font-medium">+91 9713171999</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-green-800">
            <BsFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiOutlineTwitter />
            <AiFillLinkedin />
            <BsPinterest />
          </div>
        </div>

        {/* Column 2 - Information Links */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-2xl font-semibold text-green-700">Informations</h1>
          <ul className="mt-4 text-black space-y-2">
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Privacy Policy for Mobile App</li>
            <li>Shipping and Return Policy</li>
            <li>International Delivery</li>
            <li>For Business, Hotels and Resort</li>
          </ul>
        </div>

        {/* Column 3 - Subscribe */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-xl font-semibold text-green-700">
            Subscribe to our Newsletter <br /> and join Amrutam Family Today’s.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-400 rounded-md focus:outline-none w-full sm:w-64"
            />
            <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
