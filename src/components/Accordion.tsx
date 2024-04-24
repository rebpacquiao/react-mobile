import React, { useState } from "react";

function AccordionItem({ heading, content, background }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={background}>
      <h2>
        <button
          type="button"
          onClick={toggleAccordion}
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500"
          aria-expanded={isOpen}
        >
          <span dangerouslySetInnerHTML={{ __html: heading }}></span>
          <svg
            className={`w-3 h-3 rotate-${isOpen ? "0" : "180"} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <div className="bg-white accordion-content">{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
