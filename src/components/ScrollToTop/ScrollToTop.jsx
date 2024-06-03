import React, { useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";


function ScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(true);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAnglesUp className="top-btn-position" onClick={scrollTop} />
      )}
    </div>
  );
}

export default ScrollToTop;
