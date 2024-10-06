import { motion } from 'framer-motion'
import { Github, Twitter, Mail } from 'lucide-react'

const careers = [
    {
        id: "1",
        title: "生誕",
        date: "2009/05/31",
    },
    {
        id: "2",
        title: "聖光学院中学校",
        date: "2022/04 - now",
    }
]

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 py-16 max-w-4xl"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
            </div>

            <div className="space-y-8">
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Who I am</h2>
                    <p className="text-gray-300 leading-relaxed">
                         TypeScript, Golang, Arch Linux, Future Bassが好きな中学生
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
                    <p className="text-gray-300 leading-relaxed">
                        自宅サーバー, web開発, Linux, アプリ開発(Flutter), ネットワーク, セキュリティ
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">What I Use</h2>
                    <p className="text-gray-300 leading-relaxed">
                        TypeScript, Golang, Next.js, React, Tailwind CSS, Flutter, Arch Linux, Nginx, Docker
                    </p>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Careers</h2>
                    <div>
                        {careers.map((career) => (
                            <div key={career.id} className="flex items-center justify-between py-2 border-b border-gray-800">
                                <p className="text-gray-300">{career.title}</p>
                                <p className="text-gray-300">{career.date}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/Pz2Or" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://twitter.com/Pz2Or_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={24} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="mailto:pub@ter05.net" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    )
}