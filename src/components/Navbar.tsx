import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../public/Logo.png";
import search from "../../public/Assets/search.png";
import like from "../../public/Assets/like.png";
import bag from "../../public/Assets/bag.png";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-neutral-100 flex justify-between items-center px-4 sm:px-6 py-2 text-[10px] sm:text-[12px] md:text-[14px] font-medium text-gray-600">
        <Image src="/Man pic.png" alt="User" width={24} height={24} className="ml-2 md:ml-8" />
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Link href="/findstore" className="hover:text-gray-800">Find Store</Link>
          <Link href="/help" className="hover:text-gray-800">Help</Link>
          <Link href="/joinus" className="hover:text-gray-800">Join Us</Link>
          <Link href="/login_page" className="hover:text-gray-800">Sign In</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap justify-between items-center p-3 md:p-4 lg:p-6 font-sans">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold drop-shadow-lg ml-4 sm:ml-8">
          <Image src={Logo} alt="Nike Logo" width={100} height={64} className="h-10 md:h-14" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          <ul className="flex gap-6 lg:gap-10 font-medium text-sm lg:text-base">
            <li><Link href="/products">New & Featured</Link></li>
            <li><Link href="/products">Men</Link></li>
            <li><Link href="/allproducts">Women</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Sale</Link></li>
            <li><Link href="#">SNKRS</Link></li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center justify-center sm:ml-6 lg:ml-8 mt-4 sm:mt-0">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-full pl-8 h-[30px] text-sm outline-none w-[180px]"
            />
            <Image
              src={search}
              alt="Search"
              className="w-5 h-5 absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 ml-2">
            <Image src={like} alt="Like" className="w-7 h-7 cursor-pointer" />
            <Link href="/Bag">
              <Image src={bag} alt="Cart" className="w-7 h-7 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button className="text-gray-600">Menu</button>
      </div>
    </header>
  );
};

export default Navbar;

