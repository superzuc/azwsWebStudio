"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Data } from '../../../types';
import{ urlFor } from '../lib/sanityImage';
import { FaBars, FaTimes } from 'react-icons/fa';

type Props = {
  data: Data;
};

export default function Navbar({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false); // Stato per l'hamburger menu
  const image = urlFor(data.image.asset);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white shadow-md relative">
      <div className="flex flex-row items-center gap-4">
        <img
          src={image}
          alt="AZWS Logo"
          className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
        />
        <div className="flex flex-col">
          <div className="font-extrabold text-3xl text-red-600 tracking-wide">AZWS</div>
          <div className="text-gray-600">Web Studio</div>
        </div>
      </div>

      {/* Icona Hamburger per i dispositivi mobili */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl text-red-600" /> : <FaBars className="text-2xl text-red-600" />}
        </button>
      </div>

      {/* Menu Desktop */}
      <div className="hidden lg:flex flex-row items-center gap-8">
        <Link href="/">
          <div className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
            Home
          </div>
        </Link>
        <Link href="/projects">
          <div className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
            My Projects
          </div>
        </Link>
        <Link href="#contact">
          <div className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
            Contatti
          </div>
        </Link>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden z-10">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/">
              <div onClick={toggleMenu} className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
                Home
              </div>
            </Link>
            <Link href="/projects">
              <div onClick={toggleMenu} className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
                My Projects
              </div>
            </Link>
            <Link href="#contact">
              <div onClick={toggleMenu} className="text-gray-700 hover:text-red-600 transition duration-300 ease-in-out text-lg font-semibold">
                Contatti
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}