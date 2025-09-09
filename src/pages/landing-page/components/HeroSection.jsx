import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import Image from "../../../components/AppImage";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const transformations = [
        {
            id: 1,
            before: "/assets/beforeAfter/13.jpg",
            after: "/assets/beforeAfter/14.jpg",
            name: "Vraj Parekh",
            location: "California, US state",
            result: "Loss 11kg in 3 months",
        },
        {
            id: 2,
            before: "/assets/beforeAfter/15.jpg",
            after: "/assets/beforeAfter/16.jpg",
            name: "Rushikesh Patel",
            location: "London, UK",
            result: "Loss 13kg in 3 months",
        },
        {
            id: 3,
            before: "/assets/beforeAfter/17.jpg",
            after: "/assets/beforeAfter/18.jpg",
            name: "Manali Patel",
            location: "USA",
            result: "Loss 10kg in 3 months",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % transformations?.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const handleBookDemo = () => {
        document
            .getElementById("demo-booking")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="bg-gradient-to-br from-white via-gray-50 to-green-50 min-h-screen flex items-center justify-center pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">
                    
                    {/* Left Side - Transformation Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl shadow-testimonial p-8 lg:p-10">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    Real Transformations
                                </h3>
                                <p className="text-base text-muted-foreground">
                                    Indians abroad achieving their goals
                                </p>
                            </div>

                            <div className="relative overflow-hidden rounded-xl">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${
                                            currentSlide * 100
                                        }%)`,
                                    }}
                                >
                                    {transformations?.map((t) => (
                                        <motion.div
                                            key={t?.id}
                                            className="w-full flex-shrink-0"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="text-center">
                                                    <div className="relative overflow-hidden rounded-lg h-56 mb-3">
                                                        <Image
                                                            src={t?.before}
                                                            alt={`${t?.name} before transformation`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-base font-medium text-red-600">
                                                        Before
                                                    </span>
                                                </div>
                                                <div className="text-center">
                                                    <div className="relative overflow-hidden rounded-lg h-56 mb-3">
                                                        <Image
                                                            src={t?.after}
                                                            alt={`${t?.name} after transformation`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium text-primary">
                                                        After
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4">
                                                <h4 className="text-lg font-semibold text-foreground mb-1">
                                                    {t?.name}
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {t?.location}
                                                </p>
                                                <p className="text-base font-medium text-primary mt-1">
                                                    {t?.result}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="flex justify-center space-x-2 mt-6">
                                {transformations?.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentSlide
                                                ? "bg-primary"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Hero Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.2 }}
                        className="text-center lg:text-left w-full max-w-xl mx-auto"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7 }}
                            className="mb-6"
                        >
                            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                                Transform Your Body, Transform Your Life - Now
                                for
                                <span className="text-primary">
                                    {" "}
                                    Indians Abroad
                                </span>
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium mb-8">
                                Why pay 3x higher abroad when you can access
                                India's trusted transformation studio?
                            </h2>
                        </motion.div>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7 }}
                            className="text-lg text-muted-foreground mb-8 leading-relaxed"
                        >
                            Get proven results from{" "}
                            <strong className="text-primary">
                                16,000+ transformations
                            </strong>{" "}
                            with India-specific diet plans, flexible time zones,
                            and coaching that understands your lifestyle abroad.
                        </motion.p>

                        {/* Key Benefits */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7 }}
                            className="grid sm:grid-cols-2 gap-4 mb-8"
                        >
                            {[
                                "Pay in your currency",
                                "Customized Diet plan",
                                "Flexible Time Zones",
                                "1-on-1 Zoom Sessions",
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-foreground">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a>
                            <Button
                                variant="default"
                                size="lg"
                                onClick={handleBookDemo}
                                iconName="Play"
                                iconPosition="left"
                                className="text-lg px-8 py-4"
                                
                            >
                                Book Your Trasform Now
                            </Button></a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
