"use client";
import React, { useState } from "react";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {


    return (
        <section className="relative w-full px-5 py-10 text-white overflow-hidden mt-20">
            {/* Content */}
            <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10 py-10 md:py-0">
                <div className="flex flex-col justify-start items-start">
                    <div className="border-l-[25px] h-7 pl-5  border-[#fbc102] ">
                        <p className="text-[15px] font-semibold text-[#253c56]  font-lato ">
                            Gallery
                        </p>
                    </div>

                    {/* Context */}
                    <div className="flex flex-col justify-start items-start pt-5">
                        <p className="text-[28px] md:text-[38px] text-left font-extrabold text-[#253c56] font-lato uppercase leading-tight mb-[-20px] md:mb-[0px]">
                            Perjalanan para Santri
                        </p>
                        <div className="w-full py-10 flex justify-left">
                            <div
                                className="h-5 w-[25%] md:w-[30%] "
                                style={{
                                    backgroundImage:
                                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 240 24' fill='none' stroke='%23fbc102' stroke-width='3' stroke-linecap='square'%3E%3Cpolyline points='0,18 12,6 24,18 36,6 48,18 60,6 72,18 84,6 96,18 108,6 120,18 132,6 144,18 156,6 168,18 180,6 192,18 204,6 216,18 228,6 240,18' /%3E%3C/svg%3E\")",
                                    backgroundRepeat: "repeat-x",
                                    backgroundPosition: "center",
                                    backgroundSize: "auto 100%"
                                }}
                            ></div>
                        </div>
                    </div>
                    <GalleryGrid/>
                </div>
            </div>

        </section>
    );
};

export default Gallery;
