// The component shows the events organised by the Intelion.
import React, { useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react"; // Icons
import AOS from "aos";// Animations
import "aos/dist/aos.css";

const Events = () => {
  // Animation with timeline of 1sec
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);

  // Event data(id, date, img, location, time, title, description)
  const eventData = [
    {
      id: 1,
      date: "Saturday, 29 March",
      img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Webinar",
      time: "11 AM - 1 PM",
      title: "AI Center of Excellence in Education",
      description:
        "Discover how Finolity and Ingram Micro leverage Microsoft Teams to transform hybrid work strategies, improve collaboration, and drive innovation for business.",
    },
    {
      id: 2,
      date: "Sunday, 25 May",
      img: "https://plus.unsplash.com/premium_photo-1661759476421-af5519793034?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "New Delhi",
      time: "12 PM - 2 PM",
      title: "Finolity Green Horizons Summit 2025",
      description:
        "Join the Finolity Green Horizons 2025 to explore innovative solutions for sustainability and green technology. Discover actionable insights and network with industry leaders.",
    },
    {
      id: 3,
      date: "Sunday, 15 September",
      img: "https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Bangalore",
      time: "4 PM - 8 PM",
      title: "Finolity Ecosystem Partnerships",
      description:
        "Join the Finolity Ecosystem Partnerships Summit 2025 to explore innovative solutions and build robust partnerships. Discover actionable insights and network with industry leaders.",
    },
  ];

  return (
    <div className="relative w-full bg-cover bg-fixed bg-center py-20" style={{ backgroundImage: `url("https://plus.unsplash.com/premium_photo-1664476511089-d59d5ee34cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{/* Dark overlay */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <header data-aos="fade-right" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Upcoming <span className="text-yellow-400">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto my-4"></div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event data */}
          {eventData.map((item) => (
            <div key={item.id} data-aos="flip-left"
              className="relative group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/10 w-full h-[450px] shadow-lg">
              <div className="relative overflow-hidden h-56">
                <img alt={item.title} className="w-full h-full object-cover" src={item.img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 space-y-2">
                  <p className="flex items-center text-sm font-medium text-yellow-300">
                    <Calendar className="w-4 h-4 mr-2" /> {item.date}
                  </p>
                  <p className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" /> {item.location}
                  </p>
                  <p className="flex items-center text-sm text-gray-300">
                    <Clock className="w-4 h-4 mr-2" /> {item.time}
                  </p>
                </div>
              </div>
              <div className="p-5 h-[200px] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:from-yellow-600 hover:to-orange-600 shadow-md hover:shadow-lg">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
        <div data-aos="flip-up" className="mt-10 text-center">
          <button className="border border-white/20 text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition-all">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
