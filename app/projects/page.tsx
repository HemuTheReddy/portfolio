import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: "Optimizing Mining Operations",
        description: "Collaborated with Komatsu Corporation to analyze large-scale mining data on Databricks. Identified critical outliers, applied t-SNE clustering, and built two interactive Plotly dashboards.",
        technologies: ["Python", "Plotly", "Databricks"],
        image: "/komatsu.jpg",
        repoLink: "",
        siteLink: "",
        detailLink: "/projects/komatsu"
    },
    {
        title: "Salesforce PowerBI Dashboard",
        description: "Custom-built dashboard analyzing Salesforce SEC filings data using PowerBI and Python. Provides interactive views into revenue, expenses, and growth trends.",
        technologies: ["PowerBI", "Python", "Excel"],
        image: "/ExecSum.png",
        repoLink: "https://github.com/HemuTheReddy/Salesforce-PowerBI-Dashboard",
        siteLink: "/projects/powerbi"
    },
    {
        title: "Manhattan Minutes: NYC Taxi Pulse",
        description: "A comprehensive geospatial and statistical analysis of NYC Taxi trip data, combining backend statistical modeling with a production-ready interactive dashboard.",
        technologies: ["Python", "Dash"],
        image: "/NYC.png",
        repoLink: "https://github.com/HemuTheReddy/NYC_Taxi_Visualizations",
        siteLink: "https://nyc-taxi-dashboard-539265320212.us-east1.run.app/"
    },
    {
        title: "Predicting Stress with AI",
        description: "Stress and emotional detection using the WESAD dataset with consumer-grade and medical-grade wearable sensors (Empatica E4, RespiBAN) to identify physiological stress markers.",
        technologies: ["Python", "Scikit-learn", "Streamlit"],
        image: "/weasd.png",
        repoLink: "https://github.com/HemuTheReddy/Stress-Prediction",
        siteLink: "https://ml-stress-pred.streamlit.app/"
    },
    {
        title: "Heart Disease Prediction",
        description: "Engineered features and validated ML models (XGBoost, Random Forest) for patient diagnosis. Achieved >99% recall and precision with the top-performing model.",
        technologies: ["Python", "XGBoost", "Random Forest"],
        image: "/heart.png",
        repoLink: "https://github.com/HemuTheReddy/Heart_Disease_Prediction",
        siteLink: ""
    },
    // {
    //     title: "Steam Game Recommendation System",
    //     description: "In progress — building a personalized game recommendation engine using collaborative filtering on Steam play data.",
    //     technologies: ["Python", "TensorFlow", "FastAPI"],
    //     image: "",
    //     repoLink: "",
    //     siteLink: ""
    // },
];

export default function Projects() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <Header />
            <div className="w-full max-w-5xl pt-32 px-6 pb-24">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Projects</h1>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        A collection of my work in Data Science, Machine Learning, and Full-Stack Development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
