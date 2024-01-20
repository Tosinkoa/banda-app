import { useState } from "react";
import { BsCart, BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import useGetScreenWidth from "../CustomHooks/useGetScreenWidth";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { BiMenuAltRight } from "react-icons/bi";

interface NavbarProps {
  smallScreenSidebarHandler: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ smallScreenSidebarHandler }) => {
  const { isMediumAndSmallScreen } = useGetScreenWidth();
  const [showNavbarItems, setshowNavbarItems] = useState<boolean>(true);

  const sidebarHandler = () => {
    if (isMediumAndSmallScreen) {
      smallScreenSidebarHandler();
    }
  };

  return (
    <div className="navbar_bg">
      <div className="font-semibold hidden md:flex text-xs text-neutral-50 px-2 md:px-10 justify-between h-[45%] bg-[#23856D] w-full">
        <div className="flex items-center gap-0 gap-x-5 lg:gap-x-10">
          <div className="flex items-center gap-x-1">
            <BsTelephone className="text-lg" />
            {"(225) 555-0118"}
          </div>
          <div className="flex items-center gap-x-1">
            <TfiEmail className="text-lg" />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="flex items-center gap-x-0 lg:gap-x-16">
          <p className="hidden lg:flex">Follow us and get a chance to win 80% off</p>
          <div className="flex items-center gap-x-3">
            <p className="hidden lg:flex">Follow Us:</p>
            <FaInstagram className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaFacebook className="text-xl" />
            <FaTwitter className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex w-full md:h-[55%] h-full items-center gap-x-4 justify-between px-2 md:px-10">
        <div className="flex items-center gap-x-20">
          <Link href="/" passHref className="font-bold text-xl">
            Bandage
          </Link>
          <div className="md:flex items-center text-sm gap-x-4 hidden">
            <Link href="/#">
              <p>Home</p>
            </Link>
            <Link href="/#" className="flex items-center gap-x-1">
              <span>Shop</span> <IoIosArrowDown className="text-xl" />
            </Link>
            <Link href="/#">About</Link>
            <Link href="/#">Blog</Link>
            <Link href="/#">Contact</Link>
            <Link href="/#">Pages</Link>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="gap-x-1 md:flex hidden items-center">
            <MdPersonOutline className="text-2xl" />
            <Link href="/#">Login</Link>
            <span>/</span>
            <Link href="/#">Register</Link>
          </div>
          <div className="flex items-center text-2xl gap-x-3.5 md:gap-x-3">
            <TbSearch />
            <div className="flex items-center gap-x-1">
              <BsCart />
              <p className="text-base font-semibold md:flex hidden">1</p>
            </div>
            <div className="text-[1.7rem] flex items-center gap-x-1">
              <IoMdHeartEmpty />
              <p className="text-base font-semibold md:flex hidden">1</p>
            </div>
            <div className="text-3xl flex md:hidden">
              <BiMenuAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
