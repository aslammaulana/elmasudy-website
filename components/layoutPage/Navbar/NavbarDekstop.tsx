"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { navLinks } from "./NavLink";
import { FaHeadset } from 'react-icons/fa';

export default function NavbarDekstop() {
  const logoSrc = "/images/core/elmasudy-logo.svg";
  const title = "Aslam Travel";
  const contactUrl = "https://wa.me/6282298304077";

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // jika scroll ke bawah, sembunyikan navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white shadow-sm hidden md:block transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 ">
        {/* Logo */}
        <Link href="/" className="flex items-center h-[75px]">
          <Image
            src={logoSrc}
            alt="Logo"
            width={220}
            height={64}
            className="object-contain"
          />
        </Link>



        <div className="flex items-center justify-end gap-8 ">
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8  font-semibold">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="text-[#2e526e] hover:text-[#213e53] transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
