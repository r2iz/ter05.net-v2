"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Twitter, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { name: 'JavaScript', percentage: 80 },
        { name: 'React', percentage: 70 },
        { name: 'Node.js', percentage: 60 },
        { name: 'Next.js', percentage: 60 },
        { name: 'Golang', percentage: 50 },
        { name: 'Linux', percentage: 70 },
    ];

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg shadow-md">
                <nav className="container mx-auto px-6 py-4">
                    <ul className="flex justify-center space-x-8 text-sm font-semibold">
                        {['Home', 'About', 'Skills'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`uppercase tracking-widest transition-colors duration-300 ${
                                        activeSection === item.toLowerCase()
                                            ? 'text-white border-b-2 border-blue-500'
                                            : 'text-gray-400 hover:text-gray-300'
                                    }`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="pt-12">
                <section
                    id="home"
                    className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between relative overflow-hidden backdrop-blur-md"
                >
                    {/* Left side: Icon and name horizontally aligned */}
                    <div
                        className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 w-full md:w-1/2 px-4 md:px-32">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8}}
                            className="flex items-center space-x-4"
                        >
                            <Avatar className="w-24 h-24 md:w-36 md:h-36 mr-0 md:mr-4">
                                <AvatarImage src="/icon.png"/>
                                <AvatarFallback>Pz2Or</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-center md:items-start">
        <span className="text-2xl md:text-4xl font-bold mt-3 text-center md:text-left">
          Torlka Nicla
        </span>
                                <p className="text-lg md:text-2xl text-gray-300 mt-2 text-center md:text-left">
                                    Web Developer
                                </p>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.8, delay: 0.4}}
                                    className="mt-4 flex space-x-6"
                                >
                                    <Link
                                        href="https://github.com/Pz2Or"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <Github/>
                                    </Link>
                                    <Link
                                        href="https://x.com/Pz2Or"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <Twitter/>
                                    </Link>
                                    <Link
                                        href="mailto:pub@ter05.net"
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <Mail/>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div
                        className="w-full md:w-1/2 h-full absolute top-0 right-0 flex items-center justify-center blur-3xl mt-12 md:mt-0 hidden md:flex"
                    >
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 0.6}}
                            transition={{duration: 1}}
                            className="w-1/2 md:w-1/3 h-1/2 md:h-1/4 bg-gradient-to-br from-blue-500 to-purple-700"
                            style={{
                                filter: 'blur(60px)',
                                clipPath:
                                    'polygon(50% 5%, 82% 0, 100% 40%, 100% 71%, 62% 84%, 25% 100%, 0 80%, 1% 52%, 17% 12%)',
                                height: '60%',
                                width: '70%',
                                zIndex: -1,
                            }}
                        ></motion.div>
                    </div>

                    {/* Centering ChevronDown */}
                    <div className="absolute bottom-14 w-full flex justify-center">
                        <ChevronDown className="text-gray-400 animate-bounce"/>
                    </div>
                </section>


                <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-100">About Me</h2>

                        {/* Section 1: Introduction */}
                        <div className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-10">
                            <p>
                                物心がついた頃にはコンピューターが好きだった中学生。
                                Web開発からインフラ管理まで色々やってます。
                            </p>
                        </div>

                        {/* Section 2: Hobbies & Interests */}
                        <div className="text-center mb-10">
                            <div>
                                <h3 className="text-3xl font-semibold mb-4 text-gray-100">Hobbies & Interests</h3>
                                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                                    プログラミング / ルーターをいじる / Linuxをいじる / 音楽を聴く
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-medium mb-12 text-center text-gray-100">My Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}
                                    className="bg-gray-800 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-white">{skill.name}</h3>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div className="bg-blue-600 h-2.5 rounded-full"
                                             style={{width: `${skill.percentage}%`}}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-500">&copy; 2024 Pz2Or. All rights reserved.</p>
                </div>
            </footer>

            <a
                href="#home"
                className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
                <ChevronDown className="transform rotate-180"/>
            </a>
        </div>
    );
}
