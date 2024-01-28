import Image from "next/legacy/image";
import { FaRegStar, FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="review_bg">
      <div className="review_writeup_bg">
        <h3 className="review_about_us">What they say about us</h3>
        <div className="user_image">
          <Image
            src="/assets/images/review-user.png"
            alt="user image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="stars_bg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <p className="review_writeup">
          Slate helps you see how many more days you need to work to <br /> reach your
          financial goal.
        </p>
        <div>
          <p className="reviewer_name">Regina Miles</p>
          <p className="review_job">Designer</p>
        </div>
      </div>
      <div className="review_grid_image_bg">
        <div className="review_grid_image">
          <Image
            src="/assets/images/review-grid.png"
            alt="review grid images"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
