import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline, MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="bg-violet-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-[60px] px-4 md:px-8">
        {/* Left Section: Email & Phone */}
        <div className="flex gap-4 md:gap-10 items-center mb-2 md:mb-0">
          <div className="flex gap-2 items-center font-semibold text-white text-sm md:text-[16px]">
            <MdMailOutline className="text-base" />
            shaniiisiddiqui94@gmail.com
          </div>
          <div className="flex gap-2 items-center font-semibold text-white text-sm md:text-[16px]">
            <FaPhoneAlt />
            (12345)67890
          </div>
        </div>

        {/* Right Section: Links */}
        <div>
          <ul className="flex flex-wrap items-center justify-center text-white gap-4 text-sm md:text-[16px] font-semibold">
            <Link href={"/"}>
              <li className="flex items-center gap-1 cursor-pointer">
                English <RiArrowDropDownLine className="text-lg" />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="flex items-center gap-1 cursor-pointer">
                USD <RiArrowDropDownLine className="text-lg" />
              </li>
            </Link>
            <Link href={"/Login"}>
              <li className="flex items-center gap-1 cursor-pointer">
                Login <MdAccountCircle className="text-lg" />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="flex items-center gap-1 cursor-pointer">
                Wishlist <FaRegHeart className="text-lg" />
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="flex items-center gap-1 cursor-pointer">
                <IoCartOutline className="text-lg" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
