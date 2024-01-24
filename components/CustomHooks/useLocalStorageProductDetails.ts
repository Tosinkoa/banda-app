import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { ILocalStorageProduct } from "../types";

type LocalStorageProductDetails = {
    cartProductTotalPrice: number;
    totalCartProductData: number;
    totalWishlistProductData: number;
    localStorageCartProductData: ILocalStorageProduct[] | [];
    localStorageWishlistProductData: ILocalStorageProduct[] | [];
};

const useLocalStorageProductDetails = (): LocalStorageProductDetails => {
    const [cartProductTotalPrice, setCartProductTotalPrice] = useState<number>(0);
    const [totalCartProductData, setTotalCartProductData] = useState<number>(0);
    const [localStorageCartProductData, setLocalStorageCartProductData] = useState<ILocalStorageProduct[] | []>([]);
    const [localStorageWishlistProductData, setLocalStorageWishlistProductData] = useState<ILocalStorageProduct[] | []>([]);
    const isAddingCartToLocalStorage = useAppSelector(
        (state) => state.localStorageData.isAddingCartToLocalStorage
    );
    const [totalWishlistProductData, setTotalWishlistProductData] = useState<number>(0);
    const isAddingWishlistToLocalStorage = useAppSelector(
        (state) => state.localStorageData.isAddingWishlistToLocalStorage
    );

    // Check for cart details in local storage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartItems = localStorage.getItem("cart");
            if (cartItems) {
                const parsedCartItems = JSON.parse(cartItems);
                const allCartProductCount = parsedCartItems?.map(
                    (eachCartData: ILocalStorageProduct) => eachCartData.product_count
                );

                // Count all products for cart in local storage and calculate total price
                const totalProductCount = allCartProductCount.reduce((acc: number, eachProductCount: number) => acc + eachProductCount, 0);
                const totalProductPrice = parsedCartItems.reduce((acc: number, eachLocalStorageProduct: ILocalStorageProduct) => {
                    const productPriceDeduction = (eachLocalStorageProduct.discountPercentage / 100) * eachLocalStorageProduct.price;
                    const productDiscountPrice = eachLocalStorageProduct.price - productPriceDeduction;
                    return acc + productDiscountPrice;
                }, 0);
                setCartProductTotalPrice(totalProductPrice.toFixed(2))
                setLocalStorageCartProductData(parsedCartItems)
                setTotalCartProductData(totalProductCount);
            }
        }
    }, [isAddingCartToLocalStorage]);

    // Check for wishlist details in local storage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const wishlistItems = localStorage.getItem("wishlist");
            if (wishlistItems) {
                const parsedWishlistItems = JSON.parse(wishlistItems);
                const allWishlistProductCount = parsedWishlistItems?.map(
                    (eachWishlistData: ILocalStorageProduct) => eachWishlistData.product_count
                );
                // Count all products for wishlist in local storage
                const totalProductCount = allWishlistProductCount.reduce((acc: number, eachProductCount: number) => acc + eachProductCount, 0);
                setLocalStorageWishlistProductData(parsedWishlistItems)
                setTotalWishlistProductData(totalProductCount);
            }
        }
    }, [isAddingWishlistToLocalStorage]);

    return {
        cartProductTotalPrice, totalCartProductData, totalWishlistProductData, localStorageCartProductData, localStorageWishlistProductData
    }


}

export default useLocalStorageProductDetails;