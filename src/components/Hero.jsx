// The Hero which shows first glimpse of page.
import React, { useEffect } from "react";
import bghero from "../assets/bg-hero.png"; // Image
import Aos from "aos"; // Animations
import "aos/dist/aos.css";

const Hero=() =>{
  // Animations with timeline of 1 sec
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="relative w-full bg-cover overflow-hidden bg-fixed" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative px-4 py-24 mx-auto sm:px-6 lg:px-8 max-w-7xl min-h-screen flex items-center">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Written Part and Button */}
          <div data-aos="fade-right" className="text-white">
            <div data-aos="flip-down" className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-blue-600/30 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
              <span className="text-sm font-medium text-blue-200">Innovative IT Solutions</span>
            </div> 
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl leading-tight">
              Empowering your business with seamless IT solutions
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-blue-100/80">
              Finolity brings the best IT vendors to you, so you can focus on what truly matters.
            </p>
            <div className="mt-10">
              <a data-aos="flip-up" href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/30">
                Schedule a Free Consultation
              </a>
            </div>
          </div>
          {/* Right Column - Image */}
          <div data-aos="fade-left" className="relative hidden lg:flex justify-center items-center">
            <div className="relative bg-gradient-to-tr from-black to-indigo-900 p-8 rounded-2xl border border-white shadow-2xl backdrop-blur-sm">
              <img className="w-full max-w-lg rounded-lg" src={bghero} alt="Finolity IT Solutions Platform"/>
              <div className="absolute top-0 right-0 -mt-6 -mr-6  p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm shadow-lg">
                Trusted by 100+ companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;