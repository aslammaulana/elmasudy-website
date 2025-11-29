import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  href: string;
  className?: string;
  onClick?: () => void; // Tambahkan properti ini
}

const Button: React.FC<ButtonProps> = ({ icon, text, href, className = '', onClick }) => {
  return (
    <Link href={href} className="w-full">
      <button
        onClick={onClick} // jalankan di sini
        className={`flex items-center w-full p-3  font-medium bg-[#dce9e3] text-[14px] transition-colors hover:bg-[#6fa7e4] hover:text-white ${className}`}
      >
        {icon && <span className="mr-1">{icon}</span>}
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Button;
