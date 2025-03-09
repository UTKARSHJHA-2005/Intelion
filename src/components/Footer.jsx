// The Footer Component
import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";// Icon
import { FaLinkedinIn, FaInstagramSquare } from "react-icons/fa";// Icons
import { BsTwitter } from "react-icons/bs";//Icon
import { TbBrandGithubFilled } from "react-icons/tb";//Icons
import logo from "../assets/logo.png";//Logo

const Footer = () => {
    return (
        <footer className="relative text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>{/* Dark Overlay */}
            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <img src={logo} alt="logo" width={150} height={300} />
                        <p className="mt-4 text-sm text-gray-300 max-w-[300px]">
                            Empowering your business with seamless IT solutions, so you can focus on what truly matters.
                        </p>
                    </div>
                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-gray-300">
                                {["Home","Services", "Industries", "Market Research", "Company", "Brands"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:text-yellow-500 transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-300">
                                {['Events', 'Why Us', 'Blog', 'Team', 'Carrers', 'Partners', 'Reviews'].map((useCase, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:text-yellow-500 transition-colors">{useCase}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Solutions */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Solutions</h3>
                            <ul className="space-y-2 text-gray-300">
                                {["Digital Strategy & Design", "Cloud & Infrastructure", "ERP Solutions", "Software-as-Service", "Network Connectivity"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="hover:text-yellow-500 transition-colors">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* News & Updates */}
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-500 mb-4">News & Updates</h3>
                        <div className="flex items-center bg-gray-900 border border-yellow-500 rounded-lg overflow-hidden">
                            <input type="email" placeholder="Enter your Email" className="w-full px-4 py-2 bg-transparent placeholder-gray-400 text-white focus:outline-none" />
                            <button className="bg-yellow-500 px-4 py-3 text-black flex items-center">
                                <RiSendPlaneLine />
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-6 text-2xl">
                            {[TbBrandGithubFilled, BsTwitter, FaLinkedinIn, FaInstagramSquare].map((Icon, index) => (
                                <a key={index} href="#" className="hover:text-yellow-500 transition-colors">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="mt-8 text-center text-white">
                    <p className="text-sm">
                        &copy; 2025 <span className="text-yellow-500">Intelion</span>. Designed by Utkarsh Jha with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
