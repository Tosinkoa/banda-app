import ProductDetailsComp from "@/components/PagesComponents/ProductDetails/ProductDetailsComp";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { product_id } = router.query;
  // All sponsor images from assets folder
  const sponsorLogo = [
    "/assets/images/hooli-logo.png",
    "/assets/images/lyft-logo.png",
    "/assets/images/dont-know-logo.png",
    "/assets/images/stripe-logo.png",
    "/assets/images/aws-logo.png",
    "/assets/images/discord-logo.png",
  ];

  console.log("typeof product_id:", typeof product_id);
  return (
    <div className="flex flex-col">
      {product_id && <ProductDetailsComp productID={product_id} />}

      {/* Sponsors */}
      <div className="flex md:mx-auto flex-col md:flex-row items-center lg:gap-x-24 md:gap-x-6 gap-x-0 gap-y-5 md:gap-y-0 my-8">
        {sponsorLogo.map((eachSponsorImage, index) => (
          <div key={index} className="relative h-[5.5rem] w-[5.5rem]">
            <Image
              src={eachSponsorImage}
              alt="sponsor images"
              objectFit="contain"
              layout="fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
