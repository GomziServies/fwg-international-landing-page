import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Sweta Patel",
            location: "California, US state",
            program: "Weight Loss",
            beforeImage: "/assets/beforeAfter/07.jpg",
            afterImage: "/assets/beforeAfter/08.jpg",
            result: "Lost 9 kg in 3 months",
            testimonial: `Living in Toronto, I was spending $300/month on a local trainer who didn't understand my vegetarian diet. FWG's coaches created meal plans with dal, sabzi, and roti that actually worked!`,
            rating: 5,
        },
        {
            id: 2,
            name: "Niddhi Bhalla",
            location: "Dubai, UAE",
            program: "Weight Loss",
            beforeImage: "/assets/beforeAfter/09.jpg",
            afterImage: "/assets/beforeAfter/10.jpg",
            result: "Loss 22 kg in 8 months",
            testimonial: `Dubai gym memberships cost AED 500+ monthly, and personal trainers were AED 200 per session. FWG's program cost me less than what I'd spend in 2 weeks here!`,
            rating: 5,
        },
        {
            id: 3,
            name: "Manali Patel",
            location: "USA",
            program: "Weight Loss",
            beforeImage: "/assets/beforeAfter/11.jpg",
            afterImage: "/assets/beforeAfter/12.jpg",
            result: "Loss 22 kg in 3 months",
            testimonial: `After struggling with PCOS for years in London, local nutritionists charged £80 per session. FWG's clinical nutrition program balanced my hormones and regularized my periods!`,
            rating: 5,
        },
    ];

    const handleTestimonialChange = (newIndex) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentTestimonial(newIndex);
            setTimeout(() => setIsTransitioning(false), 50);
        }, 400);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleTestimonialChange(
                (currentTestimonial + 1) % testimonials.length
            );
        }, 8000);
        return () => clearInterval(interval);
    }, [currentTestimonial]);

    const nextTestimonial = () => {
        handleTestimonialChange((currentTestimonial + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        handleTestimonialChange(
            (currentTestimonial - 1 + testimonials.length) %
                testimonials.length
        );
    };

    const currentClient = testimonials[currentTestimonial];

    return (
        <section
            id="testimonials"
            className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
        >
            <style>{`
                .testimonial-content {
                  transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .testimonial-content.fade-out {
                  opacity: 0;
                  transform: translateY(20px);
                }
                .testimonial-content.fade-in {
                  opacity: 1;
                  transform: translateY(0);
                }
            `}</style>

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        What Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Inspiring transformation stories from Indians living
                        abroad who trusted us with their fitness journey.
                    </p>
                </div>

                {/* Main Testimonial Card */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-10 border border-gray-200">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            {/* Images */}
                            <div
                                className={`testimonial-content ${
                                    isTransitioning ? "fade-out" : "fade-in"
                                }`}
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="relative">
                                        <Image
                                            src={currentClient?.beforeImage}
                                            alt="Before"
                                            className="w-64 h-64 object-cover rounded-2xl shadow-md"
                                        />
                                        <div className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded-md text-xs font-semibold">
                                            Before
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <Image
                                            src={currentClient?.afterImage}
                                            alt="After"
                                            className="w-64 h-64 object-cover rounded-2xl shadow-md"
                                        />
                                        <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                                            After
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className={`testimonial-content ${
                                    isTransitioning ? "fade-out" : "fade-in"
                                }`}
                            >
                                {/* Header */}
                                <div className="flex items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            {currentClient?.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {currentClient?.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center space-x-3 mb-6">
                                    <span className="bg-gradient-to-r from-primary to-accent text-white text-sm px-4 py-2 rounded-full font-medium shadow-sm">
                                        {currentClient?.program}
                                    </span>
                                    <span className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-full font-medium">
                                        {currentClient?.result}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-5">
                                    {[...Array(currentClient?.rating)]?.map(
                                        (_, i) => (
                                            <Icon
                                                key={i}
                                                name="Star"
                                                size={22}
                                                color="#fbbf24"
                                                className="fill-current"
                                            />
                                        )
                                    )}
                                </div>

                                {/* Testimonial */}
                                <blockquote className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-primary pl-4">
                                    "{currentClient?.testimonial}"
                                </blockquote>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-10">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-primary hover:text-primary shadow-sm transition"
                            >
                                <Icon name="ChevronLeft" size={20} />
                            </button>

                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() =>
                                            handleTestimonialChange(index)
                                        }
                                        className={`w-3 h-3 rounded-full transition ${
                                            index === currentTestimonial
                                                ? "bg-primary scale-110"
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:border-primary hover:text-primary shadow-sm transition"
                            >
                                <Icon name="ChevronRight" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
