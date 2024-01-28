import Image from "next/legacy/image";
import Link from "next/link";
import { CgAlarm } from "react-icons/cg";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FeaturedPosts = () => {
  const featuredPostImage = [
    "/assets/images/featured-post.png",
    "/assets/images/feature-post(2).png",
    "/assets/images/feature-post(3).png",
  ];

  return (
    <div className="featured_post_bg">
      <div className="featured_post_title">
        <p className="">Practice Advice</p>
        <h3>Featured Posts</h3>
      </div>
      <div className="post_list_bg">
        {featuredPostImage?.map((eachImage) => (
          <div key={eachImage} className="each_post_list">
            <div className="each_post_image">
              <Image src={eachImage} alt="room picture" layout="fill" objectFit="cover" />
            </div>
            <div className="post_content">
              <div className="post_small_title">
                <p className="google_link">Google</p>
                <p className="other_link">Trending</p>
                <p className="other_link">New</p>
              </div>
              <p className="post_title">Loudest à la Madison #1 (L'integral)</p>
              <p>
                We focus on ergonomics and meeting you where you work. It's only a keystroke
                away.
              </p>
              <div className="chart_and_time_bg">
                <div className="chart_and_time_main_bg">
                  <CgAlarm className="time_icon" />
                  <span className="chart_and_time_title">22 April 2021</span>
                </div>
                <div className="chart_and_time_main_bg">
                  <FaChartArea className="chart_icon" />
                  <span className="chart_and_time_title">10 comments</span>
                </div>
              </div>
              <Link href="/#" passHref className="learn_more_link_bg">
                <span>Learn More</span>
                <IoIosArrowForward className="learn_more_icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
