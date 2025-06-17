"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

// f 상단 유저 메뉴 데이터 구조
const userMenuData = [
  {
    type: "button",
    key: "lang",
    title: "Language",
    icon: "/images/components/icons/globe.svg",
    label: "United States",
    href: null
  },
  {
    type: "link",
    key: "wish",
    title: "Wish List",
    icon: "/images/components/icons//wish_border.svg",
    href: "/wish"
  },
  {
    type: "link",
    key: "bag",
    title: "Shopping Bag",
    icon: "/images/components/icons/shoppingCart.svg",
    href: "/shopping-bag",
    badge: true
  },
  {
    type: "link",
    key: "user",
    title: "User Profile",
    icon: "/images/components/icons/user.svg",
    href: "/"
  }
];

// f 상단 카테고리 네비게이션 데이터 구조
const mainCategoryNav = [
  { label: "#DIGGING SEOUL", href: "/promotion", className: "hover:text-primary relative notification-dot" },
  { label: "FASHION", href: "/fashion" },
  { label: "BEAUTY", href: "/beauty" },
  { label: "SALE", href: "/sale" },
  { label: "BEST", href: "/best" },
  { label: "NEW", href: "/new" },
  { label: "BRANDS", href: "/brands" },
  { label: "#STYLE MAP", href: "/stylemap" }
];

// f Category Popup 데이터 구조
const categoryMenuData = [
  {
    title: "CLOTHING",
    items: [
      { label: "ALL CLOTHING", href: "/" },
      { label: "Tops", href: "/" },
      { label: "Outerwear", href: "/" },
      { label: "Pants", href: "/" },
      { label: "Dresses & Skirts", href: "/" },
      { label: "Short Sleeves", href: "/" },
      { label: "Long Sleeves", href: "/" },
      { label: "Sweatshirts", href: "/" },
      { label: "Hooded Jackets", href: "/" },
      { label: "Jeans", href: "/" },
      { label: "Shirts & Blouses", href: "/" },
      { label: "Track Pants & Joggers", href: "/" },
    ]
  },
  {
    title: "BAGS",
    items: [
      { label: "ALL BAGS", href: "/" },
      { label: "Shoulder Bags", href: "/" },
      { label: "Messenger & Crossbody Bags", href: "/" },
      { label: "Backpacks", href: "/" },
      { label: "Totes", href: "/" },
      { label: "Canvas Bags", href: "/" },
      { label: "Travel Bags", href: "/" },
      { label: "Belt Bags", href: "/" },
      { label: "Wallets & Cases", href: "/" },
      { label: "Pouches", href: "/" },
      { label: "Sports Bags", href: "/" },
      { label: "Clutches", href: "/" },
      { label: "Bag Accessories", href: "/" },
    ]
  },
  {
    title: "ACCESSORIES",
    items: [
      { label: "ALL ACCESSORIES", href: "/" },
      { label: "Caps & Hats", href: "/" },
      { label: "Belts", href: "/" },
      { label: "Key Rings & Key Cases", href: "/" },
      { label: "Fashion Accessories", href: "/" },
      { label: "Necklace & Pendants", href: "/" },
      { label: "Earrings", href: "/" },
      { label: "Bracelets", href: "/" },
      { label: "Rings", href: "/" },
      { label: "Sunglasses", href: "/" },
      { label: "Glasses", href: "/" },
      { label: "Tech & Life", href: "/" },
      { label: "Pets", href: "/" }
    ]
  },
  {
    title: "SHOES",
    items: [
      { label: "ALL SHOES", href: "/" },
      { label: "Sneakers", href: "/" },
      { label: "Boots", href: "/" },
      { label: "Flats", href: "/" },
      { label: "Heels", href: "/" },
      { label: "Sandals", href: "/" },
      { label: "Loafers", href: "/" },
      { label: "Slides", href: "/" },
      { label: "Socks", href: "/" }
    ]
  },
  {
    title: "ACTIVE",
    items: [
      { label: "ALL ACTIVE", href: "/" },
      { label: "Activewear", href: "/" },
      { label: "Leggings", href: "/" },
      { label: "Sports Bras", href: "/" },
      { label: "Jackets", href: "/" },
      { label: "Shorts", href: "/" },
      { label: "Tanks", href: "/" },
      { label: "Sweatshirts", href: "/" },
      { label: "Accessories", href: "/" }
    ]
  },
  {
    title: "BEAUTY",
    items: [
      { label: "ALL BEAUTY", href: "/" },
      { label: "Skincare", href: "/" },
      { label: "Makeup", href: "/" },
      { label: "Haircare", href: "/" },
      { label: "Fragrance", href: "/" },
      { label: "Tools & Brushes", href: "/" },
      { label: "Bath & Body", href: "/" },
      { label: "Nails", href: "/" },
      { label: "Men's Grooming", href: "/" }
    ]
  }
]

export default function Header() {
  const [ isVisiable, setIsVisiable ] = useState(false); // i 팝업 표시 토글
  const [popupLeft, setPopupLeft] = useState(0); // i 팝업 중앙 정렬 참조값
  const categoryRef = useRef<HTMLDivElement>(null); // i 카테고리 네비게이션바 위치

  /**
   *  useEffect: 카테고리 네비게이션바가 보일 때 팝업 위치를 계산하여 중앙 정렬
   *  @param {boolean} isVisiable - 팝업 표시 여부
   *  @param {HTMLDivElement} categoryRef - 카테고리 네비게이션바의 참조
   *  @returns {void}
   *  @description 카테고리 네비게이션바가 보일 때, 해당 요소의 위치를 계산하여 팝업을 중앙 정렬합니다.
   */
  useEffect(() => {
    if (isVisiable && categoryRef.current) {
      const rect = categoryRef.current.getBoundingClientRect();
      setPopupLeft(rect.left);
    }
  }, [isVisiable]);

  return (
    <>
      <header className="w-full flex flex-col items-center fixed bg-white z-10 h-[var(--header-height)]">
        <h3 className="sr-only">Header</h3>
        <div className="max-w-7xl w-full h-[70px] flex justify-between items-center">
          {/* Search */}
          <div className="relative rounded-sm bg-[rgb(245,246,247)] cursor-pointer flex items-center w-2xs h-1/2 gap-2 px-3">
            <Image src="/images/components/icons/search.svg" alt="search icon" width={18} height={18} />
            <span className="text-text-placeholder">Search</span>
          </div>
          {/* Logo */}
          <h1 className="w-[6.25rem] h-full flex items-center justify-center">
            <Link href="/" className="relative w-full h-full">
              <Image src="/images/components/header/hxinsa.svg" alt="Brand Logo" className="object-contain" fill />
            </Link>
          </h1>
          {/* User */}
          <div>
            <ul className="flex items-center gap-3">
              {userMenuData.map((item) => (
                <li key={item.key}>
                  {item.type === "button" ? (
                    <button className="relative cursor-pointer hover:text-primary flex items-center gap-1" title={item.title}>
                      <Image src={item.icon} alt={item.title} width={16} height={16} />
                      <p id="location">{item.label}</p>
                    </button>
                  ) : item.type === "link" && item.key === "bag" ? (
                    <Link href={item.href!} className="relative block hover:text-primary" title={item.title}>
                      <Image src={item.icon} alt={item.title} width={30} height={30} />
                      <span id="shoppingList" className="block absolute bottom-0 right-0 bg-black min-w-[1.0625rem] rounded-full text-white text-xs text-center px-1">0</span>
                    </Link>
                  ) : (
                    <Link href={item.href!} className="relative hover:text-primary" title={item.title}>
                      <Image src={item.icon} alt={item.title} width={30} height={30} />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Category */}
        <nav className="max-w-7xl w-full relative h-12">
          <h3 className="sr-only">Category</h3>
          <ul className="flex items-center gap-10 max-w-7xl w-full h-full font-bold text-sm relative">
            <div
              className="relative h-full flex items-center"
              // @ 해당 영역에 마우스가 접근 시, 팝업이 나타나도록 설정
              onMouseEnter={() => setIsVisiable(true)}
              onMouseLeave={() => setIsVisiable(false)}
              ref={categoryRef}
            >
              <li className="h-full flex items-center custom-expanded-weight custom-before-division">
                <Link href="/" className="relative hover:text-primary flex items-center gap-3">
                  <Image src="/images/components/icons/hamburgerMenu.svg" alt="Hamburger Menu" width={18} height={16} />
                  <p>CATEGORY</p>
                </Link>
              </li>
              {/* 팝업 및 배경을 div 내부에서 조건부 렌더링 */}
              {isVisiable && (
                <>
                  {/* Category Popup */}
                  <div
                    className={`absolute left-0 top-full pt-8 pb-10 font-normal bg-white w-screen z-20`}
                    style={{ left: `-${popupLeft}px` }}
                  >
                    <ul className="m-auto w-7xl flex justify-between gap-10">
                      {categoryMenuData.map(cat => (
                        <li key={cat.title}>
                          <p className="font-bold mb-2">{cat.title}</p>
                          <ul className="flex flex-col gap-2">
                            {cat.items.map(item => (
                              <li key={item.label}>
                                <Link className="block w-full hover:underline" href={item.href}>{item.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
            {/* 나머지 카테고리 메뉴 */}
            {mainCategoryNav.map((item) => (
              <li key={item.label} className={`h-full flex items-center custom-expanded-weight`}>
                <Link className={item.className || ""} href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* 카테고리 팝업 활성 화 시, 전체화면 배경 (모달 배경) */}
      {
        isVisiable && (
          <div id="categoryPopupBG" className="fixed inset-0 w-screen h-screen bg-gray-500 opacity-70 -z-10"></div>
        )
      }
    </>
  );
}
