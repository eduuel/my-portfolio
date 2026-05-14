import { motion } from "framer-motion"

function Education() {
  return (
    <section
      id="education"
      className="py-32 px-8 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >

          <p className="text-blue-400 text-xl mb-4">
            Education
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Academic Background
          </h2>

        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-10"
        >

          <p className="text-blue-400 text-lg mb-3">
            2020 — 2024
          </p>

          <h3 className="text-4xl font-bold mb-4">
            Bachelor's Degree in Software Engineering
          </h3>

          <p className="text-slate-300 text-xl mb-8">
            Debre Markos University
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Completed a Bachelor’s degree in Software Engineering
            with focus on modern software development, web technologies,
            databases, scalable systems, and application development.
          </p>

          {/* THESIS */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-8">

            <p className="text-blue-400 mb-3">
              Thesis Project
            </p>

            <h4 className="text-2xl font-bold mb-3">
              Zuret Travel Agency Web Application
            </h4>

            <p className="text-slate-400">
              Developed a full web application system for a travel agency
              with modern booking and management functionality.
            </p>

          </div>

          {/* SUBJECTS */}
          <div>

            <p className="text-blue-400 mb-5 text-lg">
              Relevant Subjects
            </p>

            <div className="flex flex-wrap gap-4">

              <span className="bg-slate-950 border border-slate-700 px-5 py-2 rounded-full">
                Advanced Web Programming
              </span>

              <span className="bg-slate-950 border border-slate-700 px-5 py-2 rounded-full">
                Database Management
              </span>

              <span className="bg-slate-950 border border-slate-700 px-5 py-2 rounded-full">
                Data Structures & Algorithms
              </span>

              <span className="bg-slate-950 border border-slate-700 px-5 py-2 rounded-full">
                Software Engineering
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Education