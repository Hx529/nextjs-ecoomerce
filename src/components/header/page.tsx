"use client";

import Image from "next/image";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";

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
              <li>
                <button className="relative cursor-pointer hover:text-primary flex items-center gap-1" title="Language">
                  <Image src="/images/components/icons/globe.svg" alt="Language" width={16} height={16} />
                  <p id="location">United States</p>
                </button>
              </li>
              <li>
                <Link href="/wish" className="relative hover:text-primary" title="Wish List">
                  <Image src="/images/components/icons//wish_border.svg" alt="Wish" width={30} height={30} />
                </Link>
              </li>
              <li>
                <Link href="/shopping-bag" className="relative block hover:text-primary" title="Shopping Bag">
                  <Image src="/images/components/icons/shoppingCart.svg" alt="Shopping Bag" width={30} height={30} />
                  <span id="shoppingList" className="block absolute bottom-0 right-0 bg-black min-w-[1.0625rem] rounded-full text-white text-xs text-center px-1">0</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="relative" title="User Profile" >
                  <Image src="/images/components/icons/user.svg" alt="User Profile" width={30} height={30} />
                </Link>
              </li>
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
                    className={`absolute left-0 top-full py-3 font-normal bg-white w-screen z-20`}
                    style={{ left: `-${popupLeft}px` }}
                  >
                    <ul className="m-auto w-7xl flex justify-between gap-10">
                      <li>
                        <p className="font-bold">CLOTHING</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL CLOTHING</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Tops</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Outerwear</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Pants</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Dresses & Skirts</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Short Sleeves</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Long Sleeves</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sweatshirts</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Hooded Jackets</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Jeans</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Shirts & Blouses</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Track Pants & Joggers</Link></li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-bold">BAGS</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL BAGS</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Shoulder Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Messenger & Crossbody Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Backpacks</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Totes</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Canvas Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Travel Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Belt Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Wallets & Cases</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Pouches</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Clutches</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Bag Accessories</Link></li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-bold">ACCESSORIES</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL ACCESSORIES</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Caps & Hats</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Belts</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Key Rings & Key Cases</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Fashion Accessories</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Necklace & Pendants</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Earrings</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Bracelets</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Rings</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sunglasses</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Glasses</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Tech & Life</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Pets</Link></li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-bold">SHOES</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL SHOES</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sneakers</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Oxfords & Brogues</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Loafers</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Boots</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Heels & Pumps</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Flats</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sandals & Slippers</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Flip-flops</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Mules</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Shoes</Link></li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-bold">ACTIVE</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL ACTIVEWEAR</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Swimwear & Beachwear</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Tops</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Pants</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Outerwear</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Skirts</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Bags</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Hats</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Gear</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sporting Goods</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Shoes</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Sports Dresses</Link></li>
                        </ul>
                      </li>
                      <li>
                        <p className="font-bold">BEAUTY</p>
                        <ul className="flex flex-col gap-1 mt-1">
                          <li><Link className="block w-full hover:underline" href="/">ALL BEAUTY</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Skincare</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Facial Masks</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Base Makeup</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Lip Makeup</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Eye Makeup</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Hair Care</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Cleansers</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Body Care</Link></li>
                          <li><Link className="block w-full hover:underline" href="/">Beauty Devices & Tools</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            {/* 나머지 카테고리 메뉴 */}
            <li className="h-full flex items-center custom-expanded-weight">
              <Link href="/promotion" className="hover:text-primary relative notification-dot">#DIGGING SEOUL</Link>
            </li>
            <li className="h-full flex items-center custom-expanded-weight">
              <Link href="/fashion" className="hover:text">FASHION</Link>
            </li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/beauty">BEAUTY</Link></li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/sale">SALE</Link></li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/best">BEST</Link></li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/new">NEW</Link></li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/brands">BRANDS</Link></li>
            <li className="h-full flex items-center custom-expanded-weight"><Link href="/stylemap">#STYLE MAP</Link></li>
          </ul>
        </nav>
      </header>
      {/* 카테고리 팝업 활성 화 시, 전체화면 배경 (모달 배경) */}
      {
        isVisiable && (
          <div id="categoryPopupBG" className="fixed inset-0 w-screen h-screen bg-gray-300 opacity-50 -z-10"></div>
        )
      }
    </>
  );
}
