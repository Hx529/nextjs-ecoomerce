'use client';
import HeaderBannerText from "@/components/banner/header-banner-text";
import useSearchKeywordSaver from "@/hooks/SearchKeywordSaver";
import { useState } from "react";

const SearchPageMetadata = [
  "All",
  "Tops",
  "Overwear",
  "Pants",
  "Dresses & Skirts",
  "Accessories",
  "Bags",
  "Shoes",
  "Active",
  "Underwear"
]

export default function SearchPage() {
  const keyword = useSearchKeywordSaver();

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <HeaderBannerText className="mb-13" />
      <span className="sr-only">Search Page</span>
      <section className="main-container">
        <h2 className="mb-4 font-bold text-[1.75rem]">Search results for &apos;{keyword}&apos;</h2>
        <div className="flex gap-2">
          {SearchPageMetadata.map((item , i) => (
            <button  key={i} className={`border rounded-full h-8 px-3 text-sm border-gray-300
              ${activeCategory === item ? 'bg-black text-white' : ''}`}
              onClick={() => setActiveCategory(item)}
              >{item}</button>
          ))}
        </div>
      </section>
    </>
  )
}
