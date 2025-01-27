import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-white mx-2">Home</div>
        </Link>
        <Link href="/news">
          <div className="text-white mx-2">News</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
