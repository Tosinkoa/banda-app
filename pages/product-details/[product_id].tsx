import ProductDetailsComp from "@/components/PagesComponents/ProductDetails/ProductDetailsComp";
import Sponsors from "@/components/PagesComponents/ProductDetails/Sponsors";
import { ProductDetailMetadata } from "@/components/PagesComponents/ProductDetails/util/ProductDetailMetadata";
import WebsiteMetadata from "@/components/WebsiteMetadata/WebsiteMetadata";
import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const { product_id } = useRouter().query;

  return (
    <WebsiteMetadata
      OG_Title_Content={ProductDetailMetadata.OG_Title_Content}
      OG_Title_Key={ProductDetailMetadata.OG_Title_Key}
      description={ProductDetailMetadata.description}
      keywords={ProductDetailMetadata.description}
      title={ProductDetailMetadata.title}
    >
      <div className="flex flex-col">
        {product_id ? <ProductDetailsComp productID={product_id} /> : null}
        <Sponsors />
      </div>
    </WebsiteMetadata>
  );
};

export default ProductDetails;
