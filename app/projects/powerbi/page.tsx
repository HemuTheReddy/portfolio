import Header from "@/components/Header";
import Link from "next/link";

export default function PowerBIDashboard() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <Header />
            <div className="w-full max-w-5xl pt-32 px-6 pb-24">

                {/* Back link */}
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["PowerBI", "Python", "Excel"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                        Salesforce PowerBI Dashboard
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        A custom-built interactive dashboard analyzing Salesforce SEC filings data. Explore revenue trends, expense breakdowns, and growth metrics across multiple fiscal periods.
                    </p>
                    <a
                        href="https://github.com/HemuTheReddy/Salesforce-PowerBI-Dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                    </a>
                </div>

                <hr className="border-gray-200 mb-10" />

                {/* Embedded Dashboard */}
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <iframe
                        title="final_sec_dash"
                        width="100%"
                        height="600"
                        src="https://app.powerbi.com/view?r=eyJrIjoiYTJjZDQ1NDQtY2IwNy00OWVkLWJlNTctMDMxMzA3YTFmMzMyIiwidCI6IjYwOTU2ODg0LTEwYWQtNDBmYS04NjNkLTRmMzJjMWUzYTM3YSIsImMiOjF9"
                        frameBorder="0"
                        allowFullScreen={true}
                        className="w-full"
                    />
                </div>
                <p className="text-sm text-gray-400 mt-4 text-center">
                    Interactive dashboard — scroll and click within to explore the data.
                </p>

            </div>
        </main>
    );
}
