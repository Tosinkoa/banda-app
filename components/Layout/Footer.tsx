import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-y-4 md:justify-between px-5 md:px-20 bg-[#FAFAFA] py-4">
        <p className="font-bold text-xl md:text-2xl">Bandage</p>
        <div className="flex items-center gap-x-3 text-[#23A6F0]">
          <FaFacebook className="text-xl" />
          <FaInstagram className="text-xl" />
          <FaTwitter className="text-xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-6 gap-4 md:gap-6 p-5 md:px-20">
        <div className="space-y-2 flex-col">
          <h3 className="my-2 font-semibold">Company info</h3>
          <p className="font-semibold text-neutral-500">About Us</p>
          <p className="font-semibold text-neutral-500">Carrier</p>
          <p className="font-semibold text-neutral-500">We are hiring</p>
          <p className="font-semibold text-neutral-500">Blog</p>
        </div>
        <div className="space-y-2 flex-col">
          <h3 className="my-2 font-semibold">Legal</h3>
          <p className="font-semibold text-neutral-500">About </p>
          <p className="font-semibold text-neutral-500">Carrier</p>
          <p className="font-semibold text-neutral-500">We are hiring</p>
          <p className="font-semibold text-neutral-500">Blog</p>
        </div>
        <div className="space-y-2 flex-col">
          <h3 className="my-2 font-semibold">Features</h3>
          <p className="font-semibold text-neutral-500">Business Marketing </p>
          <p className="font-semibold text-neutral-500">User Analytic</p>
          <p className="font-semibold text-neutral-500">Live Chat</p>
          <p className="font-semibold text-neutral-500">Unlimited Support</p>
        </div>
        <div className="space-y-2 flex-col">
          <h3 className="my-2 font-semibold">Resources</h3>
          <p className="font-semibold text-neutral-500">IOS & Android </p>
          <p className="font-semibold text-neutral-500">Watch a Demo</p>
          <p className="font-semibold text-neutral-500">Live Chat</p>
          <p className="font-semibold text-neutral-500">Customers</p>
          <p className="font-semibold text-neutral-500">API</p>
        </div>
        <div className="space-y-2 flex md:col-span-2 flex-col">
          <h3 className="my-2 font-semibold">Get in Touch</h3>
          <div className="flex">
            <input
              placeholder="Your Email"
              className="md:h-12 h-10 w-full bg-[#FAFAFA] border-neutral-200"
            />
            <button className="w-fit mx-auto md:px-4 px-2 py-3 md:h-12 h-10  text-neutral-50 bg-[#23A6F0] rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-1 font-medium text-neutral-500">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <p className="py-4 bg-gray-100 p-5 md:px-20 font-semibold text-neutral-600">
        Made With Love By Finland All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
