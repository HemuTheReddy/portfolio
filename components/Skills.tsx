export default function Skills() {
    const techStack = {
        Languages: ["Python", "R", "SQL", "C/C++", "Java", "JavaScript"],
        Frameworks: ["PyTorch", "TensorFlow", "FastAPI", "React", "Next.js"],
        Tools: ["AWS", "Docker", "Git", "Tableau", "PowerBI", "Streamlit", "Dash", "Databricks", "Plotly"],
    };

    return (
        <section id="skills" className="py-24 px-6 border-b-2 border-black">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
                <div className="grid sm:grid-cols-3 gap-10">
                    {Object.entries(techStack).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-5 border-b-2 border-blue-100 pb-2">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center justify-center px-3 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 shadow-sm hover:border-blue-300 hover:shadow-md hover:text-blue-700 transition-all cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
