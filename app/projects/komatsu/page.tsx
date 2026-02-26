import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function KomatsuProject() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <Header />
            <div className="w-full max-w-4xl pt-32 px-6 pb-24">

                {/* Back link */}
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-10">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Hero image */}
                <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-10 shadow-md">
                    <Image
                        src="/komatsu.jpg"
                        alt="Optimizing Mining Operations"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Plotly", "Databricks"].map((tech) => (
                            <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                        Optimizing Mining Operations
                    </h1>
                    <p className="text-gray-500 text-lg">
                        A data analysis and visualization project in collaboration with Komatsu Corporation.
                    </p>
                </div>

                <hr className="border-gray-200 mb-10" />

                {/* Content */}
                <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed text-lg">
                    <p>
                        For my senior capstone, my team and I partnered with Komatsu Ltd to optimize the performance of their electric rope shovels. We started by meeting with their project leads and data SMEs to learn the ropes of mining operations, specifically focusing on the four states of a shovel cycle: dig, swing, dump, and return. Our main goal was to turn raw operational data into actionable insights that could reduce costs and boost productivity for their global clients.
                    </p>
                    <p>
                        The technical core of the project relied on Databricks, which served as our primary platform for team collaboration and large-scale data processing. We performed an extensive Exploratory Data Analysis on hundreds of thousands of entries, leveraging the platform&apos;s ability to handle massive datasets with high computational efficiency. To push beyond basic statistics, we explored various machine learning techniques, including dimensionality reduction (t-SNE) and predictive modeling (PCA Regression), to uncover complex patterns in shovel performance.
                    </p>
                    <p>
                        The project culminated with 2 dashboards, one interactive Plotly dashboard and one static Plotly dashboard. The interactive dashboard allowed users to explore the dataset with different KPIs, plot types, filter types, location, and time. The static dashboard was a culmination of all of our findings into one storytelling dashboard. These 2 dashboards provide current insights, and a tool for future non-technical employees at Komatsu to use to explore their data easily.
                    </p>
                    <p>
                        Overall, I learned a lot about working with a large team in this project. Alongside the technical portions, I gained experience in project management by adhering to strict Gantt chart timelines and coordinating distinct technical tasks across our team. Communicating our findings with Plotly taught me how to translate technical results into actionable advice for stakeholders while being mindful of the ethical impact our recommendations could have on operator safety and job security in the field.
                    </p>
                </div>

            </div>
        </main>
    );
}
