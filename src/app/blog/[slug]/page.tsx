import { getBlogPost, getBlogPosts } from '@/lib/api'
import BlogPost from '@/components/BlogPost'
import type { Metadata } from 'next'
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = getBlogPost(params.slug)
    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }
    return {
        title: post.frontMatter.title,
        description: `Blog post: ${post.frontMatter.title}`,
    }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <main className="pt-12">
                <Header activeSection={"Blog"}></Header>
                    <BlogPost post={post}></BlogPost>
                <Footer></Footer>
            </main>
        </div>
    )
}