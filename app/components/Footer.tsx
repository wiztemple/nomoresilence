import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">
              Nigerian Terror Archive
            </h3>
            <p className="text-sm text-gray-600">
              A comprehensive database documenting terrorist incidents in
              Nigeria for educational and research purposes.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/organizations"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Organizations
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This archive is for informational purposes only. The information
              contained herein has been compiled from various sources and
              efforts have been made to ensure accuracy.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nigerian Terror Archive
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
