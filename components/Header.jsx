"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDownload, FaWhatsapp } from "react-icons/fa";
import LeadModal from "./LeadModal";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
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
                  className={`font-medium transition px-3 py-2
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button 
            onClick={()=>{
                SetModelHeading("Download Brochure")
                setIsModalOpen(true)
              }}
            className="font-medium cursor-pointer transition px-3 py-2 text-gray-700 hover:text-blue-700">
            Brochure
          </button>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Link
              href="https://wa.me/919380660766"
              className="bg-primary text-white flex items-center gap-1 px-3 py-1 rounded-full font-medium hover:bg-blue-800 transition"
            >
              <FaWhatsapp/>
              +919380660766
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden py-4 space-y-4 border-t">
            {navLinks.map((item, index) => {
              const isActive = pathname === item.link;

              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`block px-3 py-2 rounded-md font-medium
                  ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <button 
            onClick={()=>{
                SetModelHeading("Download Brochure")
                setIsModalOpen(true)
              }}
            className="font-medium cursor-pointer transition px-3 py-2 text-gray-700 hover:text-blue-700">
            Brochure
          </button>
            <Link
              href="https://wa.me/919380660766"
              className="block bg-blue-900 text-white text-center py-2 rounded-full"
            >
              +919380660766
            </Link>
          </div>
        )}
      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} />
    </header>
  );
}