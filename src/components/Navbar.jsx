// The Navbar component at the top of page.
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; v //Icons 
import { Link } from "react-router-dom"; //Link
import logo from "../assets/logo.png"; //Logo

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For Mobile View
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="pb-6 bg-black bg-opacity-85 border-b border-black shadow-xl lg:pb-0" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="#" title="Aura UI" className="flex">
                            <img className="w-auto h-8 lg:h-10" src={logo} alt="Logo" height={200} width={200} />
                        </Link>
                    </div>
                    {/* Mobile Menu */}
                    <button type="button"
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>
                    {/* Desktop Menu */}
                    <div className="hidden mr-6 lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                            Home
                        </Link>
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                            Services
                        </Link>
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Solutions">
                            Industries
                        </Link>
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Resources">
                            Market Research
                        </Link>
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Pricing">
                            Company
                        </Link>
                        <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                            Brands
                        </Link>
                    </div>
                    <Link to="#" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button">
                        Contact Us
                    </Link>
                </nav>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                                    Home
                                </Link>
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                                    Services
                                </Link>
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Solutions">
                                    Industries
                                </Link>
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Resources">
                                    Market Research
                                </Link>
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Pricing">
                                    Company
                                </Link>
                                <Link to="#" className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600" title="Features">
                                    Brands
                                </Link>
                            </div>
                            <div>
                                <Link to="#" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header >
    );
};

export default Navbar;
