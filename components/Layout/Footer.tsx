import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-y-4 md:justify-between p-5 md:px-20">
        <p className="font-bold text-2xl">Bandage</p>
        <div className="flex items-center gap-x-3 text-blue-600">
          <FaFacebook className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaTwitter className="text-xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-6 gap-4 md:gap-6 p-5 md:px-20">
        <div className="flex-col">
          <h3 className="my-2 font-semibold">Company info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex-col">
          <h3 className="my-2 font-semibold">Legal</h3>
          <p>About </p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex-col">
          <h3 className="my-2 font-semibold">Features</h3>
          <p>Business Marketing </p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="flex-col">
          <h3 className="my-2 font-semibold">Resources</h3>
          <p>IOS & Android </p>
          <p>Watch a Demo</p>
          <p>Live Chat</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className="flex md:col-span-2 flex-col">
          <h3 className="my-2 font-semibold">Get in Touch</h3>
          <div>
            <input
              placeholder="Your Email"
              className="h-12 bg-neutral-100 border-neutral-200"
            />
            <button className="w-fit mx-auto px-4 py-3 h-12  text-neutral-50 bg-[#23A6F0] rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-1">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <p className="py-4 bg-neutral-100 p-5 md:px-20 font-semibold text-neutral-600">
        Made With Love By Finland All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
