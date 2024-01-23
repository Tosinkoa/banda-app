import useGetScreenWidth from "@/components/CustomHooks/useGetScreenWidth";
import BestSellerProducts from "@/components/PagesComponents/Home/BestSellerProducts";
import Image from "next/legacy/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoMdHeartEmpty } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetails: React.FC = () => {
  let transformedImages = [
    {
      id: 1,
      original: "/assets/images/featured-post.png",
      thumbnail: "/assets/images/featured-post.png",
    },
    {
      id: 2,
      original: "/assets/images/feature-post(2).png",
      thumbnail: "/assets/images/feature-post(2).png",
    },
  ];

  // All sponsor images from assets folder
  const sponsorLogo = [
    "/assets/images/hooli-logo.png",
    "/assets/images/lyft-logo.png",
    "/assets/images/dont-know-logo.png",
    "/assets/images/stripe-logo.png",
    "/assets/images/aws-logo.png",
    "/assets/images/discord-logo.png",
  ];

  return (
    <div className="flex flex-col">
      {/* Product Details component */}
      <div className="flex flex-col lg:w-10/12 w-11/12 mx-auto">
        <div className="mb-8 gap-y-5">
          <div className="grid md:grid-cols-2">
            <div className="image_preview_gallery lg:max-w-[500px] mx-auto md:mr-auto lg:max-h-[500px] relative lg:w-[400px] lg:h-[400px] w-[90%] max-w-[350px] md:w-[280px] md:h-[280px] rounded-md">
              {/* Navigation buttons */}
              <div className="h-[40px] mb-4 mx-auto md:ml-0 flex w-fit items-center gap-x-1 font-semibold text-base md:text-xl">
                <Link href="/" className="hover:border-b" passHref>
                  Home
                </Link>
                <IoIosArrowForward className="text-neutral-400" />
                <span className="text-neutral-400 hover:border-b cursor-pointer">Shop</span>
              </div>
              {/* Product Image and tumbnails */}
              <ImageGallery
                showPlayButton={false}
                items={transformedImages}
                thumbnailPosition="bottom"
                showFullscreenButton={false}
              />
            </div>
            <div className="flex flex-col mt-4 md:mt-0 md:gap-y-0 max-w-[500px]">
              <div className="h-[40px] mb-4"></div>
              <div className="flex flex-col gap-y-1">
                <p className="text-lg md:text-xl">Floating Phone</p>
                <div className="flex items-center md:text-xl text-lg gap-x-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <p className="font-semibold text-neutral-700 text-sm md:text-base">
                    10 Reviews
                  </p>
                </div>
                <p className="font-bold text-lg md:text-xl">$1,139.33</p>
                <div className="flex gap-x-1 font-semibold">
                  <span>Availability:</span>
                  <span className="text-[#23A6F0]">In stock</span>
                </div>
                <p className="my-2 lg:h-[200px] md:h-[100px]">
                  <p className="md:hidden">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                    official consequent door ENIM RELIT Mollie. Excitation venial consequent
                    sent nostrum met.
                  </p>
                </p>
              </div>

              <div className="flex flex-col gap-y-3">
                <hr />
                <div className="flex items-center gap-x-2">
                  <div className="bg-[#23A6F0] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#2DC071] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#E77C40] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                  <div className="bg-[#252B42] md:h-8 md:w-8 h-7 w-7 rounded-full"></div>
                </div>
                <div className="flex  items-center gap-x-3">
                  <button className="w-fit md:px-10 md:py-3 px-6 py-2 text-neutral-50 bg-[#23A6F0] rounded-md">
                    Select Options
                  </button>
                  <div className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl">
                    <IoMdHeartEmpty />
                  </div>
                  <div className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl">
                    <BsCart />
                  </div>
                  <div className="border border-neutral-300 rounded-full p-2 text-xl md:text-2xl">
                    <IoEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More product details */}

        <div className="hidden md:flex flex-col">
          <div className="flex flex-col gap-x-3 my-8 gap-y-5">
            <div className="font-bold flex border-b py-6 lg:w-10/12 lg:px-16 mx-auto mb-4">
              <div className="flex mx-auto gap-x-5 my-2">
                <p>Description</p>
                <p>Additional Information</p>
                <div>
                  <span>Reviews </span>
                  <span className="text-green-800">(0)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center mx-auto gap-x-8">
              <div className="flex-col max-w-[500px] gap-y-4 flex">
                <h3 className="font-semibold text-lg md:text-xl">The quick fox jumps over</h3>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
                <p className="border-left border-green-600 border-l-4 pl-6">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
                  official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
                  nostrum met.
                </p>
              </div>
              <div className="relative lg:w-[400px] md:ml-auto lg:max-w-[500px] lg:max-h-[500px] lg:h-[400px] w-[280px] h-[280px] bg-yellow-300">
                <Image
                  src="/assets/images/product-description-pics.png"
                  alt="product description image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          {/* Best seller products */}
          <BestSellerProducts showAllDetails={false} />
        </div>
      </div>

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
