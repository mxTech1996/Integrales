"use client";

import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

import Image from "next/image";
import Link from "next/link";
import { formatNumber, useCart } from "ecommerce-mxtech";
import { FaStar } from "react-icons/fa";
import { LuFlagTriangleRight } from "react-icons/lu";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { dataSite } from "@/data";

const getSrc = (i = number) => {
  if (i === 0) {
    return "/images/ser-01.jpg";
  }
  if (i === 1) {
    return "/images/ser-02.jpg";
  }
  return "/images/ser-03.jpg";
};

export default function Home() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  return (
    <main>
      <Navbar />

      <div className="bg-secondary text-black w-full py-40 px-4 min-h-[950px]">
        <section className="grid grid-cols-2 gap-10 items-center justify-center container mx-auto px-4 ">
          <div className="flex flex-col justify-center h-full">
            <div className="p-8 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                Discover New Horizons with Our Extensive Educational Courses
              </h1>
              <p className=" text-xl mb-8 max-w-3xl">{dataSite.description}</p>

              <div className="w-full flex items-center gap-4">
                <Link href="/#courses">
                  <button className="bg-primary text-white px-8 py-3 text-lg transition-colors">
                    Start Now
                  </button>
                </Link>

                <Link href="/contact-us">
                  <button className="bg-black text-white px-8 py-3 text-lg transition-colors">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Image
            src="/images/chart.svg"
            alt={dataSite?.name}
            width={550}
            height={550}
          />
        </section>
      </div>

      {/* Video Background Section */}
      <section className="relative h-[1000px]">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-40" />

        <div className="relative z-10 flex flex-col justify-center h-full container mx-auto gap-5">
          <h1 className="w-max -skew-x-3 text-6xl font-bold text-white bg-primary px-2 py-1">
            Excel in Leadership and Management
          </h1>

          <p className="text-white text-xl mt-4">
            Mastering leadership and management in financials and marketing is
            crucial in today's competitive business environment. It empowers you
            to drive strategic growth, optimize resources, and lead teams
            effectively. Enhance your decision-making skills, boost your career
            prospects, and become a pivotal force in your organization.
            Understanding these principles allows you to navigate complex
            business landscapes and achieve sustainable success.
          </p>
        </div>
      </section>

      {/* Services */}
      {dataSite?.services?.length > 0 && (
        <div
          className="bg-cover bg-center"
          id="our-services"
          style={{
            backgroundImage: `url(${dataSite.image_hero2})`,
          }}
        >
          <div className="w-full h-full bg-primary bg-opacity-30 text-black py-48">
            <section className="container mx-auto px-4">
              <h1 className="text-4xl uppercase font-bold mb-4 text-white">
                Services
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {dataSite?.services?.map((service, i) => {
                  return (
                    <div
                      className="bg-white text-black border border-neutral-200 p-6"
                      key={i}
                    >
                      <div className="flex flex-col gap-5">
                        <LuFlagTriangleRight size={30} />

                        <div className="flex flex-col gap-2">
                          <h2 className="text-xl font-bold uppercase">
                            {service.title}
                          </h2>

                          <p className="text-gray-800 text-justify">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Products */}
      <section className="container mx-auto px-4 my-20" id="courses">
        <h1 className="text-4xl uppercase font-bold mb-8">Shop</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dataSite?.products?.map?.((course, index) => {
            const existProduct = validateProductInCart(course.id);

            return (
              <div
                key={index}
                className="bg-white border border-primary overflow-hidden flex flex-row-reverse"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  className="w-2/5 h-auto object-cover object-center"
                  width={500}
                  height={500}
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-3xl font-bold">{course.name}</h3>

                    <p className="w-max -skew-x-3 text-xl font-bold text-white bg-primary px-2 py-1">
                      {formatNumber(course?.price)} MXN
                    </p>

                    <p className="text-gray-800 text-sm">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.content
                        .split(",")
                        .slice(0, 5)
                        .map((badge, index) => (
                          <div
                            className="text-white bg-primary px-2 py-1 -skew-x-3"
                            key={index}
                          >
                            <span className="line-clamp-1 text-[10px]">
                              {badge.trim()}
                            </span>
                          </div>
                        ))}
                    </div>
                    <button
                      className="w-full px-4 py-2 transition-colors"
                      onClick={() => handleAddOrRemoveProduct(course.id)}
                      style={{
                        backgroundColor: !existProduct ? "#000" : "#ff2828",
                        color: "white",
                      }}
                    >
                      {!existProduct ? "Buy now" : "Remove course"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* References */}
      <div className="bg-secondary py-24 my-10 text-white" id="references">
        <div className="container mx-auto px-4 my-20">
          <h1 className="text-4xl uppercase font-bold mb-8 text-black">
            Client Testimonials
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {dataSite.references.map((customer, i) => (
              <div
                className="bg-white text-black border border-neutral-200 p-6"
                key={i}
              >
                <div className="flex flex-col gap-5">
                  <LiaQuoteLeftSolid size={40} />

                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold uppercase">
                      {customer.name}
                    </h2>

                    <p className="text-gray-800 text-justify">
                      {customer.description}
                    </p>

                    <div className="flex w-full justify-end">
                      <div className="bg-primary text-white ml-2 px-3 py-2 flex items-center gap-4 w-max -skew-x-3 text-2xl font-bold">
                        <FaStar className="text-yellow-500" /> <span>4.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More information */}
      {dataSite?.info?.length > 0 && (
        <div className="container mx-auto px-4 my-20" id="know-us">
          <h1 className="text-4xl uppercase font-bold mb-8">
            Learn more about us
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {dataSite?.info?.map((info, i) => {
              return (
                <div
                  className="bg-white text-black border border-primary p-6"
                  key={i}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4">
                      <div tw="flex-1">
                        <GrContactInfo size={30} />
                      </div>

                      <h2 className="text-xl font-bold uppercase">
                        {info.title}
                      </h2>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-gray-800 text-justify">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}

      <Footer />
    </main>
  );
}
