import Image from "next/legacy/image";
import { IoHeartOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import useLocalStorageProductDetails from "../CustomHooks/useLocalStorageProductDetails";
import useRemoveLocalStorageData from "../CustomHooks/useRemoveLocalStorageData";
import { IProduct } from "../types";

const WIshlist = () => {
  const { localStorageWishlistProductData } = useLocalStorageProductDetails();
  const { removeProductFromWishlist } = useRemoveLocalStorageData();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mx-auto gap-3 ">
      {localStorageWishlistProductData?.length > 0 &&
        localStorageWishlistProductData?.map?.((eachProduct: IProduct) => {
          const productPriceDeduction =
            (eachProduct.discountPercentage / 100) * eachProduct.price;

          const productDiscountPrice = eachProduct.price - productPriceDeduction;

          return (
            <div
              key={eachProduct.id}
              className="flex flex-col w-fit place-content-center mx-auto justify-self-center gap-y-3"
            >
              <div className="relative h-[150px] w-[120px]">
                <Image
                  src={eachProduct.images[0]}
                  alt="product image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="font-semibold w-full text-center space-y-1 text-sm">
                <p className="w-[120px] line-clamp-2">{eachProduct.title}</p>
                <p className="font-bold">
                  <span className="text-neutral-400">${eachProduct.price}</span>{" "}
                  <span className="text-[#23856D]">${productDiscountPrice.toFixed(2)}</span>
                </p>
                <button
                  onClick={() => removeProductFromWishlist(eachProduct.id)}
                  className="md:text-base text-xs border flex place-content-center gap-x-1 py-1.5 rounded-md items-center font-semibold w-full mx-auto text-[#23A6F0] border-[#23A6F0]"
                >
                  <LiaTimesSolid className="text-lg" />
                  <span className="text-sm">Remove</span>
                </button>
              </div>
            </div>
          );
        })}

      {(!localStorageWishlistProductData || localStorageWishlistProductData?.length < 1) && (
        <p className="mt-20 mx-auto flex flex-col font-bold text-neutral-600">
          <IoHeartOutline className="text-5xl mx-auto animate-pulse text-[#23A6F0]" />
          <span>No product added to cart!</span>
        </p>
      )}
    </div>
  );
};

export default WIshlist;
