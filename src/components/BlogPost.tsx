"use client"

import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { type BlogPost } from '@/lib/api'

export default function BlogPost({ post }: { post: BlogPost }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 py-16 max-w-4xl"
        >
            <Link href="/blog" passHref legacyBehavior>
                <motion.a
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft className="mr-2" />
                    Back to Blog List
                </motion.a>
            </Link>

            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className=""
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl font-bold mb-4 text-white"
                >
                    {post.frontMatter.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-gray-400 mb-8"
                >
                    {post.frontMatter.date}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="prose prose-invert max-w-none"
                >
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </motion.div>
            </motion.article>
        </motion.div>
    )
}