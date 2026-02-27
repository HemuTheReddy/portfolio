"use client";
import { useState } from "react";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="about" className="py-24 px-6 border-b-2 border-black">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left Column — Bio */}
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Hey! I&apos;m Hemansh, and I&apos;m currently a Master of Engineering student at Virginia Tech, where I&apos;m studying Computer Science with a focus on Data Analytics and AI. When I&apos;m not working on projects, I&apos;m usually reading, playing video games, at the gym, or hanging out with friends and family.
                        </p>

                        {/* Expandable section */}
                        <div
                            className={`space-y-6 overflow-hidden transition-all duration-500 ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="pt-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">The Path to Now</h3>
                                <div className="space-y-5">
                                    <p>
                                        My start in college was a bit of a reality check. During my 1st year at George Mason, I decided to take a TensorFlow course on Udemy after hearing the buzz around &quot;AI&quot;. It was a steep learning curve and probably a bit too advanced for a beginner, and although I probably didn&apos;t fully grasp all of the concepts, it forced me to learn the fundamentals of building data science and model building.
                                    </p>
                                    <p>
                                        I decided to transfer to Virginia Tech my 2nd year to study Computational Modeling and Data Analytics because of my interest in data and AI. This proved to be a great decision as the amount of opportunities I got here were tremendous. I made a lot of new friends and also spent two years as a researcher at the Hume Center, where I got my first taste of working on technical teams using GitLab and training a custom-built Reinforcement Learning agent from scratch using auto-generated testing data. But the whole process — from designing to testing to the constant dimensionality bugs in PyTorch — made me fall in love with this subject even more.
                                    </p>
                                    <p>
                                        After graduating with my B.S. in May 2025, I transitioned into the Master&apos;s program here at VT. I&apos;ve really enjoyed the depth of graduate-level coursework; it provides a level of intuition that goes far beyond the surface. My focus has now shifted toward making AI, dashboards, and analysis production-ready.
                                    </p>
                                    <p>
                                        After spending my third year of undergrad formalizing my data science/ML knowledge, I&apos;m now focused on using various cloud platforms to take my models and visualizations out of a notebook and put them into the world for people to actually use. I&apos;m currently applying this to my own interests by building a Steam game recommendation platform on AWS — it&apos;s been the perfect way to bridge my fascination with AI with my love for gaming.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                            <span>{expanded ? "Read Less" : "Read More"}</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Column — Education */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Education</h3>
                        <div className="space-y-4">

                            {/* GMU */}
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <h4 className="font-bold text-gray-900">George Mason University</h4>
                                    <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">Aug 2022 – May 2023</span>
                                </div>
                                <p className="text-sm text-gray-600">B.S. Computer Science</p>
                                <p className="text-xs text-gray-400 mt-1">Fairfax, VA</p>
                            </div>

                            {/* VT BS */}
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <h4 className="font-bold text-gray-900">Virginia Tech</h4>
                                    <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">Aug 2023 – May 2025</span>
                                </div>
                                <p className="text-sm text-gray-600">B.S. Computational Modeling & Data Analytics</p>
                                <p className="text-xs text-gray-400 mt-1">Blacksburg, VA</p>
                            </div>

                            {/* VT MEng */}
                            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
                                <div className="flex items-start justify-between gap-3 mb-1">
                                    <h4 className="font-bold text-gray-900">Virginia Tech</h4>
                                    <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">Aug 2025 – Dec 2026</span>
                                </div>
                                <p className="text-sm text-gray-600">M.Eng. Computer Science</p>
                                <p className="text-xs text-gray-400 mt-1">Alexandria, VA · Expected Dec 2026</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
