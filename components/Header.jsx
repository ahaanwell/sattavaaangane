"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import LeadModal from "./LeadModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  const [modelBtnLabel, setModelBtnLabel] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Price", link: "/price" },
    { name: "Floor Plan", link: "/floor-plan" },
    { name: "Master Plan", link: "/master-plan" },
    { name: "Location", link: "/location" },
    { name: "Amenities", link: "/amenities" },
    { name: "Gallery", link: "/#gallery" },
  ];

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Sttav Aarayna"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.link;

                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`font-medium transition px-3 py-2 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:text-[#ce3125]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  SetModelHeading("Download Brochure");
                  setModelBtnLabel("Download")
                  setIsModalOpen(true);
                }}
                className="font-medium transition px-3 py-2 text-gray-700 hover:text-[#ce3125]"
              >
                Brochure
              </button>
            </nav>

            {/* Desktop WhatsApp */}
            <div className="hidden lg:flex">
              <Link
                href="https://wa.me/919380660766"
                className="bg-primary text-white flex items-center gap-1 px-3 py-1 rounded-full font-medium hover:bg-[#ce3125] transition"
              >
                <FaWhatsapp />
                +919380660766
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary"
              onClick={() => setOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 space-y-4">

          {/* Close Button */}
          <div className="flex justify-end">
            <button 
            className="text-black"
            onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* Navigation Links */}
          {navLinks.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:text-[#ce3125]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Brochure Button */}
          <button
            onClick={() => {
              SetModelHeading("Download Brochure");
              setModelBtnLabel("Download")
              setIsModalOpen(true);
              setOpen(false);
            }}
            className="block w-full text-left px-3 py-2 font-medium text-gray-700 hover:text-[#ce3125]"
          >
            Brochure
          </button>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/919380660766"
            className="flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-full mt-6"
          >
            <FaWhatsapp />
            +919380660766
          </Link>
        </div>
      </div>

      {/* Lead Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel={modelBtnLabel}
      />
    </>
  );
}