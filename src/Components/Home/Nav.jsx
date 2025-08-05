import React, { useState } from "react";
import AfterSection from "../Main/AfterNav";
import ScrollToTopButton from "../ScrolltoTop";
import { Link } from "react-router-dom";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="flex items-center justify-center bg-gray-500 px-4 py-3 gap-2 text-center">
        <h1 className="text-white text-sm sm:text-base">
          Register Yourself as an Amrutam Doctor
        </h1>
        <button className="bg-green-800 text-white rounded-2xl px-6 py-2 text-xs sm:text-sm hover:bg-green-600">
          Join Now
        </button>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        {/* Header */}
        <div className="flex justify-center items-center py-4">
          <h1 className="text-center text-green-800 text-2xl font-semibold">
            AMRUTAM
          </h1>
        </div>

        {/* Navigation Bar */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Nav */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white hover:bg-gray-700">
                    About us
                  </Link>
                  <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
                    Onboarding
                  </Link>
                  <Link to="/FAQ" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
                    FAQ
                  </Link>
                  <Link to="#" className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white">
                    Testimonials
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu (only visible on small screens when open) */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">
                About us
              </Link>
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">
                Onboarding
              </Link>
              <Link to="/FAQ" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">
                FAQ
              </Link>
              <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white">
                Testimonials
              </Link>
            </div>
          </div>
        )}
      </div>
      <AfterSection />
        <ScrollToTopButton />
    </>
  );
}

export default Nav;
