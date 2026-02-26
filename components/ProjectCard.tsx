import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    repoLink?: string;
    siteLink?: string;
    detailLink?: string;
}

export default function ProjectCard({ title, description, technologies, image, repoLink, siteLink, detailLink }: ProjectCardProps) {
    return (
        <div className="group flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* Project Image */}
            <div className="relative w-full h-44 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Card Body */}
            <div className="flex flex-col flex-1 p-5 space-y-3">
                {/* Title + GitHub icon */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {title}
                    </h3>
                    {repoLink && (
                        <Link
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-gray-400 hover:text-gray-900 transition-colors mt-0.5"
                            aria-label={`View ${title} on GitHub`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links row */}
                {(siteLink || detailLink) && (
                    <div className="flex flex-wrap gap-3 pt-1">
                        {detailLink && (
                            <Link
                                href={detailLink}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                Read More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        )}
                        {siteLink && (
                            <Link
                                href={siteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Live Site
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
