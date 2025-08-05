import React, { useEffect, useState } from "react";
import { AiFillUpCircle } from "react-icons/ai";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
      setHasAnimated(true); // Only animate on first show
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={scrollToTop}
          className={`bg-green-700 text-white p-4 rounded-full shadow-md hover:bg-green-600 transition 
            ${hasAnimated ? "animate-slideDown" : ""}`}
        >
          <AiFillUpCircle size={30} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
