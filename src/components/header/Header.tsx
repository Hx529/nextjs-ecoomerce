"use client";

import HeaderBannerText from "@/components/banner/header-banner-text";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

// i 높이
const HEADER_HEIGHT = 118;
const CATEGORY_HEIGHT = 456;

// f 상단 유저 메뉴 데이터 구조
const userMenuData = [
	{
		type: "button",
		key: "lang",
		title: "Language",
		icon: "/images/components/icons/globe.svg",
		label: "United States",
		href: null,
	},
	{
		type: "link",
		key: "wish",
		title: "Wish List",
		icon: "/images/components/icons//wish_border.svg",
		href: "/wish",
	},
	{
		type: "link",
		key: "bag",
		title: "Shopping Bag",
		icon: "/images/components/icons/shoppingCart.svg",
		href: "/shopping-bag",
		badge: true,
	},
	{
		type: "link",
		key: "user",
		title: "User Profile",
		icon: "/images/components/icons/user.svg",
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

const Header = () => {
	const [isVisiable, setIsVisiable] = useState(false); // i 카테고리 팝업 표시
	const [isSearchOpen, setIsSearchOpen] = useState(false); // i 검색창 표시
	const [searchValue, setSearchValue] = useState(""); // i 검색어 값
	const [popupLeft, setPopupLeft] = useState(0); // i 카테고리 팝업 중앙 위치 정렬용 값
	const categoryRef = useRef<HTMLDivElement>(null); // i 네비게이션 카테고리 DOM 위치 Ref

  // f 카테고리 팝업 중앙 정렬용 effect
	useEffect(() => {
		if (isVisiable && categoryRef.current) {
			const rect = categoryRef.current.getBoundingClientRect();
			setPopupLeft(rect.left);
		}
	}, [isVisiable]);

	return (
		<>
			<header
				className={`w-full flex flex-col items-center fixed bg-white z-10 h-[${HEADER_HEIGHT}px]`}
			>
				<h3 className="sr-only">Header</h3>
				<div className="max-w-7xl w-full h-[70px] flex justify-between items-center">
					{/* Search */}
					<div
						className="relative rounded-sm bg-[rgb(245,246,247)] cursor-pointer flex items-center w-2xs h-1/2 gap-2 px-3"
						onClick={() => setIsSearchOpen(true)}
					>
						<Image
							src="/images/components/icons/search.svg"
							alt="search icon"
							width={18}
							height={18}
						/>
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
											className="relative cursor-pointer hover:text-primary flex items-center gap-1"
											title={item.title}
										>
											<Image
												src={item.icon}
												alt={item.title}
												width={16}
												height={16}
											/>
											<p id="location">{item.label}</p>
										</button>
									) : item.type === "link" && item.key === "bag" ? (
										<Link
											href={item.href!}
											className="relative block hover:text-primary"
											title={item.title}
										>
											<Image
												src={item.icon}
												alt={item.title}
												width={30}
												height={30}
											/>
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
											<Image
												src={item.icon}
												alt={item.title}
												width={30}
												height={30}
											/>
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
							onMouseEnter={() => setIsVisiable(true)}
							onMouseLeave={() => setIsVisiable(false)}
							ref={categoryRef}
						>
							<li className="h-full flex items-center custom-expanded-weight custom-before-division">
								<Link
									href="/"
									className="relative hover:text-primary flex items-center gap-3"
								>
									<Image
										src="/images/components/icons/hamburgerMenu.svg"
										alt="Hamburger Menu"
										width={18}
										height={16}
									/>
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
				<div className="fixed left-0 top-0 w-full z-50 bg-white bg-opacity-95"
          style={{ height: `${HEADER_HEIGHT + CATEGORY_HEIGHT}px` }}
        >
					<div className="max-w-7xl mx-auto flex gap-6">
            <Image
							src="/images/components/icons/search.svg"
							alt="search icon"
							width={18}
							height={18}
						/>
						<input
							type="text"
							placeholder="Search by Brands, Product or Category"
							className="w-full text-lg focus:outline-none py-5"
							autoFocus
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
            {/* TODO: X 아이콘 svg로 교체하기 */}
            { searchValue !== "" && <button className="cursor-pointer" onClick={() => setSearchValue('')}>X</button> }
            {/* TODO: X 아이콘 svg로 교체하기 */}
					</div>
          <button
            className="absolute top-4 right-4 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setIsSearchOpen(false)}
          >
            X
          </button>
				</div>
			)}
			<HeaderBannerText />
		</>
	);
};

export default Header;
