import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div className="bg-black text-white min-h-screen font-sans">
            <main className="pt-12">
                <Header activeSection={"Blog"}></Header>
                    <div className="text-center font-bold">
                        製作中
                    </div>
                <Footer></Footer>
            </main>
        </div>
    );
}