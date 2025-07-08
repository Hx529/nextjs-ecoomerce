'use client'

// import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
  { content: <>July Gift for All Members – Enjoy{' '}<b>10% Off</b>{' '}in Our App |{' '}<b>2025JUL10</b></> },
  { content: <>Start shopping on our APP and get{' '}<b>15% OFF</b>{' '}|{' '}<b>WLCMAPP</b></> },
  { content: <><b>10% Off</b>{' '}First Order｜7 Days Only｜Code:{' '}<b>WLCM2MSS</b></> },
  { content: <>Official online store for leading Korean fashion brands</> },
  { content: <>FREE SHIPPING on all orders $200+</> }
];

export default function HeaderBannerText({ className = ""}) {
  const [activeIndex, setActiveIndex] = useState(0); // i 활성화 텍스트

  // f 변경 카운트다운
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className={`relative grid w-full place-items-center min-h-10 py-2 bg-gray-100 ${className}`}>
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
