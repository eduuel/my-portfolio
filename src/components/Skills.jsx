import { motion } from "framer-motion"

function Skills() {

  const skills = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
    "Java",
    "Android",
    "GitHub",
    "SQL"
  ]

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >

          <p className="text-blue-400 text-xl mb-4">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            Technologies and tools I use to create premium digital products.
          </h2>

        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-3xl p-8 text-center text-lg font-medium hover:-translate-y-2 transition duration-300"
            >

              {skill}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills