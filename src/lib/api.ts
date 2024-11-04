import fs from "fs";
import path from "path";
import * as prod from "react/jsx-runtime";
import { ReactElement } from "react";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import {
    CustomH1,
    CustomH2,
    CustomH3,
    CustomP,
    CustomUl,
    CustomOl,
    CustomLi,
    CustomBlockquote,
    CustomCode,
    CustomPre,
    CustomImg,
} from "@/components/CustomComponents";
import { CustomLink } from "@/components/CustomLink";

export interface BlogPost {
    slug: string;
    frontMatter: {
        title: string;
        date: string;
    };
    content: ReactElement;
}

function markdownToReactElement(markdown: string): ReactElement {
    const production = {
        Fragment: prod.Fragment,
        jsx: prod.jsx,
        jsxs: prod.jsxs,
        components: {
            h1: CustomH1,
            h2: CustomH2,
            h3: CustomH3,
            p: CustomP,
            ul: CustomUl,
            ol: CustomOl,
            li: CustomLi,
            blockquote: CustomBlockquote,
            code: CustomCode,
            pre: CustomPre,
            img: CustomImg,
            a: CustomLink,
        },
    };

    const result = remark()
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeReact, production)
        .processSync(markdown);

    return result.result as ReactElement;
}

export function getBlogPosts(): BlogPost[] {
    const postsDirectory = path.join(process.cwd(), "contents");
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data: frontMatter, content } = matter(fileContents);

        const elementContent = markdownToReactElement(content);

        return {
            slug: filename.replace(".md", ""),
            frontMatter: frontMatter as BlogPost["frontMatter"],
            content: elementContent,
        };
    });

    return posts.sort((a, b) => {
        const dateA = new Date(a.frontMatter.date);
        const dateB = new Date(b.frontMatter.date);
        return dateB.getTime() - dateA.getTime();
    });
}

export function getBlogPost(slug: string): BlogPost | undefined {
    const posts = getBlogPosts();
    return posts.find((post) => post.slug === slug);
}
