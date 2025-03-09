// The component shows the Acheivements of Intelion
import React, { useEffect } from "react";
import { FaUsers, FaEnvelope, FaChartLine, FaClock } from "react-icons/fa"; // Icons 
import AOS from "aos"; // Animations
import "aos/dist/aos.css";

const Stats = () => {
    // Animations with timeline of 1 sec
    useEffect(() => {
        AOS.init({duration: 1000,});
    }, []);

    // Info(Icons, Value, Label)
    const stats = [
        { icon: FaUsers, value: "98%", label: "Customer Satisfaction" },
        { icon: FaEnvelope, value: "470+", label: "Projects Completed" },
        { icon: FaChartLine, value: "70%", label: "Growth Last Year" },
        { icon: FaClock, value: "8yrs", label: "Proven Track Record" },
    ];

    return (
        <section className="relative py-24 bg-fixed text-white" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/spray-painted-graffiti-arrow-sprayed-isolated-with-white-background_731105-1490.jpg?semt=ais_hybrid")` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>{/* Dark overlay */}
            <div className="relative max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Displaying of information in boxes with the icons */}
                <div data-aos="zoom-out" className="flex flex-wrap justify-center items-center gap-12 mt-6">
                    {stats.map((stat, index) => (
                        <div key={index}
                        className="relative flex flex-col items-center bg-gray-800/80 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg mb-6">
                                <stat.icon className="w-10 h-10 text-white" />
                            </div>
                            <p className="text-5xl font-bold text-white">{stat.value}</p>
                            <p className="text-lg text-gray-300 mt-3">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;