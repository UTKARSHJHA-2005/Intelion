// The component which shows challeneges faced by the clients.
import React, { useEffect } from "react";
import { FaCloud, FaHandshake } from "react-icons/fa";// Icons
import { MdImportantDevices, MdOutlineNetworkCheck } from "react-icons/md";// Icon
import Aos from "aos";// Animations
import "aos/dist/aos.css"

const Work = () => {
  // Animation with 1sec timeline
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Challenges data(icon, title, description)
  const cards = [
    {
      icon: <MdImportantDevices className="w-16 h-16 text-fuchsia-600" />,
      title: "Datacenter & Hosting",
      description:
        "Our facility - Data Center - is the first in the USA that meets the strict ANSI/TIA-942 rated 4 certificate requirements for design, build and operate.",
    },
    {
      icon: <FaHandshake className="w-16 h-16 text-fuchsia-600" />,
      title: "Collaboration",
      description:
        "Despite modern cloud technology, your users operate in a familiar Microsoft Office environment and benefit from broad compatibility and low-threshold access.",
    },
    {
      icon: <FaCloud className="w-16 h-16 text-fuchsia-600" />,
      title: "Cloud Platform",
      description:
        "Customized cloud platform designed to improve performance, lower IT costs, and provide secure and reliable services to your company data from any device, anytime, anywhere.",
    },
    {
      icon: <MdOutlineNetworkCheck className="w-16 h-16 text-fuchsia-600" />,
      title: "Network and Connectivity",
      description:
        "Network topologies include hub, linear, tree, and star designs, each of which is set up differently to promote connectivity between computers or devices.",
    },
  ];

  return (
    <section className="relative py-24 bg-cover bg-center md:bg-fixed before:absolute before:inset-0 before:bg-black/50" 
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>{/* Dark Overlay */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div data-aos="zoom-in" className="text-center mb-16">
          {/* Header */}
          <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            You Have <span className="text-fuchsia-400 font-extrabold">Challenges</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-600 mx-auto my-6"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide enterprise-grade solutions to address your most complex business needs.
          </p>
        </div>
        <div data-aos="zoom-out" className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Challenges Cards */}
          {cards.map((card, index) => (
            <div key={index} 
              className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-fuchsia-500/30 hover:scale-105 group">
              <div className="h-2 bg-gradient-to-r from-fuchsia-600 to-purple-600"></div>
              <div className="p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-white rounded-lg shadow-lg border border-gray-100 group-hover:bg-fuchsia-50 transition-colors duration-300">
                    {card.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-fuchsia-700 transition-colors duration-300">{card.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
