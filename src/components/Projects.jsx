import { motion } from "framer-motion"

function Projects() {
const projects = [

  {
    title: "Hirundo Security",
    description:
      "Professional security company website with modern responsive UI, business-focused design, and service showcase.",
    tech: "Vue.js • Tailwind CSS • Nuxt.js",
    live: "https://www.hirundosecurity.com",
  },

  {
    title: "Hirundo Business Website",
    description:
      "Responsive modern company website developed for client presentation and digital business visibility.",
    tech: "Modern Web Development",
    live: "https://site-znozxfbbl.godaddysites.com",
  },

  {
    title: "Denso Tracker",
    description:
      "Modern MERN stack inventory and spare parts tracking system with dashboard analytics, authentication, and reporting.",
    tech: "React • Node.js • MongoDB",
    live: "#",
  },

]

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 transition duration-300 group"
            >

              {/* IMAGE PLACEHOLDER */}
              <div className="h-56 bg-gradient-to-br from-blue-500 to-slate-800 flex items-center justify-center text-2xl font-bold">
                {project.title}
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-blue-400 mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4">

                  <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition">
                    Live Demo
                  </button>

                  <button className="border border-blue-500 hover:bg-blue-500 px-5 py-3 rounded-xl transition">
                    GitHub
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects