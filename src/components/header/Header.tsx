"use client";

// import HeaderBannerText from "@/components/banner/header-banner-text";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";

// i svg
import SearchIcon from "@/assets/icons/search.svg";
import HamburgerMenuIcon from "@/assets/icons/hamburgerMenu.svg";
import CloseIcon from "@/assets/icons/close.svg";

// f 상단 유저 메뉴 데이터 구조
import GlobeIcon from "@/assets/icons/globe.svg";
import WishIcon from "@/assets/icons/wish_border.svg";
import CartIcon from "@/assets/icons/shoppingCart.svg";
import UserIcon from "@/assets/icons/user.svg";

const userMenuData = [
	{
		type: "button",
		key: "lang",
		title: "Language",
		icon: GlobeIcon,
		label: "United States",
		href: null,
	},
	{
		type: "link",
		key: "wish",
		title: "Wish List",
		icon: WishIcon,
		href: "/wish",
	},
	{
		type: "link",
		key: "bag",
		title: "Shopping Bag",
		icon: CartIcon,
		href: "/shopping-bag",
		badge: true,
	},
	{
		type: "link",
		key: "user",
		title: "User Profile",
		icon: UserIcon,
		href: "/",
	},
];

// f 상단 카테고리 네비게이션 데이터 구조
const mainCategoryNav = [
	{
		label: "#DIGGING SEOUL",
		href: "/promotion",
		className: "hover:text-primary relative notification-dot",
	},
	{ label: "FASHION", href: "/fashion" },
	{ label: "BEAUTY", href: "/beauty" },
	{ label: "SALE", href: "/sale" },
	{ label: "BEST", href: "/best" },
	{ label: "NEW", href: "/new" },
	{ label: "BRANDS", href: "/brands" },
	{ label: "#STYLE MAP", href: "/stylemap" },
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
		],
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
		],
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
			{ label: "Pets", href: "/" },
		],
	},
	{
		title: "SHOES",
		items: [
			{ label: "ALL SHOES", href: "/" },
			{ label: "Sneakers", href: "/" },
			{ label: "Oxfords & Brogues", href: "/" },
			{ label: "Loafers", href: "/" },
			{ label: "Boots", href: "/" },
			{ label: "Heels & Pumps", href: "/" },
			{ label: "Flats", href: "/" },
			{ label: "Sandals & Slippers", href: "/" },
			{ label: "Flip-flops", href: "/" },
			{ label: "Mules", href: "/" },
			{ label: "Sports Shoes", href: "/" },
		],
	},
	{
		title: "ACTIVE",
		items: [
			{ label: "ALL ACTIVEWEAR", href: "/" },
			{ label: "Swimwear & Beachwear", href: "/" },
			{ label: "Sports Tops", href: "/" },
			{ label: "Sports Pants", href: "/" },
			{ label: "Sports Outerwear", href: "/" },
			{ label: "Sports Skirts", href: "/" },
			{ label: "Sports Bags", href: "/" },
			{ label: "Sports Hats", href: "/" },
			{ label: "Sports Gear", href: "/" },
			{ label: "Sporting Goods", href: "/" },
			{ label: "Sports Shoes", href: "/" },
			{ label: "Sports Dresses", href: "/" },
		],
	},
	{
		title: "BEAUTY",
		items: [
			{ label: "ALL BEAUTY", href: "/" },
			{ label: "Skincare", href: "/" },
			{ label: "Facial Masks", href: "/" },
			{ label: "Base Makeup", href: "/" },
			{ label: "Lip Makeup", href: "/" },
			{ label: "Eye Makeup", href: "/" },
			{ label: "Hair Care", href: "/" },
			{ label: "Cleansers", href: "/" },
			{ label: "Body Care", href: "/" },
			{ label: "Beauty Devices & Tools", href: "/", new: true },
		],
	},
];

// f Search 검색 순위 (고정 데이터)
const SearchedData = {
  "SearchedBrands": [
    "MUSINSA STANDARD",
    "LEMAIN SECOND",
    "MUSINSA STANDARD WOMAN",
    "LIKE THE MOST",
    "GAKKAI UNIONS",
    "TRAVEL",
    "NINEZ",
    "SIGNATURE",
    "AGOD",
    "DIMITRI BLACK",
  ],
  "Popular": [
    "glowny",
    "jeans",
    "Baggy jeans",
    "sweatpants",
    "Hoodie",
    "jorts",
    "shorts",
    "tank top",
    "jersey",
    "Jacket",
  ]
};

export default function Header() {
  const router = useRouter(); // i React Hook

  // i 높이
  const [headerHeight, setHeaderHeight] = useState(0);
  const CATEGORY_HEIGHT = 456;

	const [isVisiable, setIsVisiable] = useState(false); // i 카테고리 팝업 표시
	const [isSearchOpen, setIsSearchOpen] = useState(false); // i 검색창 표시
	const [searchValue, setSearchValue] = useState(""); // i 검색어 값
	const [popupLeft, setPopupLeft] = useState(0); // i 카테고리 팝업 중앙 위치 정렬용 값
	const categoryRef = useRef<HTMLDivElement>(null); // i 네비게이션 카테고리 DOM 위치 Ref
  const [searchListVisible, setSearchListVisible] = useState(false); // i 검색 창 목록 표시
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // i 검색 기록

  // f 브라우저 전용 로직 (typeof window), 검색순위 트랜지션, 검색 기록
  useEffect(() => {
    // 브라우저 전용 로직 체크
    if (typeof window !== "undefined") {
      // 헤더 높이 설정
      const px = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
      setHeaderHeight(parseInt(px, 10));
    }

    // 검색창이 열릴 때 검색 기록을 불러오고, 검색 목록 표시
    if (isSearchOpen) {
      const t = setTimeout(() => setSearchListVisible(true), 10);
      if (typeof window !== 'undefined') {
        const data = localStorage.getItem("recentSearches");
        if (data) setRecentSearches(JSON.parse(data));
      }
      return () => clearTimeout(t);
    } else {
      setSearchListVisible(false);
    }
  }, [isSearchOpen]);

  // f 카테고리 팝업 중앙 정렬용 effect
  useEffect(() => {
    if (isVisiable && categoryRef.current) {
      const rect = categoryRef.current.getBoundingClientRect();
      setPopupLeft(rect.left);
    }
  }, [isVisiable]);

  // f 검색 기록 제거
  const handleDelete = (idx: number) => {
    const prev = JSON.parse(localStorage.getItem("recentSearches") || '[]');
    const next = prev.filter((_: string, i: number) => i !== idx);
    localStorage.setItem("recentSearches", JSON.stringify(next));
    setRecentSearches(next);
  }

  // f 검색 이동
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/search?keyword=${encodeURIComponent(searchValue)}`);
      setSearchValue("");
      setIsSearchOpen(false);
    }
  }

	return (
		<>
			<header
				className={`fixed top-0 w-full flex flex-col items-center bg-white z-10 h-[var(--header-height)]`}
			>
        <section className="main-container">
          <h3 className="sr-only">Header</h3>
          <div className="h-[70px] flex justify-between items-center">
            {/* Search */}
            <div
              className="relative rounded-sm bg-search cursor-pointer flex items-center w-2xs h-1/2 gap-2 px-3"
              onClick={() => setIsSearchOpen(true)}
            >
              <SearchIcon title="search icon" className="w-[18px] h-[18px]" />
              <span className="text-placeholder">Search</span>
            </div>
            {/* Logo */}
            <h1 className="w-[6.25rem] h-full flex items-center justify-center">
              <Link href="/" className="relative w-full h-full">
                <Image
                  src="/images/components/header/hxinsa.svg"
                  alt="Brand Logo"
                  className="object-contain"
                  fill
                />
              </Link>
            </h1>
            {/* User */}
            <div>
              <ul className="flex items-center gap-3">
                {userMenuData.map((item) => (
                  <li key={item.key}>
                    {item.type === "button" ? (
                      <button
                        type="button"
                        className="relative cursor-pointer hover:text-primary flex items-center gap-1"
                        title={item.title}
                      >
                        <item.icon />
                        <p id="location">{item.label}</p>
                      </button>
                    ) : item.type === "link" && item.key === "bag" ? (
                      <Link
                      href={item.href!}
                      className="relative block hover:text-primary"
                      title={item.title}
                      >
                      <item.icon />
                        <span
                          id="shoppingList"
                          className="block absolute bottom-0 right-0 bg-black min-w-[1.0625rem] rounded-full text-white text-xs text-center px-1"
                        >
                          0
                        </span>
                      </Link>
                    ) : (
                      <Link
                        href={item.href!}
                        className="relative hover:text-primary"
                        title={item.title}
                      >
                        <item.icon />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Category */}
          <nav className="w-full relative h-12">
            <h3 className="sr-only">Category</h3>
            <ul className="flex items-center gap-10 w-full h-full font-bold text-sm relative">
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsVisiable(true)}
                onMouseLeave={() => setIsVisiable(false)}
                ref={categoryRef}
              >
                <li className="h-full flex items-center custom-expanded-weight custom-before-division">
                  <Link
                    href="/"
                    className="relative hover:text-primary flex items-center gap-3"
                  >
                    <HamburgerMenuIcon title="hamburger menu" className="w-[18px] h-[16px]" />
                    <p>CATEGORY</p>
                  </Link>
                </li>
                {/* 팝업 및 배경을 div 내부에서 조건부 렌더링 */}
                {isVisiable && (
                  <div
                    className={`absolute left-0 top-full pt-8 pb-10 font-normal bg-white w-screen z-20`}
                    style={{ left: `-${popupLeft}px` }}
                  >
                    <ul className="m-auto w-7xl flex justify-between gap-10">
                      {categoryMenuData.map((cat) => (
                        <li key={cat.title}>
                          <p className="font-bold mb-2">{cat.title}</p>
                          <ul className="flex flex-col gap-2">
                            {cat.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  className="block w-full hover:underline"
                                  href={item.href}
                                >
                                  {item.label}
                                  {item.new && (
                                    <span className="absolute -translate-y-1 ml-1 pointer-events-none text-xs text-red-500">
                                      New
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* 나머지 카테고리 메뉴 */}
              {mainCategoryNav.map((item) => (
                <li
                  key={item.label}
                  className={`h-full flex items-center custom-expanded-weight`}
                >
                  <Link className={item.className || ""} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
			</header>
			{/* 카테고리 팝업 또는 검색창 활성화 시, 전체화면 배경 (모달 배경) */}
			{(isVisiable || isSearchOpen) && (
				<div
					id="categoryPopupBG"
					className="fixed inset-0 w-screen h-screen bg-gray-500 opacity-70"
					onClick={() => {
						setIsVisiable(false);
						setIsSearchOpen(false);
					}}
				></div>
			)}
			{/* 검색창 오버레이 */}
			{isSearchOpen && (
				<aside className="fixed left-0 top-0 w-full pt-3 pb-4 z-50 bg-white bg-opacity-95"
          style={{ height: `${headerHeight + CATEGORY_HEIGHT}px` }}
        >
					<section className="main-container">
            <form onSubmit={handleSearch} className="relative overflow-hidden mb-6 pr-3 flex gap-6 bg-search group">
              <SearchIcon title="search icon" className="absolute left-2 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-placeholder
              transition-all duration-100
              group-focus-within:-left-4"/>
              <input type="text" placeholder="Search by Brands, Product or Category"
                className="w-full p-2 pl-8 text-sm
                          transition-all duration-100
                          focus:outline-none group-focus-within:pl-2"
                autoFocus
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {/* Input에 텍스트 입력 시, input 값 제거하는 X 버튼 출력 */}
              { searchValue !== "" && <button type="button" className="cursor-pointer" onClick={() => setSearchValue('')}>
                <CloseIcon title="close" className="block rounded-full bg-gray-200 w-[18px] h-[18px]" />
                </button> }
            </form>
            <button
              type="button"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setIsSearchOpen(false)}
            >
              <CloseIcon title="close" className="w-[36px] h-[36px]" />
            </button>
            {/* Search 목록 */}
            <div className="flex gap-x-20">
              {/* 검색 기록 표시 */}
            {recentSearches.length > 0 && (
              <article>
                <div className="flex justify-between items-center min-w-70 mb-5">
                  <h3 className="font-bold">Recent</h3>
                  <button type="button" className="text-sm text-placeholder cursor-pointer"
                    onClick={() => {
                      localStorage.removeItem("recentSearches");
                      setRecentSearches([]);
                    }}
                  >Delete History</button>
                </div>
                <ul>
                  {recentSearches.map((search, idx) => (
                    <li key={idx} className={`relative mb-3 pr-6 transition-all duration-600 hover:underline`}>
                      {/* 검색 기록을 다시 검색함 */}
                      <button type="button"
                        className="cursor-pointer"
                        onClick={() => {
                          router.push(`/search?keyword=${encodeURIComponent(search)}`);
                          setIsSearchOpen(false);
                        }}
                      >
                        {search}
                      </button>
                      {/* 검색 기록 중 택하여 수동으로 제거 */}
                        <button type="button" aria-label="Remove this search term" onClick={() => handleDelete(idx)} className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer">
                        <CloseIcon title="Remove recent search" className="w-[18px] h-[18px]" />
                        </button>
                    </li>
                  ))}
                </ul>
              </article>
            )}
            {/* 검색 순위 표시 */}
            {[
              { title: "Most Searched Brands", list: SearchedData.SearchedBrands },
              { title: "Popular", list: SearchedData.Popular },
            ].map((section) => (
              <Fragment key={section.title}>
                <ol>
                <h3 className="mb-5 font-bold">{section.title}</h3>
                  {section.list.map((item, idx) => (
                    <li key={idx} className={`mb-3 cursor-pointer transition-all duration-600 hover:underline
                      ${searchListVisible ? 'pl-0 opacity-100 pointer-events-auto' : 'pl-3 opacity-0 pointer-events-none'}`}
                      style={{ transitionDelay: `${(idx + 1) * 40}ms`}}>
                      <span className="inline-block min-w-[1.25rem] text-right mr-2 font-bold">{idx + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </Fragment>
            ))}
            </div>
          </section>
				</aside>
			)}
		</>
	);
};
