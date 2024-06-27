import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ type, children, className, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white py-2.5 hover:bg-blue-600 ${className} `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
