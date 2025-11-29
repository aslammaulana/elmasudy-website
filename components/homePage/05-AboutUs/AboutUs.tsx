"use client";
import Image from "next/image";
import React, { useState } from "react";

const AboutUs = () => {
    const logoSrc = "/images/profile/Elmasudy1.jpg";


    return (
        <section className="relative w-full px-5 py-10 text-white overflow-hidden">
            {/* Content */}
            <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10 py-10 md:py-0">
                {/* Kolom kiri */}
                <div className="flex flex-col gap-6 text-left md:text-left basis-1/2">

                <div className="border-l-[25px] h-7 pl-5  border-[#fbc102] ">
                    <p className="text-[15px] font-semibold text-[#253c56]  font-lato ">
                        ABOUT US
                    </p>
                </div>

                {/* Context */}
                    <div className="flex flex-col justify-center items-left pt-5">
                        <p className="text-[28px] md:text-[38px] text-left font-extrabold text-[#253c56] font-lato uppercase leading-tight mb-[-20px] md:mb-[0px]">
                            GREAT HISTORY OF OUR institution
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
                    <div className="border-l-3 border-[#fbc102] pl-8 ">
                        <p className=" text-[15px] text-[#898989] font-lato leading-relaxed">
                            LT3Q El-Mas&apos;udy adalah lembaga pendidikan Islam yang berfokus pada pembelajaran Al-Quran dan hadits. Lembaga ini bertujuan untuk membantu umat Islam dalam memahami dan mengamalkan ajaran Islam secara sistematis dan konsisten. Kami menawarkan program pendidikan berkualitas yang meliputi pengajaran membaca Al-Quran (tahfidz dan tahsin), pemahaman Al-Quran (tafsir), dan hadits.
                            <br /><br />
                            Selain program pendidikan rutin, kami juga menawarkan program daurah, yang bertujuan untuk meningkatkan kecintaan dan pemahaman umat Islam terhadap Al-Qur&apos;an dan hadits. Program daurah ini dilakukan secara rutin dan berkala, dengan materi yang berbeda setiap kali pelaksanaannya. Selain itu, kami juga mengadakan acara-acara islami lainnya, seperti pengajian, seminar, dan kegiatan sosial.
                            <br /><br />
                            Dengan visi dan misi yang kuat, serta program dan fasilitas yang berkualitas, LT3Q El-Mas&apos;udy siap memberikan kontribusi positif bagi umat Islam dalam memahami dan mengamalkan ajaran Islam secara konsisten dan benar.
                        </p>
                    </div>
                </div>

                {/* Kolom kanan */}
                <div className="flex justify-center items-center basis-1/2 ">
                    <div className="relative flex justify-center items-center mb-[-40px] w-full">
                        <Image
                            src={logoSrc}
                            alt="Elmasudy Hero"
                            width={600}
                            height={600}
                            className="object-contain w-auto max-w-[100%] md:max-w-[100%] h-auto pl-10"
                            priority
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
