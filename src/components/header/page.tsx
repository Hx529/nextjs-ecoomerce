import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
    <h3 className="sr-only">Header</h3>
    <div className="max-w-7xl h-[4.375rem] m-auto flex justify-between items-center">
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
    <nav className="max-w-7xl m-auto relative">
      <h3 className="sr-only">Category</h3>
      <ul className="flex items-center gap-10 bg-white h-12 max-w-7xl m-auto font-bold text-sm group relative">
        <li className="uppercase h-full flex items-center expanded-weight mr-10 static
            before:content-[''] before:absolute before:top-1/2 before:-right-10 before:w-[1px] before:h-1/3 before:bg-black before:-translate-1/2">
          <Link href="/" className="relative hover:text-primary flex items-center gap-3">
            <Image src="/images/components/icons/hamburgerMenu.svg" alt="Hamburger Menu" width={18} height={16} />
            <p>Category</p>
          </Link>
          <div className="hidden group-hover:block absolute top-0 left-0">
            <ul>
              <li><Link href="/">CLOTHING</Link></li>
              <li><Link href="/">ALL CLOTHING</Link></li>
              <li><Link href="/">Tops</Link></li>
              <li><Link href="/">Outerwear</Link></li>
              <li><Link href="/">Pants</Link></li>
              <li><Link href="/">Dresses & Skirts</Link></li>
              <li><Link href="/">Short Sleeves</Link></li>
              <li><Link href="/">Long Sleeves</Link></li>
              <li><Link href="/">Sweatshirts</Link></li>
              <li><Link href="/">Hooded Jackets</Link></li>
              <li><Link href="/">Jeans</Link></li>
              <li><Link href="/">Shirts & Blouses</Link></li>
              <li><Link href="/">Track Pants & Joggers</Link></li>
            </ul>
          </div>
        </li>
        <li className="uppercase h-full flex items-center expanded-weight font-logo">
          <Link href="/promotion" className="hover:text-primary relative notification-dot">#digging seoul</Link>
        </li>
        <li className="uppercase h-full flex items-center expanded-weight">
          <Link href="/fashion" className="hover:text">fashion</Link>
        </li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/beauty">beauty</Link></li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/sale">sale</Link></li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/best">best</Link></li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/new">new</Link></li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/brands">brands</Link></li>
        <li className="uppercase h-full flex items-center expanded-weight"><Link href="/stylemap">#style map</Link></li>
      </ul>
    </nav>
  </header>
  );
}
