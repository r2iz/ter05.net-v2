import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Component from "@/components/Timeline";

export default function Page() {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <main className="pt-12">
                <Header activeSection={"Timeline"}></Header>
                <Component></Component>
                <Footer></Footer>
            </main>
        </div>
    );
}
