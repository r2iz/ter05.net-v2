import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <main className="pt-12">
                <Header activeSection={"About"}></Header>
                <About></About>
                <Footer></Footer>
            </main>
        </div>
    );
}