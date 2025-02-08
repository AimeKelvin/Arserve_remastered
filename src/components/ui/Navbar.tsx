"use client"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg font-semibold">Apollo Studios</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 text-sm">
          <li><a href="/" className="hover:text-gray-900">Home</a></li>
          <li><a href="#Services" className="hover:text-gray-900">Services</a></li>
          <li><a href="#Projects" className="hover:text-gray-900">Projects</a></li>
          <li><a href="#Price" className="hover:text-gray-900">Price</a></li>
          <li><a href="/about" className="hover:text-gray-900">About</a></li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-black text-white px-4 py-2 rounded-lg">
           Collaborate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-4 text-center bg-gray-100 p-4">
          <a href="#" className="block text-gray-600 text-sm hover:text-gray-900">Home</a>
          <a href="#" className="block text-gray-600 text-sm hover:text-gray-900">Services</a>
          <a href="#" className="block text-gray-600 text-sm hover:text-gray-900">Contact</a>
          <Button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Collaborate
          </Button>
        </div>
      )}
    </nav>
  );
}