import React from "react";

interface ButtonProps {
  children: React.ReactNode;   // 버튼 안에 들어갈 텍스트나 아이콘
  onClick?: () => void;        // 클릭 이벤트
  variant?: "primary" | "secondary" | "danger"; // 버튼 스타일 종류
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const baseStyle =
    "w-full px-4 py-2 rounded font-semibold transition focus:outline-none";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}
