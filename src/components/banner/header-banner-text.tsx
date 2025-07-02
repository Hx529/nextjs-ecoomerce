'use client'

// import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
{
  content: (
    <>
      July Gift for All Members – Enjoy{'\u00A0'}<b>10% Off</b>{'\u00A0'}in Our App |{'\u00A0'}<b>2025JUL10</b>
    </>
  ),
  // link: "/daily-checkin",
  // icon: (
  //   <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path d="M5.25033 12.1663L9.91699 7.49967L5.25033 2.83301" stroke="#fff" strokeLinecap="square" />
  //   </svg>
  // )
},
{
  content: (
    <>
      Start shopping on our APP and get{'\u00A0'}<b>15% OFF</b>{'\u00A0'}|{'\u00A0'}<b>WLCMAPP</b>
    </>
  ),
},
{
  content: (
    <>
      <b>10% Off</b>{'\u00A0'}First Order｜7 Days Only｜Code:{'\u00A0'}<b>WLCM2MSS</b>
    </>
  )
},
{
  content: (
    <>
      Official online store for leading Korean fashion brands
    </>
  )
},
{
  content: (
    <>
      FREE SHIPPING on all orders $200+
    </>
  )
}
];

export default function HeaderBannerText() {
  const [activeIndex, setActiveIndex] = useState(0); // i 활성화 텍스트

  // f 변경 카운트다운
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="relative grid w-full place-items-center min-h-10 py-2">
      <span className="sr-only">Promotional text</span>
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`relative flex justify-center items-center
            col-start-1 row-start-1
            w-full h-full text-center
            transition-opacity duration-500 easy-in-out
            ${activeIndex === i ? 'z-[1] opacity-100' : '-z-[1] opacity-0'}
          `}
        >
          {banner.content}
          {/* {banner.link ? (
            <>
              <Link href={banner.link} className="flex justify-center items-center">
                {banner.content}
              </Link>
              {banner.icon}
            </>
          ) : (
            <p>{banner.content}</p>
          )} */}
        </div>
      ))}
    </div>
  );
}
