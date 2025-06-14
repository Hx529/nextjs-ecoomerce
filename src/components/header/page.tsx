import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center fixed">
      <h3 className="sr-only">Header</h3>
      <div className="max-w-7xl w-full h-[4.375rem] flex justify-between items-center">
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
      <nav className="max-w-7xl w-full relative">
        <h3 className="sr-only">Category</h3>
        <ul className="flex items-center gap-10 bg-white h-12 max-w-7xl w-full font-bold text-sm relative">
          <li className="h-full flex items-center custom-expanded-weight custom-before-division group">
            <Link href="/" className="relative hover:text-primary flex items-center gap-3">
              <Image src="/images/components/icons/hamburgerMenu.svg" alt="Hamburger Menu" width={18} height={16} />
              <p>CATEGORY</p>
            </Link>
            <div className="hidden group-hover:block absolute top-full left-0 py-3 font-normal">
              <ul className="w-7xl flex justify-between gap-10">
                <li>
                  <p className="font-bold">CLOTHING</p>
                  <ul>
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
                  <ul>
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
                  <ul>
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
                  <ul>
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
                  <ul>
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
                  <ul>
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
          </li>
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
  );
}
