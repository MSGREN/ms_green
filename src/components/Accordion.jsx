import { useState, useEffect } from "react";

const Accordion = ({ id, title, content, isOpen, onToggle }) => {
  const handleClick = () => {
    onToggle(id);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hs-accordion-${isOpen ? "active" : ""}`} id={id}>
      <button
        className={`hs-accordion-toggle ${isOpen ? "hs-accordion-active" : ""} 
        py-2 inline-flex gap-x-2 text-center justify-center items-center w-full font-semibold text-lime-400 
        hover:text-lime-400 rounded-lg disabled:opacity-50 disabled:pointer-events-none 
        dark:hs-accordion-active:text-blue-500 dark:text-lime-400 dark:hover:text-lime-400 
        dark:focus:outline-none dark:focus:text-lime-400`}
        onClick={handleClick}
        aria-controls={`${id}-collapse`}>
        <svg
          className={`hs-accordion-active:hidden w-4 h-4`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>

        <svg
          className={`hs-accordion-active:block w-4 h-4`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>

        {title}
      </button>

      <div
        id={`${id}-collapse`}
        className={`hs-accordion-content ${
          isOpen ? "w-full overflow-hidden transition duration-300 ease-in-out" : "hidden"
        }`}
        aria-labelledby={id}>
        <p className="text-gray-800 dark:text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
