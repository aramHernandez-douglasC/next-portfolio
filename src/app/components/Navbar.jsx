"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "@/app/components/Navlink";
import MenuOverlay from "@/app/components/MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LogoWhite from "../../../public/icons/logo_white.svg";
import Image from "next/image";
import GithubIcon from "../../../public/icons/github-icon.svg";
import LinkedinIcon from "../../../public/icons/linkedin-icon.svg";

//TODO: This will need to be dynamically loaded
const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
  {
    title: "Services",
    path: "/#services"
  },
  // TODO
  // {
  //   title: "Blog",
  //   path: "#"
  // }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed border-b border-slate-500 top-0 left-0 right-0 bg-black bg-opacity-90 z-10">
      <div className="flex lg:py-4 w-full items-center justify-between px-4 p-4 py-2">
        <Link
          href={"/"}>
          <Image width={200} src={LogoWhite} alt="Aram Dev Logo" />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title}></Navlink>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
