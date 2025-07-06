import React, { useState } from 'react';
import { MessageCircle, Flame } from 'lucide-react';
import banner from '../assets/Testimonial.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { SparklesText } from "../components/ui/sparkles-text"


// Types
interface FeatureCard {
    icon: string;
    title: string;
    description: string;
    color: string;
}

interface ProcessStep {
    stepNumber: number;
    title: string;
    description: string;
    imageSrc: string;
}

const leftVariant: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const rightVariant: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

const topVariant: Variants = {
    hidden: { opacity: 0, y: -80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};


const featureVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
// FeatureCard Component
const FeatureCard: React.FC<{ feature: FeatureCard }> = ({ feature }) => {
    const getIcon = (iconName: string) => {
        const iconClasses = `w-15 h-12
         ${feature.color}`;
        switch (iconName) {
            case 'quote':
                return (
                    <img
                        src={c1}
                        className={iconClasses}
                        alt="Quote Icon"
                    />
                );
            case 'communication':
                return (
                    <img
                        src={c2}
                        className={iconClasses}
                        alt="Communication Icon"
                    />
                );
            case 'verified':
                return (
                    <img
                        src={c3}
                        className={iconClasses}
                        alt="Verified Icon"
                    />
                );
            default:
                return <div className={`${iconClasses} rounded-full bg-current`}></div>;
        }
    };

    return (
        <div className="bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-3">
                <div className={`p-4`}>
                    {getIcon(feature.icon)}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-0">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
            </div>
        </div>
    );
};

// Main CommingSoon Component
const CommingSoon: React.FC = () => {
    const [heroEmail, setHeroEmail] = useState('');
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistName, setWaitlistName] = useState('');

    const handleHeroSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Hero Email submitted:', heroEmail);
        setHeroEmail('');
    };

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Waitlist signup:', { email: waitlistEmail, name: waitlistName });
        setWaitlistEmail('');
        setWaitlistName('');
    };

    const features: FeatureCard[] = [
        {
            icon: 'quote',
            title: 'Quote Simplification',
            description: 'Get transparent, design-focused cost breakdowns.',
            color: 'text-purple-600',
        },
        {
            icon: 'communication',
            title: 'Seamless Communication',
            description: 'Talk to designers in your language for clear, comfortable collaboration.',
            color: 'text-green-600',
        },
        {
            icon: 'verified',
            title: 'Verified Professionals',
            description: 'We support trusted designers we can trust.',
            color: 'text-teal-600',
        },
    ];

    const steps: ProcessStep[] = [
        {
            stepNumber: 1,
            title: 'Quote Breakdown',
            description: 'Receive a clear, itemized breakdown of costs, including materials, labor, design charges, and timelines, making it easy to understand and compare.',
            imageSrc: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        },
        {
            stepNumber: 2,
            title: 'Receive Structured Proposals',
            description: 'Get detailed proposals from vendors, outlining their approach, timelines, and costs, all structured for easy evaluation and comparison.',
            imageSrc: 'https://images.pexels.com/photos/7578965/pexels-photo-7578965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        },
        {
            stepNumber: 3,
            title: 'Choose the Right Vendor',
            description: 'Select from trusted vendors based on transparent proposals, ensuring confidence in your choice for your interior design project.',
            imageSrc: 'https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        },
    ];

    return (

        <div className="min-h-screen flex flex-col">

            {/* Header 
            <header className="bg-[rgba(9,58,48,1)] text-white py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-white text-teal-700 rounded px-2 py-1 font-bold text-sm">
                            IM
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center text-sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span>WE WILL BE LIVE SOON :)</span>
                    </div>
                    <button className="bg-[rgba(9,58,48,1)] hover:bg-teal-500 px-4 py-2 rounded transition-colors duration-200 text-sm font-medium">
                        CONTACT US
                    </button>
                </div>
            </header> */}

            {/* Main Content */}
            <main className="flex-1">
                {/* Hero Section */}
                <section className="flex flex-col bg-purple-50 overflow-hidden  pt-[10px]">

                    <ContainerScroll
                        titleComponent={
                            <>
                                <h1 className="text-4xl font-semibold flex flex-wrap justify-center text-center leading-none">
                                    <SparklesText>
                                        <span className="text-[rgba(9,58,48,1)]">Interior Mandi</span> is Coming
                                    </SparklesText>
                                </h1>

                                <SparklesText
                                    as={
                                        <h1 className="text-2xl md:text-[2rem] font-bold mt-1 leading-none text-center text-white" />
                                    }
                                >
                                    Really Soon
                                </SparklesText>
                            </>

                        }
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            {/* Image as background */}
                            <img
                                src={banner}
                                alt="hero"
                                className="absolute inset-0 w-full h-full object-cover object-left-top"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                            {/* Content container */}
                            <div className="relative z-10 max-w-1xl mx-auto px-4 sm:px-6 lg:px-10 text-white text-left py-16">
                                <div className="mb-10">
                                    <div className="relative inline-block  py-9 mt-15 mb-6">
                                        <span className="relative z-10 bg-[rgba(255,255,255,0.1)] text-white px-4 py-2 rounded-full border  font-Castoro">
                                            COMING SOON
                                        </span>
                                    </div>

                                    <h1
                                        className="text-4xl sm:text-5xl lg:text-5xl mb-5"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Interior Design.
                                        <br />
                                        Transparent.
                                        <br />
                                        Trusted.
                                    </h1>
                                    <p className="text-1xl sm:text-1xl font-Playfair text-white mb-5 ">
                                        Simplifying home design choices & costs for <br /> everyone.
                                    </p>
                                </div>
                                <form onSubmit={handleHeroSubmit} className="max-w-md">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={heroEmail}
                                            onChange={(e) => setHeroEmail(e.target.value)}
                                            placeholder="Enter Email Address"
                                            className="flex-1 px-4 py-3 h-[40px] rounded-[15px] bg-gray-800 bg-opacity-80 text-white placeholder-gray-300 border border-gray-600 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[rgba(9,58,48,1)] hover:bg-teal-500 px-6 py-2 h-[40px] text-center rounded-[15px] text-[13px]  transition-colors duration-200 whitespace-nowrap"
                                        >
                                            NOTIFY ME
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </ContainerScroll>
                </section>



                {/* Features Section */}
                <section className="bg-purple-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={featureVariant}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                                    }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    <FeatureCard feature={feature} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Process Section */}
                <section className="pt-[150px]  bg-purple-50 px-4 sm:px-6 lg:px-8 ">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.0 rem' }}
                        >
                            From vision to quote — see
                            <br />
                            how it all works.
                        </h2>
                        <p className="text-medium leading-relaxed text-gray-600 mb-8 max-w-xl mx-auto">

                            Turn your ideas into action with ease. Interior Mandi guides you through <br />each step — from sharing your requirements to receiving transparent, <br />structured proposals from trusted vendors.
                        </p>
                        {/* <button className="bg-[#004D3B] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200" style={{ fontFamily: "'Castoro', serif" }}>
                            CONTACT US
                        </button> */}

                        <button className="bg-[rgba(9,58,48,1)] hover:bg-teal-500 text-white px-6 py-2 h-[40px] text-center rounded-[15px] text-[13px]  transition-colors duration-200 whitespace-nowrap"
                        >
                            NOTIFY ME
                        </button>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-20 bg-purple-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {steps.slice(0, 2).map((step, index) => (
                            <motion.div
                                key={step.stepNumber}
                                variants={index % 2 === 0 ? leftVariant : rightVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }} // 👈 plays only once, disables on scroll up
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <div className="text-left mb-4">
                                    <span className="inline-block bg-green-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg">
                                        Step {step.stepNumber}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="text-left">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                    <img
                                        src={step.imageSrc}
                                        alt={step.title}
                                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {steps.slice(2, 3).map((step) => (
                            <motion.div
                                key={step.stepNumber}
                                variants={topVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }} // 👈 plays only once
                                className="bg-white p-6 rounded-xl shadow-md lg:col-span-2"
                            >
                                <div className="text-left mb-4">
                                    <span className="inline-block bg-green-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg">
                                        Step {step.stepNumber}
                                    </span>
                                </div>
                                <div className="flex flex-col lg:flex-row items-center gap-12">
                                    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-xl">
                                        <img
                                            src={step.imageSrc}
                                            alt={step.title}
                                            className="w-full h-64 object-cover rounded-xl shadow-lg"
                                        />
                                    </div>
                                    <div className="lg:w-1/2 text-center lg:text-left">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>



                {/* Waitlist Section */}
                <section className="bg-[rgba(9,58,48,1)] py-16  px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <p className="text-sm font-medium mb-2">READY TO GET STARTED?</p>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Waitlist</h2>
                        <div className="flex items-center justify-center mb-8">
                            <Flame className="w-5 h-5 text-orange-400 mr-2" />
                            <span className="text-lg font-medium">500+ HOMEOWNERS ALREADY SIGNED UP</span>
                        </div>
                        <form onSubmit={handleWaitlistSubmit} className="max-w-lg mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3 mb-4 h-[50px]">
                                <input
                                    type="email"
                                    value={waitlistEmail}
                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                    placeholder="Email Address"
                                    className="flex-1 h-[2.5rem] px-4 w-[40] py-4 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30"
                                    required
                                />
                                <input
                                    type="text"
                                    value={waitlistName}
                                    onChange={(e) => setWaitlistName(e.target.value)}
                                    placeholder="Name"
                                    className="flex-1 h-[2.5rem] px-4 w-[40] py-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 h-[2.5rem] w-[40] py-2 bg-white text-black rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 whitespace-nowrap min-w-[130px]"
                                >
                                    NOTIFY ME
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CommingSoon;