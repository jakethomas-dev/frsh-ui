import React from "react";

const Button = ({ onClick, children, disabled }) => {
  return (
    <div className="mx-auto text-center justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className="whitespace-nowrap rounded-lg text-sm font-semibold transition outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-sm shadow-black/5 bg-black text-white hover:bg-black/90 hover:text-white/90 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:hover:text-black/90 h-9 px-4 py-2 mx-auto"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
