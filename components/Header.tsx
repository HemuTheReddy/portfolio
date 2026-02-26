import Link from "next/link";

export default function Header() {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-gray-100 flex justify-center">
            <div className="w-full max-w-5xl px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
                    Hemansh
                </Link>

                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu button placeholder for future implementation */}
                <button className="md:hidden text-gray-600">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
