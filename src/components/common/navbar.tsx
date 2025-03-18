import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  // State to manage mobile menu
  const [isOpen, setIsOpen] = useState(false);

  //Cart Items Number
  const { cart } = useContext(CartContext)!;

  // Custom style for active link
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative before:transition-[width] before:duration-300 before:content-[''] before:block before:h-[2px] before:bg-blue-500 before:absolute before:left-0 before:-bottom-1 hover:before:w-full hover:font-bold ${
      isActive ? "font-bold before:w-full" : "before:w-0"
    }`;

  return (
    <nav className="bg-blue-50 shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold title-text">
          TechAcademy
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Home */}
          <div className="text-gray-700 hover:text-primary">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </div>

          {/* Cart  */}
          <div className="text-gray-700 hover:text-primary flex items-center relative">
            <NavLink to="/cart" className={navLinkClass}>
              <FiShoppingCart className="ml-1" />
            </NavLink>

            {/* Display Number of items in cart */}
            {cart.length > 0 && (
              <Link
                to="/cart"
                className="absolute -top-1/2 -right-1/2  bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
              >
                {cart.length}
              </Link>
            )}
          </div>

          {/* Admin */}
          <div className="text-gray-700 hover:text-primary flex items-center">
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-100 p-4 rounded-lg">
          {/* Home */}
          <div className="text-gray-700 hover:text-primary">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </div>

          {/* Cart */}
          <div className="text-gray-700 hover:text-primary flex items-center">
            <NavLink to="/cart" className={navLinkClass}>
              <FiShoppingCart className="ml-1" />
            </NavLink>
          </div>

          {/* Admin */}
          <div className="text-gray-700 hover:text-primary flex items-center">
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
