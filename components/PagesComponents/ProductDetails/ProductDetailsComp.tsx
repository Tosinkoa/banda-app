import BestSellerProducts from "@/components/PagesComponents/Home/BestSellerProducts";
import { useGetSingleProductQuery } from "@/store/APIs/productApi";
import { localStorageDataActions } from "@/store/slices/localstorage-data";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

interface ProductDetailsCompProps {
  productID: string | string[];
}

const ProductDetailsComp: React.FC<ProductDetailsCompProps> = ({ productID }) => {
  const dispatch = useDispatch();
  const { data: productData, isLoading: isProductDataLoading } =
    useGetSingleProductQuery(productID);
  const [transformedImages, setTransformedImages] = useState([]);

  useEffect(() => {
    if (!isProductDataLoading && productData?.images?.length > 0) {
      // Transform the images array to the desired format
      const productImages = productData?.images?.map((image: string) => ({
        original: image,
        thumbnail: image,
      }));
      setTransformedImages(productImages);
    }
  }, [isProductDataLoading, productData]);

  const addProductToLocaStorageCart = async () => {
    const localStorageProductCart = localStorage.getItem("cart");

    if (localStorageProductCart) {
      const parsedLocalStorageProductCartData = JSON.parse(localStorageProductCart);
      const productAlreadyExist = parsedLocalStorageProductCartData.find(
        (eachProduct) => eachProduct.id === productData?.id
      );
      if (productAlreadyExist) return toast.warning("Product already exist in cart!");
      else {
        await dispatch(localStorageDataActions.addedCartToLocalStorage(true));
        const newCartProduct = parsedLocalStorageProductCartData.append(productData);
        const stringifyCartProduct = JSON.stringify(newCartProduct);
        localStorage.setItem("cart", stringifyCartProduct);
        await dispatch(localStorageDataActions.addedCartToLocalStorage(false));
        return toast.success("Product added to cart!");
      }
    } else {
      await dispatch(localStorageDataActions.addedCartToLocalStorage(true));
      const newCartProduct = [productData];
      const stringifyCartProduct = JSON.stringify(newCartProduct);
      localStorage.setItem("cart", stringifyCartProduct);
      await dispatch(localStorageDataActions.addedCartToLocalStorage(false));
      return toast.success("Product added to cart!");
    }
  };

  const addProductToWishListCart = async () => {
    const localStorageProductCart = localStorage.getItem("wishlist");

    if (localStorageProductCart) {
      const parsedLocalStorageProductWishlistData = JSON.parse(localStorageProductCart);
      const productAlreadyExist = parsedLocalStorageProductWishlistData.find(
        (eachProduct) => eachProduct.id === productData?.id
      );
      if (productAlreadyExist) return toast.warning("Product already exist in wishlist!");
      else {
        await dispatch(localStorageDataActions.addedWishlistToLocalStorage(true));
        const newWishlistProduct = parsedLocalStorageProductWishlistData.append({
          ...productData,
          product_count: 1,
        });
        const stringifyWishlistProduct = JSON.stringify(newWishlistProduct);
        localStorage.setItem("wishlist", stringifyWishlistProduct);
        await dispatch(localStorageDataActions.addedWishlistToLocalStorage(false));
        return toast.success("Product added to wishlist!");
      }
    } else {
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
                  onClick={addProductToWishListCart}
                  className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl"
                >
                  <IoMdHeartEmpty />
                </div>
                <div
                  onClick={addProductToLocaStorageCart}
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
      <div className="hidden md:flex flex-col">
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
                src={productData?.images[1]}
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
