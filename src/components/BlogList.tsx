"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { type BlogPost } from '@/lib/api'


export default function BlogList({ posts }: { posts: BlogPost[] }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 py-16 max-w-4xl"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center text-white"
            >
                Blog Posts
            </motion.h1>

            <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-8"
            >
                {posts.map((post, index) => (
                    <motion.li
                        key={post.slug}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                        className="border-b border-gray-800 pb-4"
                    >
                        <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
                            <motion.a
                                className="group flex justify-between items-center"
                                whileHover={{ x: 10 }}
                            >
                                <div>
                                    <h2 className="text-xl font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">
                                        {post.frontMatter.title}
                                    </h2>
                                    <p className="text-sm text-gray-400">{post.frontMatter.date}</p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <ArrowRight className="text-blue-400" />
                                </motion.div>
                            </motion.a>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    )
}