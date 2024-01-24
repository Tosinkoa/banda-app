import { fetcherApi } from "../fectherApi";
export const productApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      getAllProducts: build.query({
        query: (limit?: number) => ({ url: `products?limit=${limit}` }),
      }),
      getSingleProduct: build.query({
        query: (productID: any) => ({ url: `products/${productID}` }),
      }),
    };
  },
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
