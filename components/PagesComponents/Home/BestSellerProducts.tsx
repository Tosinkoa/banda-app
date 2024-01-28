import { IProduct } from "@/components/types";
import { useGetAllProductsQuery } from "@/store/APIs/productApi";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

interface BestSellerProductsProps {
  showAllDetails: boolean;
}

const BestSellerProducts = ({ showAllDetails }: BestSellerProductsProps) => {
  const initialLimit = 8;
  const [isAllProductDataFetched, setIsAllProductDataFetched] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(initialLimit);
  const {
    data: productsData,
    isLoading: isLoadingProductData,
    isFetching: isFecthingProductData,
  } = useGetAllProductsQuery(limit, { refetchOnMountOrArgChange: true });

  // Function for loading more products
  const moreProductLoader = () => {
    const totalProductData = productsData?.total;
    if (limit + initialLimit > totalProductData && limit > totalProductData)
      return setIsAllProductDataFetched(true);
    setLimit((prevLimit) => prevLimit + initialLimit);
  };

  return (
    <div className={`${!showAllDetails && "lg:w-10/12 lg:px-16"} best_seller_bg`}>
      {showAllDetails && (
        <div className="best_seller_first_title">
          <p className="featured_products_title">Featured Products</p>
          <h3 className="best_seller_title">BEST SELLER PRODUCTS</h3>
          <p className=" best_seller_small_title">
            Problems trying to resolve the conflict between
          </p>
        </div>
      )}
      {!showAllDetails && <h3 className="best_seller_second_title">BEST SELLER PRODUCTS</h3>}
      <div className="best_seller_product_list">
        {!isLoadingProductData &&
          productsData?.products?.map((eachProduct: IProduct) => {
            // Calculate the crossed out price using the discount percentage
            const productPriceDeduction =
              (eachProduct.discountPercentage / 100) * eachProduct.price;

            const productDiscountPrice = eachProduct.price - productPriceDeduction;
            return (
              <Link
                href={`/product-details/${eachProduct.id}`}
                passHref
                key={eachProduct.id}
                className="each_product"
              >
                <div className="product_image_main_bg">
                  <div className="product_image">
                    <Image
                      src={eachProduct.images[0]}
                      alt="product image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="product_detail_bg">
                  <p className="product_title">{eachProduct.title}</p>
                  <p className="brand_title">{eachProduct.brand}</p>
                  <p className="price_bg">
                    <span className="main_price">${eachProduct.price}</span>{" "}
                    <span className="main_discount_price">
                      ${productDiscountPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
      {showAllDetails && (
        <button
          onClick={moreProductLoader}
          disabled={isAllProductDataFetched}
          className={`load_more_button ${
            isAllProductDataFetched ? "disabled_button" : "active_button"
          }`}
        >
          {isFecthingProductData ? "LOADING PRODUCT...." : "LOAD MORE PRODUCTS"}
        </button>
      )}
    </div>
  );
};

export default BestSellerProducts;
