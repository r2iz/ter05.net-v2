import {motion} from "framer-motion";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import { Github, Mail, Twitter} from "lucide-react";

export default function Hero(){
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between relative overflow-hidden backdrop-blur-md"
        >
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
                                href="https://x.com/Pz2Or_"
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
                    className="w-1/2 md:w-1/3 h-1/2 md:h-1/4 bg-gradient-to-br from-blue-600 to-orange-400"
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
        </section>
    )
}