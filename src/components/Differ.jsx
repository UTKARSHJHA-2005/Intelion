// This component shows Why are we Different
import React, { useEffect } from "react";
import { RiMoneyDollarCircleLine, RiBookShelfFill } from "react-icons/ri";// Icons
import { TbBulbFilled } from "react-icons/tb";// Icon
import { IoIosPaperPlane } from "react-icons/io";// Icon
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

const Differ = () => {
  // Animation with timeline of 1 sec
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Features Info(Icon,background,border,title,description)
  const features = [
    {
      icon: <RiMoneyDollarCircleLine className="w-10 h-10 text-blue-600" />,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200",
      hoverColor: "group-hover:bg-blue-200",
      iconBoxShadow: "shadow-blue-200",
      title: "Cost-effectiveness",
      description:
        "We offer affordable IT solutions that help you reduce costs and improve efficiency.",
    },
    {
      icon: <TbBulbFilled className="w-10 h-10 text-orange-600" />,
      bgColor: "bg-orange-100",
      borderColor: "border-orange-200",
      hoverColor: "group-hover:bg-orange-200",
      iconBoxShadow: "shadow-orange-200",
      title: "Innovative Technology",
      description:
        "We stay up-to-date with the latest technology trends and offer innovative solutions to help you achieve your goals.",
    },
    {
      icon: <RiBookShelfFill className="w-10 h-10 text-green-600" />,
      bgColor: "bg-green-100",
      borderColor: "border-green-200",
      hoverColor: "group-hover:bg-green-200",
      iconBoxShadow: "shadow-green-200",
      title: "Industry Expertise",
      description:
        "We specialize in various industries, such as healthcare, finance, and manufacturing, offering tailored solutions to meet your goals.",
    },
    {
      icon: <IoIosPaperPlane className="w-10 h-10 text-purple-600" />,
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200",
      hoverColor: "group-hover:bg-purple-200",
      iconBoxShadow: "shadow-purple-200",
      title: "Scalability",
      description:
        "Our solutions are scalable and grow with your business, ensuring maximum value from your investment.",
    },
  ];

  return (
    <section className="relative py-20 bg-cover bg-center bg-fixed" style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}>
      <div className="absolute inset-0 opacity-50 bg-black"></div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl xl:text-6xl">
            We're <span className="text-purple-500">Different</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto my-6"></div>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Innovative technology solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Features */}
          {features.map((item, index) => (
            <div key={index} data-aos="fade-left"
            className="group bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 flex flex-col">
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <div 
                  className={`h-24 w-24 ${item.bgColor} ${item.borderColor} border-2 flex items-center justify-center rounded-full mb-6 transition-colors duration-300 ${item.hoverColor} ${item.iconBoxShadow} shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differ;