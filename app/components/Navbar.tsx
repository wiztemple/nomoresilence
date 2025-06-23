import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className=" bg-[#f3f3ee] sticky top-2 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 bg-white shadow-sm rounded-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-medium text-gray-900">
              No More Silence
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/timeline"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Timeline
            </Link>
            <Link
              href="/organizations"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Organizations
            </Link>
            <Link
              href="/locations"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              About
            </Link>
          </div>

          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-3">
            <div className="flex flex-col space-y-2 pt-2 pb-3 border-t border-gray-200">
              <Link
                href="/"
                className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/timeline"
                className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                Timeline
              </Link>
              <Link
                href="/organizations"
                className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                Organizations
              </Link>
              <Link
                href="/locations"
                className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md text-base font-medium"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
