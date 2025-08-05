import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiThreeLeaves } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillBagPlusFill } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import FaqSectionOne from "../FAQ/Sectionone";
import ScrollToTopButton from "../ScrolltoTop";
import { Link } from "react-router-dom";

function Nav2() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-amber-100">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-4">
          {/* Left Side: Phone Icon and Number */}
          <div className="flex items-center gap-2 text-sm text-green-800">
            <IoCallOutline className="text-lg" />
            <span>+919826352321</span>
          </div>

          {/* Center: Brand Name */}
          <h1 className="text-green-800 text-2xl font-semibold text-center w-full">
            AMRUTAM
          </h1>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Desktop Nav Items */}
            <div className="hidden sm:flex flex-1 items-center justify-center">
              <div className="flex space-x-4 items-center">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Find Doctors
                </Link>
                <Link
                  href="/FAQ"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  LabTests
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Shop
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  Forum
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </Link>

                {/* Icons */}
                <Link
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-medium text-white bg-gray-400 outline-green-600 ml-2"
                  aria-label="Add to bag"
                >
                  <BsFillBagPlusFill />
                </Link>
                <Link
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-medium text-white bg-gray-400 outline-green-600 ml-2"
                  aria-label="Shopping cart"
                >
                  <HiShoppingCart />
                </Link>
                <Link
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-medium text-white bg-gray-400 outline-green-600 ml-2"
                  aria-label="Notifications"
                >
                  <IoIosNotifications />
                </Link>
                <Link
                  href="#"
                  className="rounded-full px-3 py-2 text-sm font-medium text-white bg-gray-400 outline-green-600 ml-2"
                  aria-label="Leaves"
                >
                  <GiThreeLeaves />
                </Link>
                <Link href="#" className="text-black mt-2" aria-label="Dropdown">
                  <IoIosArrowDropdownCircle />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="sm:hidden flex flex-col space-y-2 mt-4 px-4 pb-4">
              <Link
                href="/"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                Find Doctors
              </Link>
              <Link
                href="/FAQ"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                LabTests
              </Link>
              <Link
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                Shop
              </Link>
              <Link
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                Forum
              </Link>
              <Link
                href="#"
                className="text-black px-3 py-2 rounded-md text-sm hover:bg-gray-200"
              >
                About Us
              </Link>
              <div className="flex gap-2 mt-2">
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-400 text-white"
                  aria-label="Add to bag"
                >
                  <BsFillBagPlusFill />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-400 text-white"
                  aria-label="Shopping cart"
                >
                  <HiShoppingCart />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-400 text-white"
                  aria-label="Notifications"
                >
                  <IoIosNotifications />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-gray-400 text-white"
                  aria-label="Leaves"
                >
                  <GiThreeLeaves />
                </Link>
                <Link
                  href="#"
                  className="mt-1 text-black"
                  aria-label="Dropdown"
                >
                  <IoIosArrowDropdownCircle />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <FaqSectionOne />
      <ScrollToTopButton />
    </>
  );
}

export default Nav2;
