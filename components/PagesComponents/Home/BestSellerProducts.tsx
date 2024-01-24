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
    <div
      className={`${
        !showAllDetails && "lg:w-10/12 lg:px-16"
      } flex flex-col gap-y-4 md:gap-y-8 my-8 mx-auto`}
    >
      {showAllDetails && (
        <div className="flex flex-col text-center gap-y-1 text-base md:text-lg w-full mx-auto">
          <p className="font-semibold text-neutral-400">Featured Products</p>
          <h3 className="font-bold text-lg md:text-xl">BEST SELLER PRODUCTS</h3>
          <p className=" text-neutral-400 text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>
      )}
      {!showAllDetails && (
        <h3 className="border-b font-bold text-lg lg:text-xl py-4">BEST SELLER PRODUCTS</h3>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10">
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
                className="flex flex-col place-content-center justify-self-center gap-y-3"
              >
                <div className="h-fit w-fit p-4 bg-white">
                  <div className="relative h-[280px] bg-white w-[200px]">
                    <Image
                      src={eachProduct.images[0]}
                      alt="product image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="font-semibold w-full text-center space-y-1">
                  <p className="w-[200px] line-clamp-1">{eachProduct.title}</p>
                  <p className="text-neutral-500">{eachProduct.brand}</p>
                  <p className="font-bold">
                    <span className="text-neutral-400">${eachProduct.price}</span>{" "}
                    <span className="text-[#23856D]">${productDiscountPrice.toFixed(2)}</span>
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
          className={`md:text-base text-xs border rounded-md font-semibold w-64 mx-auto py-3 ${
            isAllProductDataFetched
              ? "text-blue-200 border-blue-200"
              : "text-[#23A6F0] border-[#23A6F0]"
          }`}
        >
          {isFecthingProductData ? "LOADING PRODUCT...." : "LOAD MORE PRODUCTS"}
        </button>
      )}
    </div>
  );
};

export default BestSellerProducts;
