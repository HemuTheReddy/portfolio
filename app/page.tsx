import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="w-full max-w-5xl">
        <Hero />

        <About />

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 border-b-2 border-black">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>

          <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
            {/* VT Logo - Top Right */}
            <div className="absolute top-6 right-6">
              <Image
                src="/vt-logo.svg"
                alt="Virginia Tech"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>

            {/* Header */}
            <div className="pr-16 mb-6">
              <h3 className="text-xl font-bold text-gray-900">Hume Center for National Security and Technology</h3>
              <p className="text-blue-600 font-medium mt-1">AI/ML Researcher</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-500">
                <span>Sept 2023 – May 2025</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-500">
                <span>Blacksburg, VA</span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Engineered an NLP-to-YAML data pipeline using a 70B parameter LLM (Llama-3.3 via Groq API) and a FastAPI backend; this tool parses natural language prompts to auto-generate valid network topologies (YAML files) for robust, scaled-environment RL training.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Designed, trained, and benchmarked Reinforcement Learning agents (Tabular Q-learning, Deep Q-Network) in PyTorch to perform cyber-network vulnerability analysis within the NASim simulation environment.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Optimized DQN agent sample efficiency and stability by implementing a target network and replay memory buffer; achieved a 20% increase in average reward on test networks, demonstrating a massive performance lift over the baseline NASim DQN-agent.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                <span>Conducted comparative analysis across agents (Tabular Q-learning vs. DQN) and strategies (Epsilon-Greedy vs. UCB). Used paired t-tests to determine statistical significance of reward differences, and benchmarked all models by visualizing reward convergence, DQN loss curves, and bootstrapped 95% confidence intervals.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-24 px-6 border-b-2 border-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
            <p className="text-gray-500 mb-12 text-center">A selection of recent work.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <ProjectCard
                title="Salesforce PowerBI Dashboard"
                description="Custom-built dashboard analyzing Salesforce SEC filings data using PowerBI and Python. Provides interactive views into revenue, expenses, and growth trends."
                technologies={["PowerBI", "Python", "Excel"]}
                image="/ExecSum.png"
                repoLink="https://github.com/HemuTheReddy/Salesforce-PowerBI-Dashboard"
                siteLink="/projects/powerbi"
              />
              <ProjectCard
                title="Manhattan Minutes: NYC Taxi Pulse"
                description="A comprehensive geospatial and statistical analysis of NYC Taxi trip data, combining backend statistical modeling with a production-ready interactive dashboard."
                technologies={["Python", "Dash"]}
                image="/NYC.png"
                repoLink="https://github.com/HemuTheReddy/NYC_Taxi_Visualizations"
                siteLink="https://nyc-taxi-dashboard-539265320212.us-east1.run.app/"
              />
              <ProjectCard
                title="Predicting Stress with AI"
                description="Stress and emotional detection using the WESAD dataset with consumer-grade and medical-grade wearable sensors to identify physiological stress markers."
                technologies={["Python", "Streamlit", "Scikit-learn"]}
                image="/weasd.png"
                repoLink="https://github.com/HemuTheReddy/Stress-Prediction"
                siteLink="https://ml-stress-pred.streamlit.app/"
              />
            </div>

            <div className="text-center">
              <Link href="/projects" className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                View All Projects &rarr;
              </Link>
            </div>
          </div>
        </section>

        <Skills />

        <Contact />
      </div>
    </main>
  );
}
