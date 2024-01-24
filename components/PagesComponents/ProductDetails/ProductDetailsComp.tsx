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
    <div className="flex flex-col lg:w-10/12 w-11/12 mx-auto gap-y-4">
      {/* More product details */}
      {isProductDataLoading && (
        <div className="animate-spin border border-b-0 h-20 w-20 mx-auto border-neutral-500 rounded-full "></div>
      )}
      {!isProductDataLoading && (
        <div className="mb-8 gap-y-5">
          <div className="grid md:grid-cols-2">
            <div className=" lg:max-w-[500px] mx-auto md:mr-auto lg:max-h-[500px] relative lg:w-[400px] lg:h-[400px] w-[90%] max-w-[350px] md:w-[280px] md:h-[280px]">
              {/* Navigation buttons */}
              <div className="h-[40px] mb-4 mx-auto md:ml-0 flex w-fit items-center gap-x-1 font-semibold text-base md:text-xl">
                <Link href="/" className="hover:border-b" passHref>
                  Home
                </Link>
                <IoIosArrowForward className="text-neutral-400" />
                <span className="text-neutral-400 hover:border-b cursor-pointer">Shop</span>
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
            <div className="flex flex-col mt-4 md:mt-0 md:gap-y-0 max-w-[500px]">
              <div className="h-[40px] mb-4"></div>
              <div className="flex flex-col gap-y-1">
                <p className="text-lg md:text-xl">{productData?.title}</p>
                <div className="flex items-center md:text-3xl text-2xl gap-x-1 text-yellow-500">
                  <i data-star={productData?.rating} className="absolute"></i>

                  <p className="font-semibold text-neutral-700 text-sm md:text-base">
                    10 Reviews
                  </p>
                </div>
                <p className="font-bold text-lg md:text-xl">
                  ${productDiscountPrice.toFixed(2)}
                </p>
                <div className="flex gap-x-1 font-semibold">
                  <span>Availability:</span>
                  <span className="text-[#23A6F0]">In stock</span>
                </div>
                <div className="my-2 md:h-[100px]">
                  <p className="md:hidden">{productData?.description}</p>
                </div>
              </div>

              <div className="flex flex-col gap-y-3">
                <hr />
                <div className="flex items-center gap-x-2">
                  <div className="bg-[#23A6F0] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#2DC071] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#E77C40] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#252B42] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                </div>
                <div className="flex  items-center gap-x-3">
                  <button className="w-fit md:px-10 md:py-3 px-6 py-2 text-neutral-50 bg-[#23A6F0] rounded-md">
                    Select Options
                  </button>
                  <div
                    onClick={addProductToLocalStorageWishlist}
                    className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl"
                  >
                    <IoMdHeartEmpty />
                  </div>
                  <div
                    onClick={addProductToLocalStorageCart}
                    className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl"
                  >
                    <BsCart />
                  </div>
                  <div className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl">
                    <IoEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hidden md:flex flex-col mt-32">
        <div className="flex flex-col gap-x-3 my-8 gap-y-5">
          <div className="font-bold flex border-b py-6 lg:w-10/12 lg:px-16 mx-auto">
            <div className="flex mx-auto gap-x-5 my-2">
              <p>Description</p>
              <p>Additional Information</p>
              <div>
                <span>Reviews </span>
                <span className="text-green-800">(0)</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center mx-auto gap-x-8">
            <div className="flex-col max-w-[500px] gap-y-4 flex">
              <div className="font-semibold text-lg md:text-xl">
                <span>Brand:</span> <span>{productData?.brand}</span>
              </div>
              <p className="border-left border-green-600 border-l-4 pl-6">
                {productData?.description}
              </p>
            </div>
            <div className="relative lg:w-[400px] md:ml-auto lg:max-w-[500px] lg:max-h-[500px] lg:h-[400px] w-[280px] h-[280px] border bg-neutral-100">
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
