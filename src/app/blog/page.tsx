import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { getBlogPosts } from "@/lib/api";

export default function Page() {
    const posts = getBlogPosts();
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <main className="pt-12">
                <Header activeSection={"Blog"}></Header>
                <BlogList posts={posts}></BlogList>
                <Footer></Footer>
            </main>
        </div>
    );
}
