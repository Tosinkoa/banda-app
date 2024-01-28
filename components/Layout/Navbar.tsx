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
        <div className="navbar_detail_bg">
          <div className="navbar_contact_details">
            <div className="telephone_bg">
              <BsTelephone className="contact_icon" />
              {"(225) 555-0118"}
            </div>
            <div className="email_bg">
              <TfiEmail className="contact_icon" />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div className="social_bg">
            <p>Follow us and get a chance to win 80% off</p>
            <div className="flex items-center gap-x-3">
              <p>Follow Us:</p>
              <FaInstagram className="social_icon" />
              <FaYoutube className="social_icon" />
              <FaFacebook className="social_icon" />
              <FaTwitter className="social_icon" />
            </div>
          </div>
        </div>
        <div className="navbar_link_bg">
          <div className="right_links">
            <Link href="/" passHref className="font-bold text-xl">
              Banda
            </Link>
            <div className="right_link_list">
              <Link href="/#">
                <p>Home</p>
              </Link>
              <Link href="/#" className="shop_link_bg">
                <span>Shop</span> <IoIosArrowDown className="shop_link_icon" />
              </Link>
              <Link href="/#">About</Link>
              <Link href="/#">Blog</Link>
              <Link href="/#">Contact</Link>
              <Link href="/#">Pages</Link>
            </div>
          </div>
          <div className="left_link_bg">
            <div className="left_link_auth_bg">
              <MdPersonOutline className="left_link_auth_icon" />
              <Link href="/#">Login</Link>
              <span>/</span>
              <Link href="/#">Register</Link>
            </div>
            <div className="actions_icons_bg">
              <TbSearch className="search_icon" />
              <div onClick={openCartModal} className="cart_icon_bg">
                <BsCart />
                <p>{totalCartProductData || "0"}</p>
              </div>
              <div onClick={openWIshlistProductModal} className="wishlist_icon_bg">
                <IoMdHeartEmpty />
                <p>{totalWishlistProductData || "0"}</p>
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
        <div className="small_device_nav_bg">
          <div className="small_device_sec_nav_bg">
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
