import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart, BsTelephone } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import Cart from "../Cart/Cart";
import useLocalStorageProductDetails from "../CustomHooks/useLocalStorageProductDetails";
import { MyDialog } from "../Helper/MyDialog";
import WIshlist from "../Wishlist/WIshlist";

interface ModalState {
  isCartModalOpen: boolean;
  isWIshlistProductModalOpen: boolean;
  isShowSmallScreenNavModal: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { totalCartProductData, totalWishlistProductData } = useLocalStorageProductDetails();
  const [showSmallDeviceNavCard, setShowSmallDeviceNavCard] = useState<boolean>(false);
  const [modalState, setModalState] = useState<ModalState>({
    isCartModalOpen: false,
    isWIshlistProductModalOpen: false,
    isShowSmallScreenNavModal: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = (modalType: string, isOpen: boolean): void => {
    setModalState((prev) => ({ ...prev, [modalType]: isOpen }));
  };

  // Cart Handlers
  const openCartModal = () => toggleModal("isCartModalOpen", true);
  const closeCartModal = () => toggleModal("isCartModalOpen", false);

  // Wishls Products Handler
  const openWIshlistProductModal = () => toggleModal("isWIshlistProductModalOpen", true);
  const closeWIshlistProductModal = () => toggleModal("isWIshlistProductModalOpen", false);

  return (
    <>
      {/* Cart Modal */}
      <MyDialog
        closeModal={closeCartModal}
        isModalOpen={modalState.isCartModalOpen}
        dialogTitle="My Cart"
        children={<Cart />}
      />
      {/* Saved Product Modal */}
      <MyDialog
        closeModal={closeWIshlistProductModal}
        isModalOpen={modalState.isWIshlistProductModalOpen}
        dialogTitle="Wishlist"
        children={<WIshlist />}
      />
      {/* Navbar  */}
      <div className={`${isScrolled && "shadow"} navbar_bg`}>
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
          <div className="flex items-center gap-x-4 text-[#23A6F0]">
            <div className="gap-x-1 md:flex hidden items-center">
              <MdPersonOutline className="text-2xl" />
              <Link href="/#">Login</Link>
              <span>/</span>
              <Link href="/#">Register</Link>
            </div>
            <div className="flex items-center text-2xl gap-x-3.5 md:gap-x-3">
              <TbSearch className="text-[1.7rem]" />
              <div onClick={openCartModal} className="flex items-center gap-x-1">
                <BsCart />
                <p className="text-base font-semibold flex">{totalCartProductData || "0"}</p>
              </div>
              <div
                onClick={openWIshlistProductModal}
                className="text-[1.7rem] flex items-center gap-x-1"
              >
                <IoMdHeartEmpty />
                <p className="text-base font-semibold flex">
                  {totalWishlistProductData || "0"}
                </p>
              </div>
              <div
                onClick={() => setShowSmallDeviceNavCard(!showSmallDeviceNavCard)}
                className="text-3xl flex md:hidden"
              >
                <BiMenuAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSmallDeviceNavCard && (
        <div className="h-[280px]  md:hidden text-xl text-center py-8  text fixed md:top-[90px] top-[50px] w-full flex flex-col bg-white z-20">
          <div className="h-fit flex flex-col gap-y-4 my-auto">
            <Link href="/#">
              <p>Home</p>
            </Link>
            <Link href="/#">Product</Link>
            <Link href="/#">Pricing</Link>
            <Link href="/#">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
