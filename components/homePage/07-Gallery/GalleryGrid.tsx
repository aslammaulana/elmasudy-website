"use client";

import Image from "next/image";
import db from "@/data/images/gallery.json";
import { gallery } from "@/models/gallery";
import { useState } from "react";
import {  HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const GalleryGrid = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [imgPop, setImgPop] = useState<boolean>(false);

  const swipeImg = (moveType: "prv" | "nxt") => {
    if (moveType === "prv") {
      if (selectedImg === 0) setSelectedImg(db.gallery.length - 1);
      else setSelectedImg(selectedImg - 1);
    }

    if (moveType === "nxt") {
      if (selectedImg === db.gallery.length - 1) setSelectedImg(0);
      else setSelectedImg(selectedImg + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-10">
        {db.gallery.map((loc: gallery, i: number) => (
          <button
            key={i}
            onClick={() => {
              setSelectedImg(i);
              setImgPop(true);
            }}
            className="relative cursor-pointer group"
          >
            <Image
              src={`/images/gallery/${loc.img}`}
              alt={loc.location}
              width={300}
              height={250}
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
          </button>
        ))}
      </div>

      {imgPop && (
        <div className="fixed inset-0 bg-[#000000d8] bg-opacity-85 z-50 flex justify-between items-center gap-3">
          <button
            onClick={() => setImgPop(false)}
            className="absolute top-2 right-2 cursor-pointer text-[#ffffffc9]"
          >
            <IoClose className="w-12 h-12" />
          </button>

          <button
            onClick={() => swipeImg("prv")}
            className="bg-green rounded-full ml-2 hover:translate-x-2 transition-all cursor-pointer text-[#ffffffc9]"
          >
            <HiChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          <div>
            <Image
              src={`/images/gallery/${db.gallery[selectedImg].img}`}
              alt={db.gallery[selectedImg].location}
              width={650}
              height={500}
              className="w-full max-w-[650px] h-auto"
            />
            <h3 className="text-center text-white font-bold uppercase text-3xl mt-3">
              {db.gallery[selectedImg].location}
            </h3>
          </div>

          <button
            onClick={() => swipeImg("nxt")}
            className="bg-green rounded-full mr-2 hover:-translate-x-2 transition-all cursor-pointer text-[#ffffffc9]"
          >
            <HiChevronRight className="w-10 h-10 md:w-16 md:h-16" />
          </button>

          <nav className="absolute hidden left-0 right-0 bottom-5 lg:flex justify-center gap-3 px-4">
            {db.gallery.map((loc: gallery, i: number) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`hover:-translate-y-2 transition-all cursor-pointer ${selectedImg === i ? "-translate-y-2" : ""}`}
              >
                <Image
                  src={`/images/gallery/${loc.img}`}
                  alt={loc.location}
                  width={80}
                  height={80}
                />
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
