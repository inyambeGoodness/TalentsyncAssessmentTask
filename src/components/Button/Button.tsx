import React from "react";
import Link from "next/link";

interface ButtonProps {
  btnValue: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ btnValue, className }) => {
  return (
    <div className={` cursor-pointer flex items-center  ${className}`}>
      <input
        type="button"
        value={btnValue}
        className={` text-[12px]  cursor-pointer w-[120px] h-[35px] font-bold   py-1 px-2 text-center justify-center items-center `}
      />
    </div>
  );
};
