import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    const logoSrc = "/images/core/logo-white.png";
    const contactUrl = "https://wa.me/6281234567890";

    return (
        <div className='w-full bg-[#15192b] mt-20  pt-[70px] pb-[40px]'>
            <div className="w-full md:w-[87%] p-4 md:p-0 m-auto flex flex-col md:flex-row mb-2 gap-6 md:gap-0">

                {/* A1 */}
                <div className="flex flex-col justify-start items-center md:items-start basis-1/2 text-center md:text-left">
                    <Link href="/">
                        <Image
                            src={logoSrc}
                            alt="Logo"
                            width={230}
                            height={80}
                            className="object-contain"
                        />
                    </Link>

                    <p className="text-[13px] leading-[25px] font-medium text-[#ffffffee] max-w-[500px]">
                        LT3Q El-Masudy adalah sebuah lembaga tarbiyyah islamiyah, kami mendukung pemuda-pemudi indonesia dengan memberikan kajian-kajian islamiyyah dan ilmiyah.
                        <br /><br />
                        Jl. H. Usman, Lr. Rawa Indah, No. 02, Desa Jeulingke, Kec. Syiah Kuala, Banda Aceh

                    </p>
                </div>

                {/* A2 */}
                <div className="flex flex-col justify-end items-center md:items-end basis-1/2 text-center md:text-right gap-4">
                    <div className="flex justify-center md:justify-end items-center gap-3 mt-[30px] md:mt-[0px]">
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full  bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href={contactUrl}
                            target="_blank"
                            className="flex items-center justify-center rounded-full  bg-[#ffffff2a] p-3 text-[#fdfdfd] text-[22px] hover:bg-[#418064] hover:text-white transition-colors"
                        >
                            <FaTiktok />
                        </Link>
                    </div>
                    <p className="text-[13px] leading-[25px] font-medium text-[#ffffffee] max-w-[400px]">
                        Jl. H. Usman, Lr. Rawa Indah, No. 02, Desa Jeulingke, Kec. Syiah Kuala, Banda Aceh.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-[87%] p-4 md:p-0 m-auto flex flex-col gap-6 md:gap-0  justify-start items-center md:items-start ">
                <div className="bg-[#ffffff7a] w-full h-[2px] my-[10px] md:my-[30px]"></div>
                <p className="text-[13px] font-medium text-[#ffffffee] max-w-[400px]">
                    Copyright ©2022 Elmasudy | Powered by PenaDevs
                </p>
            </div>
        </div>
    )
}
