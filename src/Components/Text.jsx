import React from "react";

const sizes = {
  "12_regular": "text-[12px] font-normal",
  textxs: "text-[14px] font-normal",
};

const Text = ({ children, className = "", as, size = "12_regular", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component
      className={`text-gray-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
