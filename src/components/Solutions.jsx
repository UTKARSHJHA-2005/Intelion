// The component shows the Solutions or services provided by the Intelion.
import React, { useEffect } from "react";
import { FaLaptopCode, FaMobileAlt, FaCloudDownloadAlt } from "react-icons/fa"; // Icons
import { FaPeopleGroup } from "react-icons/fa6"; // Icon
import Aos from "aos"; // Animations
import "aos/dist/aos.css";
import { MdOutlineMiscellaneousServices, MdOutlineSecurity } from "react-icons/md"; // Icons

const Solution = () => {
  // Animation with timeline 1 sec
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Solutions data(Icon,Title,Description)
  const features = [
    {
      icon: <MdOutlineMiscellaneousServices className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Managed Services",
      description:
        "Free up your resources to focus on business while we handle support and services.",
    },
    {
      icon: <FaPeopleGroup className="w-12 h-12 text-blue-600 mb-4" />,
      title: "IT Consulting & Advisory",
      description:
        "We help implement the right technology, managed and monitored for growth.",
    },
    {
      icon: <MdOutlineSecurity className="w-12 h-12 text-blue-600 mb-4" />,
      title: "CyberSecurity",
      description:
        "Identify vulnerabilities, assess risks, and protect your systems with robust security.",
    },
    {
      icon: <FaLaptopCode className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Web Development",
      description:
        "We help establish an impactful online presence and reach your target audience effectively.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Mobile Development",
      description:
        "Create a customized mobile app aligned with your brand and goals.",
    },
    {
      icon: <FaCloudDownloadAlt className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Cloud Services",
      description:
        "Find the right cloud solutions tailored to meet your business needs.",
    },
  ];

  return (
    <section className="relative py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div> {/* Dark overlay */}
      <div className="relative px-6 mx-auto max-w-7xl sm:px-10 lg:px-14 z-10">
        {/* Solutions */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
            We Have <span className="text-blue-400 font-extrabold">Solutions</span> 
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-600 mx-auto my-6"></div>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              Innovative technology solutions tailored to your business needs
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Features */}
          {features.map((feature, index) => (
            <div key={index} data-aos="flip-left"
              className="bg-white bg-opacity-95 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-opacity-100 hover:transform hover:scale-105">
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-gray-600 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;