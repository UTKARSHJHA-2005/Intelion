// The component which shows the News related to Intelion.
import React, { useEffect } from "react";
import Aos from "aos"; // Animations
import "aos/dist/aos.css";

const News = () => {
  // Animation with timeline of 1sec
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // News Data(id,Image,date,source,title)
  const newsData = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1683887034491-f58b4c4fca72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "24 January 2024",
      source: "ABP News",
      title: "Encouraging Universities: Finolity's Digital Campus Program",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "25 October 2024",
      source: "NDTV",
      title: "Finolity Becomes Authorized Corel Partner",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "4 November 2024",
      source: "The Straits Times",
      title: "Finolity Launches 'Namestair' for Cloud Services",
    },
  ];

  return (
    <div className="relative w-full bg-fixed bg-cover bg-center py-16" style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{/* Dark overlay */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */ }
        <header data-aos="zoom-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white flex justify-center items-center gap-2">
            <span>
              Latest <span className="text-pink-400">News</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto my-4"></div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Solution Cards */ }
          {newsData.map((item) => (
            <div key={item.id} data-aos="zoom-out"
              className="relative group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border border-white/20 h-full">
              <div className="relative overflow-hidden h-48">
                <img alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" src={item.image}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-3">
                  <p className="text-sm font-medium text-gray-300">
                    {item.date} · {item.source}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Finolity News</span>
                  <button className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-500/40 transition-colors">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */ }
        <div data-aos="flip-down" className="mt-10 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl">
            View All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
