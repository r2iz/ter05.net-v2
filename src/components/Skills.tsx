import {motion} from "framer-motion";

const skills = [
    {name: 'JavaScript', percentage: 80},
    {name: 'React', percentage: 70},
    {name: 'Node.js', percentage: 60},
    {name: 'Next.js', percentage: 60},
    {name: 'Golang', percentage: 50},
    {name: 'Linux', percentage: 70},
];

export default function Skills() {

    return (
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
        </section>)
}