"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          rounded-full
          bg-cyan-500
          hover:bg-cyan-400
          shadow-xl
          z-50
          transition
        "
      >
        <FaArrowUp className="mx-auto" />
      </button>
    )
  );
}