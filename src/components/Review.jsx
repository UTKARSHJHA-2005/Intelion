// The component shows the reviews given and partnered companies.
import React, { useEffect, useState } from "react";
import { User, Star, ChevronLeft, ChevronRight } from "lucide-react"; // Icons

const Review = () => {
    // Testimonials data
    const testimonials = [
        {
            text: "Finolity implemented such a powerful platform that we had no break in service when our employees had to work from home due to COVID-19 pandemic.",
            name: "Prateek Kashyap",
            position: "CEO @ PyramidFabcon Limited",
            rating: 5,
        },
        {
            text: "Finolity is a way of the way managed services should be done. They do their very best to make sure you succeed. If there's an issue, the step is immediately.",
            name: "Shivam Rana",
            position: "CTO @ Kailasa Pictures",
            rating: 5,
        },
        {
            text: "Their cloud migration strategy transformed our operations and cut costs by 30%. The Finolity team's expertise and support exceeded all expectations.",
            name: "Anjali Mehta",
            position: "Operations Director @ TechVision",
            rating: 4,
        }
    ];

    // Partners logo
    const partners = [
        { name: "Microsoft", img: "https://banner2.cleanpng.com/20180320/dwq/av0pnqwyw.webp" },
        { name: "Cisco", img: "https://e7.pngegg.com/pngimages/49/1024/png-clipart-cisco-systems-logo-company-cef-text-sticker.png" },
        { name: "Dell", img: "https://banner2.cleanpng.com/20180619/awt/kisspng-dell-poweredge-computer-icons-dell-inspiron-equall-5b28993c9fe856.402292031529387324655.jpg" },
        { name: "HP", img: "https://banner2.cleanpng.com/20180413/lyw/avfbdsl42.webp" },
        { name: "Lenovo", img: "https://w7.pngwing.com/pngs/631/322/png-transparent-lenovo-logo-laptop-lenovo-thinkpad-thinkpad-x1-carbon-intel-dell-lenovo-logo-electronics-text-rectangle.png" },
        { name: "Adobe", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LbLfI5NAlOozywJ1EDsTiJ6gT5n40e7CxQ&s" },
        { name: "IBM", img: "https://w7.pngwing.com/pngs/180/10/png-transparent-ibm-logo-management-business-innovation-ibm-blue-angle-company-thumbnail.png" },
    ];

    // State to track the current testimonial
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Function to switch to the next testimonial
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    // Function to switch to the previous testimonial
    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-switch to the next testimonial every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-24 bg-fixed overflow-hidden text-white" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D")` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Header */}
                <header data-aos="flip-left" className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                        Trusted by <span className="text-orange-400">Industry Leaders</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto my-4"></div>
                </header>
                <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative p-8 bg-gray-800 rounded-xl shadow-lg">
                        <div data-aos="zoom-in" className="flex justify-between mb-6">
                            {/* Rating */}
                            <div className="flex">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="#FBBF24" />
                                ))}
                            </div>
                        </div>
                        {/* Review */}
                        <p className="text-lg italic mb-6">
                            {testimonials[currentTestimonial].text}
                        </p>
                        {/* Author and Position */}
                        <div data-aos="flip-up" className="flex items-center">
                            <User className="w-6 h-6 text-purple-400 mr-3" />
                            <div>
                                <h4 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h4>
                                <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].position}</p>
                            </div>
                        </div>
                        {/* Arrows */}
                        <div className="flex justify-between mt-6">
                            <button onClick={prevTestimonial} className="bg-gray-700 p-2 rounded-full">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextTestimonial} className="bg-gray-700 p-2 rounded-full">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    {/* Partners Logo and Name */}
                    <div data-aos="zoom-in-right" className="grid grid-cols-3 gap-8">
                        {partners.map((partner) => (
                            <div key={partner.name} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                                <img src={partner.img} alt={partner.name} className="w-16 h-16 object-contain mb-2" />
                                <span className="text-gray-300 text-sm">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
