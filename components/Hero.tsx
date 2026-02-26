import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 px-6 border-b-2 border-gray-400 flex justify-center">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 order-2 md:order-1 animate-in slide-in-from-bottom-8 duration-700 fade-in">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 text-balance">
                        Hi, I'm <span className="text-blue-600">Hemansh</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl text-balance leading-relaxed">
                        I am currently a First-Year Computer Science student at <span className="text-gray-900">Virginia Tech</span> getting my <span className="text-gray-900">Master of Engineering</span>.
                    </p>
                    <div className="pt-4 flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                            View Work
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-gray-900/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/profile.jpg"
                            alt="Hemansh"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
