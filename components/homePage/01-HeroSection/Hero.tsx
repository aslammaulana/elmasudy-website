"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import { heroBackground } from "@/data/images/heroImages";

const Hero = () => {
  const contactUrl = "https://wa.me/6281234567890";
  const logoSrc = "/images/core/hero-section.png";

  return (
    <section className="relative w-full px-5 py-10 text-white overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Background Wrapper */}
        <div className="absolute inset-0 -z-20 bg-[#2f649c]" />

        {/* Background image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroBackground.src})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            backgroundPosition: "top left",
            opacity: 0.2, // hanya untuk image
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-10 md:py-0">

        {/* Kolom kiri */}
        <div className="flex flex-col gap-6 text-center md:text-left basis-1/2">
          <p className="leading-relaxed font-bold text-[14px] md:text-[16px] uppercase text-[#daaf22]">
            Lembaga Tarbiyyah Islamiyah
          </p>
          <h1 className="text-[36px] md:text-[55px] font-extrabold font-lato uppercase leading-tight mb-[0px] md:mb-[0px]">
            Pusat Kajian Tahsin, Tahfidz & Tafsir Al Qur&apos;an
          </h1>
          <div className="border-l-3 border-[#daaf22] pl-5 ">
            <p className="leading-relaxed text-[13px] md:text-[15px] text-gray-200">
              Bimbingan Tarbiyyah Islamiyyah Terbaik Buat Kamu.
              Yukk Belajar Mendalami Luasnya Ilmu Al-Qur&apos;an dari Dasar hingga Lanjutan Bersama Kami.

              Daftar Sekarang!
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <Link
              href={contactUrl}
              target="_blank"
              className="flex items-center gap-2  bg-[#0000002f] px-6 py-3 text-[#ffffff] font-semibold text-[14px] hover:bg-[#418064] border-2 border-[#daaf22] hover:text-white transition-colors"
            >
              <FaHeadset />
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="flex justify-center items-center basis-1/2 ">
          <div className="relative flex justify-center items-center mb-[-80px] md:mb-[-40px]  w-full">
            <Image
              src={logoSrc}
              alt="Elmasudy Hero"
              width={600}
              height={600}
              className="object-contain w-auto max-w-[80%] md:max-w-[80%] h-auto"
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
