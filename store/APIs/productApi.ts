import { fetcherApi } from "../fectherApi";
export const productApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getAllProducts: build.query({
        query: (limit) => ({ url: `products?limit=${limit}` }),
      }),
      getSingleProduct: build.query({
        query: (productID) => ({ url: `products/${productID}` }),
      }),
    };
  },
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
