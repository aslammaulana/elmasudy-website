"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const logoSrc = "/images/profile/Elmasudy1.jpg";

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full px-5 py-8 text-white overflow-hidden">

      <div className="relative w-[100%] md:w-[87%] p-2 md:p-0 mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10 py-10 md:py-0">

        {/* DIV UTAMA 1 */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="basis-1/2 flex flex-col gap-6 text-left md:text-left"
        >
          <div className="border-l-[25px] h-7 pl-5 border-[#fbc102]">
            <p className="text-[15px] font-semibold text-[#253c56] font-lato">
              ABOUT US
            </p>
          </div>

          <div className="flex flex-col justify-center items-left pt-5">
            <p className="text-[28px] md:text-[38px] font-extrabold text-[#253c56] font-lato uppercase leading-tight mb-[-20px] md:mb-0">
              GREAT HISTORY OF OUR institution
            </p>

            <div className="w-full py-10 flex justify-left">
              <div
                className="h-5 w-[25%] md:w-[30%]"
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

          <div className="border-l-3 border-[#fbc102] pl-8">
            <p className="text-[15px] text-[#898989] font-lato leading-relaxed">
              LT3Q El-Mas&apos;udy adalah lembaga pendidikan Islam yang berfokus pada pembelajaran Al-Quran dan hadits. Lembaga ini bertujuan untuk membantu umat Islam dalam memahami dan mengamalkan ajaran Islam secara sistematis dan konsisten. Kami menawarkan program pendidikan berkualitas yang meliputi pengajaran membaca Al-Quran, pemahaman Al-Quran, dan hadits.
              <br /><br />
              Selain program pendidikan rutin. Kami juga menawarkan daurah untuk meningkatkan pemahaman umat terhadap Al-Quran dan hadits.
              <br /><br />
              LT3Q El-Mas&apos;udy berkomitmen memberikan kontribusi positif bagi umat Islam.
            </p>
          </div>
        </motion.div>

        {/* DIV UTAMA 2 */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="basis-1/2 flex justify-center items-center"
        >
          <div className="relative flex justify-center items-center mb-[-40px] w-full">
            <Image
              src={logoSrc}
              alt="Elmasudy Hero"
              width={600}
              height={600}
              className="object-contain w-auto max-w-[100%] md:max-w-[100%] h-auto mb-10 md:mb-0 pl-0 md:pl-10"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* DIV UTAMA 3 */}
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className=""
      ></motion.div>

    </section>
  );
}
