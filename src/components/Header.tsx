type HeaderProps = {
    activeSection: string;
};

export default function Header(props: HeaderProps) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <ul className="flex justify-center space-x-8 text-sm font-semibold">
                    {["Home", "About", "Blog", "Timeline"].map((item) => (
                        <li key={item}>
                            <a
                                href={`/${
                                    item === "Home" ? "" : item.toLowerCase()
                                }`}
                                className={`uppercase tracking-widest transition-colors duration-300 ${
                                    props.activeSection === item
                                        ? "text-white border-b-2 border-blue-500"
                                        : "text-gray-400 hover:text-gray-300"
                                }`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
