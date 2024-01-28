import useRemoveLocalStorageData from "@/components/CustomHooks/useRemoveLocalStorageData";
import BestSellerProducts from "@/components/PagesComponents/Home/BestSellerProducts";
import { IProduct } from "@/components/types";
import { useGetSingleProductQuery } from "@/store/APIs/productApi";
import { useAppDispatch } from "@/store/hooks";
import { localStorageDataActions } from "@/store/slices/localstorage-data";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface ProductDetailsCompProps {
  productID: string | string[];
}
interface IProductImages {
  original: string;
  originalAlt: string;
  thumbnailAlt: string;
  thumbnail: string;
}

const ProductDetailsComp = ({ productID }: ProductDetailsCompProps) => {
  const dispatch = useAppDispatch();
  const { data: productData, isLoading: isProductDataLoading } =
    useGetSingleProductQuery(productID);
  const [transformedImages, setTransformedImages] = useState<IProductImages[] | []>([]);
  const { removeProductFromWishlist, removeProductFromCart } = useRemoveLocalStorageData();

  useEffect(() => {
    if (!isProductDataLoading && productData?.images?.length > 0) {
      // Filter out product image to suit react-image-gallery array
      const productImages = productData?.images?.map((image: string) => ({
        original: image,
        originalAlt: productData?.title,
        thumbnailAlt: productData?.title,
        thumbnail: image,
      }));
      setTransformedImages(productImages);
    }
  }, [isProductDataLoading, productData]);

  // Function for adding product to local storage cart
  const addProductToLocalStorageCart = async () => {
    const localStorageProductCart = localStorage.getItem("cart");

    if (localStorageProductCart) {
      const parsedLocalStorageProductCartData = JSON.parse(localStorageProductCart);
      const productAlreadyExist = parsedLocalStorageProductCartData.find(
        (eachProduct: IProduct) => eachProduct.id === productData?.id
      );
      if (productAlreadyExist) return toast.warning("Product already exist in cart!");
      else {
        // Remove product from wishlist if exist
        await removeProductFromWishlist(productData?.id);
        // Add product to cart
        await dispatch(localStorageDataActions.addedCartToLocalStorage(true));
        parsedLocalStorageProductCartData.unshift({
          ...productData,
          product_count: 1,
        });

        const stringifyCartProduct = JSON.stringify(parsedLocalStorageProductCartData);
        localStorage.setItem("cart", stringifyCartProduct);
        await dispatch(localStorageDataActions.addedCartToLocalStorage(false));
        return toast.success("Product added to cart!");
      }
    } else {
      // Remove product from wishlist if exist
      await removeProductFromWishlist(productData?.id);
      // Add product to cart
      await dispatch(localStorageDataActions.addedCartToLocalStorage(true));
      const newCartProduct = [{ ...productData, product_count: 1 }];
      const stringifyCartProduct = JSON.stringify(newCartProduct);
      localStorage.setItem("cart", stringifyCartProduct);
      await dispatch(localStorageDataActions.addedCartToLocalStorage(false));
      return toast.success("Product added to cart!");
    }
  };

  // Function for adding product to local storage wishlist
  const addProductToLocalStorageWishlist = async () => {
    const localStorageProductWishlist = localStorage.getItem("wishlist");

    if (localStorageProductWishlist) {
      const parsedLocalStorageProductWishlistData = JSON.parse(localStorageProductWishlist);
      const productAlreadyExist = parsedLocalStorageProductWishlistData.find(
        (eachProduct: IProduct) => eachProduct.id === productData?.id
      );
      if (productAlreadyExist) return toast.warning("Product already exist in wishlist!");
      else {
        // Remove product from cart if exist
        await removeProductFromCart(productData?.id);
        // Add product to wishlist
        await dispatch(localStorageDataActions.addedWishlistToLocalStorage(true));
        parsedLocalStorageProductWishlistData.unshift({
          ...productData,
          product_count: 1,
        });
        const stringifyWishlistProduct = JSON.stringify(parsedLocalStorageProductWishlistData);
        localStorage.setItem("wishlist", stringifyWishlistProduct);
        await dispatch(localStorageDataActions.addedWishlistToLocalStorage(false));
        return toast.success("Product added to wishlist!");
      }
    } else {
      // Remove product from cart if exist
      await removeProductFromCart(productData?.id);
      // Add product to wishlist
      await dispatch(localStorageDataActions.addedWishlistToLocalStorage(true));
      const newWishlistProduct = [{ ...productData, product_count: 1 }];
      const stringifyCartProduct = JSON.stringify(newWishlistProduct);
      localStorage.setItem("wishlist", stringifyCartProduct);
      await dispatch(localStorageDataActions.addedWishlistToLocalStorage(false));
      return toast.success("Product added to wishlist!");
    }
  };

  const productPriceDeduction = (productData?.discountPercentage / 100) * productData?.price;
  const productDiscountPrice = productData?.price - productPriceDeduction;

  return (
    <div className="product_details_bg">
      {/* More product details */}
      {isProductDataLoading && <div className="loading_spinner"></div>}
      {!isProductDataLoading && (
        <div className="product_detail_bg">
          <div className="product_detail_sec_bg">
            <div className="product_detail_image">
              {/* Navigation buttons */}
              <div className="nav_link_bg">
                <Link href="/" className="hover:border-b" passHref>
                  Home
                </Link>
                <IoIosArrowForward className="link_arrow" />
                <span className="shop_link">Shop</span>
              </div>
              {/* Product Image and tumbnails */}
              {transformedImages.length > 0 && !isProductDataLoading && (
                <div className="image_preview_gallery h-full w-full">
                  <ImageGallery
                    showPlayButton={false}
                    items={transformedImages}
                    thumbnailPosition="bottom"
                    showFullscreenButton={false}
                  />
                </div>
              )}
            </div>
            <div className="product_full_details">
              <div className="full_detail_space"></div>
              <div className="product_info_bg">
                <p className="product_title">{productData?.title}</p>
                <div className="product_review_bg">
                  <i data-star={productData?.rating}></i>

                  <p className="review_text">10 Reviews</p>
                </div>
                <p className="product_price">${productDiscountPrice.toFixed(2)}</p>
                <div className="product_in_stock_bg">
                  <span>Availability:</span>
                  <span className="in_stock">In stock</span>
                </div>
                <div className="product_decription">
                  <p className="main_product_decription">{productData?.description}</p>
                </div>
              </div>

              <div className="product_action">
                <hr />
                <div className="product_color_bg">
                  <div className="bg-[#23A6F0] product_color"></div>
                  <div className="bg-[#2DC071] product_color"></div>
                  <div className="bg-[#E77C40] product_color"></div>
                  <div className="bg-[#252B42] product_color"></div>
                </div>
                <div className="main_product_action">
                  <button className="select_option">Select Options</button>
                  <div onClick={addProductToLocalStorageWishlist} className="action_icon">
                    <IoMdHeartEmpty />
                  </div>
                  <div onClick={addProductToLocalStorageCart} className="action_icon">
                    <BsCart />
                  </div>
                  <div className="action_icon">
                    <IoEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="large_screen_product_details">
        <div className="large_scr_product_bg">
          <div className="large_scr_detail_tab">
            <div className="tab_bg">
              <p>Description</p>
              <p>Additional Information</p>
              <div>
                <span>Reviews </span>
                <span className="text-green-800">(0)</span>
              </div>
            </div>
          </div>
          <div className="more_product_details">
            <div className="flex-col max-w-[500px] gap-y-4 flex">
              <div className="font-semibold text-lg md:text-xl">
                <span>Brand:</span> <span>{productData?.brand}</span>
              </div>
              <p className="border-left border-green-600 border-l-4 pl-6">
                {productData?.description}
              </p>
            </div>
            <div className="product_image_bg">
              <Image
                src={productData?.images[1] || productData?.images[0]}
                alt="product description image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        {/* Best seller products */}
        <BestSellerProducts showAllDetails={false} />
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default ProductDetailsComp;
