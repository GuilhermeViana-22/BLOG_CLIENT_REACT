import React from "react";


const Footer = () => {
  return (
    <footer>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Primeira Coluna */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              About Us
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Segunda Coluna */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Help Center
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Terceira Coluna (Newsletter) */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
        <form className="flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md border border-gray-400 text-black flex-grow focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded-r-md text-white hover:bg-blue-600 mt-2 md:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="text-center mt-8">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
