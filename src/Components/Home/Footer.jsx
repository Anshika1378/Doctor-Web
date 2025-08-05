import { BsPinterest, BsFacebook } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-400 p-6 sm:p-10">
      {/* Logo + Contact Section */}
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-2xl font-semibold text-green-700">A M R U T A M</h1>
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
          Amrutam Pharmaceuticals Pvt Ltd,
          <br />
          Chitragupta Ganj, Nai Sadak, Lashkar,
          <br />
          Gwalior - 474001
        </p>
        <p className="text-black font-medium">+91 9713171999</p>
      </div>

      {/* Informations Section */}
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

      {/* Social Icons Section */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-semibold text-green-700">Follow Us</h1>
        <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl text-green-800">
          <BsFacebook />
          <AiFillInstagram />
          <AiFillYoutube />
          <AiOutlineTwitter />
          <AiFillLinkedin />
          <BsPinterest />
        </div>
      </div>
    </div>
  );
}

export default Footer;
