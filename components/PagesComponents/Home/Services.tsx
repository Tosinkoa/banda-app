import Image from "next/legacy/image";
import { BiSolidBookReader } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services_bg">
      <div className="services_title_bg">
        <p className="featured_product">Featured Products</p>
        <h3>THE BEST SERVICES</h3>
        <p className="title_small_writeup">Problems trying to resolve the conflict between</p>
      </div>
      <div className="services_list_bg">
        <div className="each_service">
          <BiSolidBookReader className="each_service_icon" />
          <h3 className="each_title_heading">Easy Wins</h3>
          <p className="title_writeup">
            Get your best looking smile <br /> now!
          </p>
        </div>
        <div className="each_service">
          <div className="each_service_image">
            <Image
              src="/assets/images/carbon-book.png"
              layout="fill"
              objectFit="cover"
              className="mx-auto"
              alt="book icon"
            />
          </div>
          <h3 className="each_title_heading">Concrete</h3>
          <p className="title_writeup">
            Defalcate is most focused in <br /> helping you discover your most <br /> beautiful
            smile
          </p>
        </div>
        <div className="each_service">
          <FaArrowTrendUp className="each_service_icon" />
          <h3 className="each_title_heading">Growth</h3>
          <p className="title_writeup">
            Overcame any hurdle or any <br /> other problem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
