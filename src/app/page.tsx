"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Twitter, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Page() {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg shadow-md">
                <nav className="container mx-auto px-6 py-4">
                    <ul className="flex justify-center space-x-8 text-sm font-semibold">
                        {['Home', 'About'].map((item) => (
                            <li key={item}>
                                <a
                                    onClick={() => setActiveSection(item.toLowerCase())}
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

                {activeSection === 'home' && <Hero />}
                {activeSection === 'about' && <About />}

            </main>

            <footer className="py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-500">&copy; 2024 Pz2Or. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
