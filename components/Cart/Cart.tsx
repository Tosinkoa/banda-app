import { useAppDispatch } from "@/store/hooks";
import { localStorageDataActions } from "@/store/slices/localstorage-data";
import Image from "next/legacy/image";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import useLocalStorageProductDetails from "../CustomHooks/useLocalStorageProductDetails";
import { ILocalStorageProduct, IProduct } from "../types";
import useRemoveLocalStorageData from "../CustomHooks/useRemoveLocalStorageData";

const Cart = () => {
  const { localStorageCartProductData, cartProductTotalPrice } =
    useLocalStorageProductDetails();
  const { removeProductFromCart } = useRemoveLocalStorageData();

  return (
    <div>
      <div className="flex flex-col w-full inset-0 lg:px-10 md:gap-x-4 gap-y-4 lg:gap-x-8">
        <div className="col-span-2">
          <div className="flex mx-auto flex-col rounded-md gap-y-3 w-full">
            <div className="flex flex-col text-sm space-y-3">
              <h4 className="font-bold text-sm mt-1">TOTAL</h4>
              <hr />
              <div className="flex justify-between">
                <h3 className="font-bold">Sub-total</h3>
                <h3>${cartProductTotalPrice || "0"}</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold">Delivery</h3>
                <AiOutlineInfoCircle className="text-lg" />
              </div>

              <select className="py-2 border-b rounded-sm border-secondary-300 font-semibold text-secondary-400 bg-secondary-50">
                {["Standard Delivery (Free)", "Fast Delivery + $50"].map((option, index) => (
                  <option
                    key={index}
                    className="animate-select border-b-2 border-secondary-500 bg-secondary-50"
                  >
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="w-full lg:text-base text-xs bg-[#23A6F0] rounded-md text-neutral-50 font-semibold text-center py-3 text-secondary-50"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full rounded-md gap-y-3 relative mt-4">
          <div className=" flex flex-col gap-y-3 inset-y-0 my-auto overflow-x-hidden">
            {localStorageCartProductData?.length > 0 &&
              localStorageCartProductData?.map?.((eachProduct: ILocalStorageProduct) => {
                const productPriceDeduction =
                  (eachProduct.discountPercentage / 100) * eachProduct.price;

                const productDiscountPrice = eachProduct.price - productPriceDeduction;

                return (
                  <div className="flex flex-row gap-x-4 py-3 border-t border-gray-300  relative">
                    <div
                      onClick={() => removeProductFromCart(eachProduct.id)}
                      className="cursor-pointer absolute transform rotate-45 font-medium right-0 -top-1 text-4xl "
                    >
                      +
                    </div>
                    <div className="block">
                      <div className="relative h-[150px] w-[120px] flex">
                        <Image
                          src={eachProduct.images[0]}
                          alt="product"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col  gap-y-3">
                      <div className="flex flex-row items-center font-bold gap-x-1.5">
                        <h4>${productDiscountPrice.toFixed(2)}</h4>
                        <p className="text-xs line-through mb-0.5 text-neutral-500">
                          ${eachProduct.price}
                        </p>
                      </div>
                      <p className="line-clamp-2">{eachProduct.title}</p>
                      <div className="flex gap-x-5 items-center w-44">
                        <button className="flex flex-row items-center gap-x-1 text-xl rounded-md border border-secondary-300 h-7 place-content-center w-8">
                          -
                        </button>
                        <button className="flex flex-row items-center gap-x-1 text-xl rounded-md border border-secondary-300 h-7 place-content-center w-8">
                          +
                        </button>
                        <div className="space-x-2">
                          <span className="font-semibold">Total:</span>
                          <span>{eachProduct.product_count}</span>
                        </div>
                      </div>
                      <button className="w-44 flex flex-row items-center gap-x-1 text-sm rounded-md border border-secondary-300 place-content-center px-3 py-2">
                        <AiOutlineHeart className="text-lg" />
                        <span>Save for later</span>
                      </button>
                    </div>
                  </div>
                );
              })}

            {(!localStorageCartProductData || localStorageCartProductData?.length < 1) && (
              <p className="mt-20 mx-auto flex flex-col font-bold text-neutral-600">
                <RiShoppingCartLine className="text-5xl mx-auto animate-pulse text-[#23A6F0]" />
                <span>No product added to cart!</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
