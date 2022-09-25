import React from 'react'
import Link from "next/link"
import FooterCard from '../components/shared/FooterCard'
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import Button from '../components/shared/Button';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        {/* footer infos */}
        <div className="flex flex-wrap space-y-4 pb-10 pt-8 border-b justify-between items-center">
          <FooterCard
            image="/Icons/f_1.png"
            title="Free Shipping"
            subtitle="For all orders over $200"
          />
          <FooterCard
            image="/Icons/f_2.png"
            title="1 & 1 Returns"
            subtitle="Cancellation after 1 day"
          />
          <FooterCard
            image="/Icons/f_3.png"
            title="100% Secure Payment"
            subtitle="Gurantee secure payments"
          />
          <FooterCard
            image="/Icons/f_4.png"
            title="24/7 Dedicated Support"
            subtitle="Anywhere & anytime"
          />
          <FooterCard
            image="/Icons/f_5.png"
            title="Daily Offers"
            subtitle="Discount up to 70% OFF"
          />
        </div>
        {/* footer widgets */}
        <div className="my-10 flex flex-wrap gap-10 justify-between">
          {/* Contacts */}
          <div className="max-w-sm">
            <h2 className="text-xl mb-5 font-bold">Farmart - Your Online Foods & Grocery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</p>
            <div className="mt-10 space-y-2">
              <span className="flex">
                <FiPhoneCall className="text-grayColor mt-[5px]" />
                <div className="ml-4">
                  <p>Hotline 24/7:</p>
                  <h3 className="text-2xl font-bold">(+880) 1787-463481 </h3>
                </div>
              </span>
              <span className="flex !mt-5">
                <AiOutlineHome className="text-grayColor mt-[5px]" />
                <address className="ml-4 text-grayColor not-italic">Gazipur, Dhaka, Bangladesh</address>
              </span>
              <span className="flex">
                <AiOutlineMail className="text-grayColor mt-[5px]" />
                <p className="ml-4">sumihasan@gmail.com</p>
              </span>
            </div>
          </div>
          {/* Links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Useful Links</h2>
            <ul className="space-y-5">
              <FooterLink
                href="/"
                text="About Us"

              />
              <FooterLink
                href="/"
                text="Contact"
              />
              <FooterLink
                href="/"
                text="Help Center"
              />
              <FooterLink
                href="/"
                text="Carrer"
              />
              <FooterLink
                href="/"
                text="Sitemap"
              />
            </ul>
          </div>
          {/* Links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Help Center</h2>
            <ul className="space-y-5">
              <FooterLink
                href="/"
                text="Payments"
              />
              <FooterLink
                href="/"
                text="Shipping"
              />
              <FooterLink
                href="/"
                text="Product Returns"
              />
              <FooterLink
                href="/"
                text="FAQ"
              />
              <FooterLink
                href="/"
                text="Checkout"
              />
            </ul>
          </div>
          {/* Links */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Farmart Busines</h2>
            <ul className="space-y-5">
              <FooterLink
                href="/"
                text="Sell On Farmart"
              />
              <FooterLink
                href="/"
                text="Affiliate Program"
              />
              <FooterLink
                href="/"
                text="Our Suppliers"
              />
              <FooterLink
                href="/"
                text="Accessibility"
              />
              <FooterLink
                href="/"
                text="Advertise With Us"
              />
            </ul>
          </div>
          {/* Newsletter */}
          <div className="lg:max-w-sm">
            <h2 className="text-lg mb-6 font-bold">Farmart Newsletter</h2>
            <p>Register now to get updates on promotions and coupns. Don't worry! We not spam</p>
            <div className="flex items-center mt-4">
              <div className="flex flex-1 items-center border rounded p-4">
                <AiOutlineMail className="text-title mt-[5px]" />
                <input
                  type="text"
                  placeholder="Your email..."
                  className="outline-none bg-transparent px-4 flex-1"
                />
              </div>
              <Button
                title="Subscribe"
                className="self-stretch"
              />
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="py-10 w-[25%] mx-auto items-center border-t">
          <p className="text-sm mb-3 text-center">
            © {new Date().getFullYear()}
            <a href="https://sumi-portfolio.netlify.app/" target="_blank" className="underline" rel="noneferrer">  <b> Sumi Hasan</b> </a>.
            All rights reserved.
          </p>
          <img src="/Icons/footer-payments.png" alt="" />
          <div className="flex justify-between py-4">
            <span className="text-sm">Stay Connected :</span>
            <a href="https://www.facebook.com/sumihasan086" ><FaFacebookF /></a>
            <a href="https://www.instagram.com/sumihasan086/" ><BsInstagram /></a>
            <a href="https://www.linkedin.com/in/sumihasan/" ><FaLinkedinIn /></a>
            <a href="https://github.com/sumiHasan086" ><BsGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href = "#", text }) => (
  <li className="hover:text-primary transition-all duration-500">
    <Link href={href}>
      <a href={href}>{text}</a>
    </Link>
  </li>
)

export default Footer