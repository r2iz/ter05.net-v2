import * as fs from 'fs';
import * as path from 'path';
import { join } from 'path';

const contentsDirectory = path.join(process.cwd(), 'contents');

export function getPostList() {
  return fs.readdirSync(contentsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(contentsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    return fileContents;
}

export function getAllPosts() {
    const slugs = getPostList();
    const posts = slugs.map((slug) => getPostBySlug(slug));
    return posts;
}