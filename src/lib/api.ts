import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
    slug: string
    frontMatter: {
        title: string
        date: string
    }
    content: string
}

export function getBlogPosts(): BlogPost[] {
    const postsDirectory = path.join(process.cwd(), 'contents')
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data: frontMatter, content } = matter(fileContents)

        return {
            slug: filename.replace('.md', ''),
            frontMatter: frontMatter as BlogPost['frontMatter'],
            content,
        }
    })
}

export function getBlogPost(slug: string): BlogPost | undefined {
    const posts = getBlogPosts()
    return posts.find((post) => post.slug === slug)
}