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
    <div className="cart_bg">
      <div className="cart_first_child_bg">
        <div className="cart_first_sec_bg">
          <div className="cart_first_sec_bg">
            <h4>TOTAL</h4>
            <hr />
            <div className="flex justify-between">
              <h3 className="font-bold">Sub-total</h3>
              <h3>${cartProductTotalPrice || "0"}</h3>
            </div>
            <div className="flex justify-between">
              <h3 className="font-bold">Delivery</h3>
              <AiOutlineInfoCircle className="text-lg" />
            </div>

            <select>
              {["Standard Delivery (Free)", "Fast Delivery + $50"].map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <button className="cart_button" type="button">
              CHECKOUT
            </button>
          </div>
        </div>
        <div className="cart_second_bg">
          <div className="cart_second_sec_bg">
            {localStorageCartProductData?.length > 0 &&
              localStorageCartProductData?.map?.((eachProduct: ILocalStorageProduct) => {
                const productPriceDeduction =
                  (eachProduct.discountPercentage / 100) * eachProduct.price;

                const productDiscountPrice = eachProduct.price - productPriceDeduction;

                return (
                  <div className="cart_product_list_bg">
                    <div
                      onClick={() => removeProductFromCart(eachProduct.id)}
                      className="cursor-pointer absolute transform rotate-45 font-medium right-0 -top-1 text-4xl"
                    >
                      +
                    </div>
                    <div className="product_img_bg">
                      <div className="product_img">
                        <Image
                          src={eachProduct.images[0]}
                          alt="product"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                    <div className="product_img_details">
                      <div className="product_price">
                        <h4>${productDiscountPrice.toFixed(2)}</h4>
                        <p className="each_product_price">${eachProduct.price}</p>
                      </div>
                      <p className="product_title">{eachProduct.title}</p>
                      <div className="cart_action_buttons">
                        <button className="action_buttons">-</button>
                        <button className="action_buttons">+</button>
                        <div className="total_bg">
                          <span className="font-semibold">Total:</span>
                          <span>{eachProduct.product_count}</span>
                        </div>
                      </div>
                      <button className="wishlist_button">
                        <AiOutlineHeart className="wishlist_icon" />
                        <span>Save for later</span>
                      </button>
                    </div>
                  </div>
                );
              })}

            {(!localStorageCartProductData || localStorageCartProductData?.length < 1) && (
              <p className="no_product_message">
                <RiShoppingCartLine className="no_product_icon" />
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
