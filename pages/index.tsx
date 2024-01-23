import Banner from "@/components/PagesComponents/Home/Banner";
import CallToAction from "@/components/PagesComponents/Home/CallToAction";
import FeaturedPosts from "@/components/PagesComponents/Home/FeaturedPosts";
import BestSellerProducts from "@/components/PagesComponents/Home/BestSellerProducts";
import Review from "@/components/PagesComponents/Home/Review";
import Services from "@/components/PagesComponents/Home/Services";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main className="flex flex-col mx-auto">
      <Banner />
      <BestSellerProducts showAllDetails={true} />
      <Services />
      <FeaturedPosts />
      <Review />
      <CallToAction />
    </main>
  );
};

export default Home;
