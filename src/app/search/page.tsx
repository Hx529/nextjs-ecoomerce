'use client';
import { useState } from "react";

import HeaderBannerText from "@/components/banner/header-banner-text";
import useSearchKeywordSaver from "@/hooks/SearchKeywordSaver";
import { products } from "@/data/products";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  isOnSale?: boolean;
  salePrice?: number;
  category: string;
  thumbnailUrl: string;
  imageUrl: string;
}

type SearchResult = Product & { matchCount?: number };

const SearchPageMetadata: string[] = [
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

/**
 * Products 배열에서 keyword와 일치하는 상품을 검색하는 함수
 * 정확히 일치하는 상품을 먼저 찾고, 그 다음 부분 일치하는 상품을 찾는다.
 * 부분 일치하는 상품은 matchCount 속성을 추가하여, keyword가 몇 번 등장하는지 카운트한다.
 * 정확히 일치하는 상품은 matchCount가 undefined로 설정된다.
 * 정확히 일치하는 상품은 먼저 표시하고, 그 다음 부분 일치하는 상품을 matchCount를 기준으로 내림차순으로 정렬하여 표시한다.
 * 검색어가 없으면 빈 배열을 반환한다.
 * @param products Product[]
 * @param keyword string
 * @returns SearchResult[]
 */
function searchProducts(products: Product[], keyword: string): SearchResult[] {
  if (!keyword) return [];
  const exact = products.filter(p => p.name === keyword);
  const partial = products
    .filter(p => p.name !== keyword && p.name.includes(keyword))
    .map(p => ({
      ...p,
      matchCount: p.name.split(keyword).length - 1
    }))
    .sort((a, b) => b.matchCount - a.matchCount);
  return [...exact, ...partial];
}

/**
 * 할인율 계산 함수
 * @param price number
 * @param salePrice number
 * @returns number
 */
function getDiscountPercent(price: number, salePrice: number): number {
  return Math.round(((price - salePrice) / price) * 100);
}

export default function SearchPage() {
  const keyword = useSearchKeywordSaver();
  const [activeCategory, setActiveCategory] = useState("All");
  const results: SearchResult[] = searchProducts(products, keyword ?? "");

  return (
    <>
      <HeaderBannerText className="mb-13" />
      <span className="sr-only">Search Page</span>
      <section className="main-container">
        <h2 className="mb-4 font-bold text-[1.75rem]">Search results for &apos;{keyword}&apos;</h2>
        <div className="flex gap-2 mb-6">
          {/* 검색 카테고리 */}
          {SearchPageMetadata.map((item , i) => (
            <button  key={i} className={`border rounded-full h-8 px-3 text-sm border-gray-300
              ${activeCategory === item ? 'bg-black text-white' : ''}`}
              onClick={() => setActiveCategory(item)}
              >{item}</button>
          ))}
        </div>
        {/* 검색 결과 리스트 */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.length === 0 ? (
            <li className="col-span-full text-gray-400">검색 결과가 없습니다.</li>
          ) : (
            // i 카테고리(activeCategory)가 'All' 인 경우와, 해당 카테고리인 상품만 필터링하여 표시
            results
            .filter(product => activeCategory === "All" || product.category === activeCategory)
            .map(product => (
              <li key={product.id} className="flex flex-col items-start w-[230px]">
                <Image
                  src={product.thumbnailUrl}
                  alt={product.name}
                  className="self-center object-cover mb-2"
                  width={230}
                  height={280}
                  // TODO: 옵티마이징 기능 설정하기 Next.js 15 버전 이후로는, remotePatterns를 이용한다고 함
                  unoptimized
                />
                <span className="font-semibold mb-1">{product.name}</span>
                {product.isOnSale && product.salePrice ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through">${product.price.toLocaleString()}</span>
                      <span className="text-sm font-semibold">
                        {getDiscountPercent(product.price, product.salePrice)}%
                      </span>
                    </div>
                    <span className="text-red-600">${product.salePrice.toLocaleString()}</span>
                  </>
                ) : (
                  <span>${product.price.toLocaleString()}</span>
                )}
              </li>
            ))
          )}
        </ul>
      </section>
    </>
  )
}
