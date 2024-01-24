import Banner from "@/components/PagesComponents/Home/Banner";
import BestSellerProducts from "@/components/PagesComponents/Home/BestSellerProducts";
import CallToAction from "@/components/PagesComponents/Home/CallToAction";
import FeaturedPosts from "@/components/PagesComponents/Home/FeaturedPosts";
import Review from "@/components/PagesComponents/Home/Review";
import Services from "@/components/PagesComponents/Home/Services";
import { HomeMetadata } from "@/components/PagesComponents/Home/utlil/HomeMetadata";
import WebsiteMetadata from "@/components/WebsiteMetadata/WebsiteMetadata";
import React from "react";

const Home = () => {
  return (
    <WebsiteMetadata
      OG_Title_Content={HomeMetadata.OG_Title_Content}
      OG_Title_Key={HomeMetadata.OG_Title_Key}
      description={HomeMetadata.description}
      keywords={HomeMetadata.description}
      title={HomeMetadata.title}
    >
      <main className="flex flex-col mx-auto">
        <Banner />
        <BestSellerProducts showAllDetails={true} />
        <Services />
        <FeaturedPosts />
        <Review />
        <CallToAction />
      </main>
    </WebsiteMetadata>
  );
};

export default Home;
