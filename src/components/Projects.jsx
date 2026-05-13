import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "Denso Tracker",
      description:
        "A modern MERN stack inventory and spare parts tracking system with dashboard analytics and product management.",
      tech: "React • Node.js • MongoDB",
    },

    {
      title: "Food Ordering App",
      description:
        "Android food ordering application with cart system, checkout functionality, and SQLite database integration.",
      tech: "Java • Android • SQLite",
    },

    {
      title: "Hirundo Security",
      description:
        "Professional security company website with responsive modern UI and service showcase.",
      tech: "React • Tailwind CSS",
    },

    {
      title: "Electric Car Website",
      description:
        "Modern electric vehicle showcase website with clean animations and responsive layouts.",
      tech: "React • CSS",
    },

    {
      title: "Reminder App",
      description:
        "Simple mobile reminder application with notifications and task management functionality.",
      tech: "Kotlin • Android",
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-900">

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