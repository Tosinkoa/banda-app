import { localStorageDataActions } from "@/store/slices/localstorage-data";
import { IProduct } from "../types";
import { useAppDispatch } from "@/store/hooks";

const useRemoveLocalStorageData = () => {
    const dispatch = useAppDispatch()

    // Remove product from wushlist in local storage
    const removeProductFromWishlist = async (productID: number) => {
        const localStorageProductCart = localStorage.getItem("wishlist");

        if (localStorageProductCart) {
            await dispatch(localStorageDataActions.addedWishlistToLocalStorage(true));
            let parsedLocalStorageProductWishlistData = JSON.parse(localStorageProductCart);
            parsedLocalStorageProductWishlistData = parsedLocalStorageProductWishlistData.filter(
                (eachProduct: IProduct) => eachProduct.id !== productID
            );
            localStorage.setItem("wishlist", JSON.stringify(parsedLocalStorageProductWishlistData));

            await dispatch(localStorageDataActions.addedWishlistToLocalStorage(false));
        }
    };

    // Remove product from cart in local storage
    const removeProductFromCart = async (productID: number) => {
        const localStorageProductCart = localStorage.getItem("cart");

        if (localStorageProductCart) {
            await dispatch(localStorageDataActions.addedCartToLocalStorage(true));
            let parsedLocalStorageProductCartData = JSON.parse(localStorageProductCart);
            parsedLocalStorageProductCartData = parsedLocalStorageProductCartData.filter(
                (eachProduct: IProduct) => eachProduct.id !== productID
            );
            localStorage.setItem("cart", JSON.stringify(parsedLocalStorageProductCartData));

            await dispatch(localStorageDataActions.addedCartToLocalStorage(false));
        }
    };

    return {
        removeProductFromWishlist, removeProductFromCart
    }
}

export default useRemoveLocalStorageData;