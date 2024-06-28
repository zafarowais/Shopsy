import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaAngleDown,
  FaGem,
  FaTshirt,
  FaHome,
  FaGift,
  FaGamepad,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [hoveredSubSubItem, setHoveredSubSubItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (title) => {
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHoveredSubItem(null);
    setHoveredSubSubItem(null);
  };

  const handleSubMouseEnter = (title) => {
    setHoveredSubItem(title);
  };

  const handleSubSubMouseEnter = (title) => {
    setHoveredSubSubItem(title);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const navItems = [
    {
      title: "Jewelry & Accessories",
      path: "/",
      icon: <FaGem />,
      subItems: [
        {
          title: "Necklaces",
          path: "/",
          subSubItems: [
            { title: "Diamond", path: "/" },
            { title: "Gold", path: "/" },
            { title: "Silver", path: "/" },
          ],
        },
        { title: "Earrings", path: "/" },
        { title: "Bracelets", path: "/" },
      ],
    },
    {
      title: "Clothing & Shoes",
      path: "/",
      icon: <FaTshirt />,
      subItems: [
        {
          title: "Men's Clothing",
          path: "/",
          subSubItems: [
            { title: "Shirts", path: "/" },
            { title: "Pants", path: "/" },
            { title: "Jackets", path: "/" },
          ],
        },
        { title: "Women's Clothing", path: "/" },
        { title: "Shoes", path: "/" },
      ],
    },
    {
      title: "Home & Living",
      path: "/",
      icon: <FaHome />,
      subItems: [
        {
          title: "Furniture",
          path: "/",
          subSubItems: [
            { title: "Living Room", path: "/" },
            { title: "Bedroom", path: "/" },
            { title: "Kitchen", path: "/" },
          ],
        },
        { title: "Bedding", path: "/" },
        { title: "Decor", path: "/" },
      ],
    },
    {
      title: "Wedding & Party",
      path: "/",
      icon: <FaGift />,
      subItems: [
        { title: "Wedding Dresses", path: "/" },
        { title: "Party Supplies", path: "/" },
      ],
    },
    {
      title: "Toys & Entertainment",
      path: "/",
      icon: <FaGamepad />,
      subItems: [
        {
          title: "Toys",
          path: "/",
          subSubItems: [
            { title: "Action Figures", path: "/" },
            { title: "Dolls", path: "/" },
            { title: "Educational Toys", path: "/" },
          ],
        },
        { title: "Games", path: "/" },
        { title: "Movies", path: "/" },
      ],
    },
    {
      title: "Art & Collectibles",
      path: "/",
      icon: <FaPaintBrush />,
      subItems: [
        {
          title: "Paintings",
          path: "/",
          subSubItems: [
            { title: "Oil Paintings", path: "/" },
            { title: "Watercolor", path: "/" },
            { title: "Acrylic Paintings", path: "/" },
          ],
        },
        { title: "Sculptures", path: "/" },
        { title: "Collectible Cards", path: "/" },
      ],
    },
    {
      title: "Craft Supplies & Tools",
      path: "/",
      icon: <FaTools />,
      subItems: [
        {
          title: "Craft Tools",
          path: "/",
          subSubItems: [
            { title: "Cutting Tools", path: "/" },
            { title: "Measuring Tools", path: "/" },
            { title: "Craft Storage", path: "/" },
          ],
        },
        { title: "Fabric & Sewing", path: "/" },
        { title: "Scrapbooking", path: "/" },
      ],
    },
  ];

  const filteredNavItems = navItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 bg-headerBG absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="relative w-full md:w-1/3 hidden md:block">
          <input
            type="text"
            className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-10 md:pr-16 rounded-lg text-sm focus:outline-none"
            placeholder="Search for Products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="absolute right-0 top-0 mt-2 mr-4 md:mr-6">
            <FaSearch className="text-gray-600" />
          </button>
        </div>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            Shopping
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* Desktop navigation */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {filteredNavItems.map(({ title, path, subItems, icon }) => (
            
            <li
              key={title}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={path}
                className="hover:text-orange-500 flex flex-col items-center"
              >
                {icon}
                {title}
                {subItems && <FaAngleDown className="ml-1" />}
              </Link>
              {subItems && hoveredItem === title && (
                <ul className="absolute left-0 top-full mt-0 bg-white shadow-md rounded">
                  {subItems.map(({ title, path, subSubItems }) => (
                    <li
                      key={title}
                      className="group relative px-4 py-2"
                      onMouseEnter={() => handleSubMouseEnter(title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to={path}>{title}</Link>
                      {subSubItems && hoveredSubItem === title && (
                        <ul className="absolute left-full top-0 mt-0 bg-white shadow-md rounded">
                          {subSubItems.map(({ title, path }) => (
                            <li
                              key={title}
                              className="hover:text-orange-500 px-4 py-2"
                              onMouseEnter={() => handleSubSubMouseEnter(title)}
                            >
                              <Link to={path}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className="relative">
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {filteredNavItems.map(({ title, path, subItems }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={path} className="flex items-center">
                {title}
                {subItems && <FaAngleDown className="ml-10" />}
              </Link>
              {subItems && hoveredItem === title && (
                <ul className="absolute left-10 top-0 bg-white shadow-md rounded">
                  {subItems.map(({ title, path, subSubItems }) => (
                    <li
                      key={title}
                      className="hover:text-orange-500 my-2 relative"
                      onMouseEnter={() => handleSubMouseEnter(title)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to={path} className="flex items-center">
                        {title}
                        {subSubItems && <FaAngleDown className="ml-1" />}
                      </Link>
                      {subSubItems && hoveredSubItem === title && (
                        <ul className="absolute left-10 top-0 bg-white shadow-md rounded">
                          {subSubItems.map(({ title, path }) => (
                            <li
                              key={title}
                              className="hover:text-orange-500 my-2"
                            >
                              <Link to={path}>{title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
