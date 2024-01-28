import Image from "next/legacy/image";
import React from "react";

const Banner = () => {
  const bannerImage = [
    { id: 1, image: "/assets/images/media-bg-cover.png", bgClassName: "banner_image_one_bg" },
    {
      id: 2,
      image: "/assets/images/media-bg-cover(1).png",
      bgClassName: "banner_image_two_bg",
    },
    {
      id: 3,
      image: "/assets/images/media-bg-cover(2).png",
      bgClassName: "banner_image_three_bg",
    },
    {
      id: 4,
      image: "/assets/images/media-bg-cover(2).png",
      bgClassName: "banner_image_four_bg",
    },
  ];

  return (
    <div className="banner_bg">
      {bannerImage?.map((item, index) => (
        <div key={index} className={item.bgClassName}>
          <div className="banner_writeup_bg">
            <p className="writeup_color_text">5 Items</p>
            <p className="writeup_big_text">FURNITURE</p>
            <p>Read More</p>
          </div>
          <Image src={item.image} alt="" layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default Banner;
