import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-10">
      &copy; {new Date().getFullYear()} Global News Hub. All rights reserved.
    </footer>
  );
}

export default Footer;
