import Banner from "@/components/PagesComponents/Home/Banner";
import CallToAction from "@/components/PagesComponents/Home/CallToAction";
import FeaturedPosts from "@/components/PagesComponents/Home/FeaturedPosts";
import FeaturedProducts from "@/components/PagesComponents/Home/FeaturedProducts";
import Review from "@/components/PagesComponents/Home/Review";
import Services from "@/components/PagesComponents/Home/Services";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-y-16 lg:w-10/12 mx-auto ">
      <Banner />
      <div className="lg:px-16 gap-y-20 flex flex-col">
        <FeaturedProducts />
        <Services />
        <FeaturedPosts />
        <Review />
        <CallToAction />
      </div>
    </main>
  );
};

export default Home;
