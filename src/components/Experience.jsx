import { motion } from "framer-motion"

function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-8 bg-slate-900"
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
            Experience & Certifications
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Professional Experience & Continuous Learning
          </h2>

        </motion.div>

        {/* EXPERIENCE GRID */}
       {/* EXPERIENCE GRID */}
<div className="grid md:grid-cols-3 gap-10">

          {/* WORK EXPERIENCE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-10"
          >

            <p className="text-blue-400 mb-3">
              June 2025 — Present
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Full Stack Developer
            </h3>

            <p className="text-slate-300 text-xl mb-6">
              Hirundo Security Solutions
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              Developing and maintaining modern responsive web applications,
              integrating backend services, REST APIs,
              and scalable frontend systems for real-world clients.
            </p>

            <div className="space-y-4 text-slate-400">

              <p>
                • Developed and maintained full stack applications using JavaScript, Express.js, Node.js, and MongoDB.
              </p>

              <p>
                • Integrated backend services and managed REST APIs for seamless frontend-backend communication.
              </p>

              <p>
                • Built responsive modern websites using Vue.js, Tailwind CSS, and Nuxt.js.
              </p>

              <p>
                • Collaborated remotely with teams and clients to deliver scalable digital solutions.
              </p>

              <p>
                • Provided ongoing maintenance, optimization, and technical support for deployed applications.
              </p>

            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-4 mt-8">

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                JavaScript
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                Node.js
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                Express.js
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                MongoDB
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                Vue.js
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                Tailwind CSS
              </span>

              <span className="bg-slate-900 px-4 py-2 rounded-full">
                Nuxt.js
              </span>

            </div>

          </motion.div>
{/* SOFTWARE TESTING */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="bg-slate-950 border border-slate-800 rounded-3xl p-10"
>

  <p className="text-blue-400 mb-3">
    Software Testing & QA
  </p>

  <h3 className="text-3xl font-bold mb-4">
    Software Tester — YouDrive App
  </h3>

  <p className="text-slate-400 leading-relaxed mb-6">
    Participated in software testing and quality assurance processes
    for the YouDrive application, identifying bugs,
    improving usability, and helping ensure application stability
    and user experience quality.
  </p>

  <div className="space-y-4 text-slate-400">

    <p>
      • Performed application testing and bug reporting.
    </p>

    <p>
      • Evaluated UI/UX functionality and user workflows.
    </p>

    <p>
      • Collaborated with development teams to improve application quality.
    </p>

    <p>
      • Helped ensure stable and reliable user experiences.
    </p>

  </div>

  {/* SKILLS */}
  <div className="flex flex-wrap gap-4 mt-8">

    <span className="bg-slate-900 px-4 py-2 rounded-full">
      QA Testing
    </span>

    <span className="bg-slate-900 px-4 py-2 rounded-full">
      Bug Reporting
    </span>

    <span className="bg-slate-900 px-4 py-2 rounded-full">
      UI/UX Testing
    </span>

    <span className="bg-slate-900 px-4 py-2 rounded-full">
      Software Quality
    </span>

  </div>

</motion.div>
          {/* CERTIFICATIONS */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-10"
          >

            <p className="text-blue-400 mb-8 text-xl">
              Certifications & Professional Development
            </p>

            <div className="space-y-8">

              {/* CERT 1 */}
              <div className="border-b border-slate-800 pb-6">

                <p className="text-slate-500 mb-2">
                  January 2024
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Android Developer Certificate — Udacity
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Completed Android development training focused on
                  mobile application architecture, UI design,
                  and modern Android development practices.
                </p>

              </div>

              {/* CERT 2 */}
              <div className="border-b border-slate-800 pb-6">

                <p className="text-slate-500 mb-2">
                  Professional Development
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Full Stack Web Development — MERN Stack
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Intensive training covering MERN stack development,
                  deployment workflows, REST APIs,
                  authentication systems, and CI/CD practices.
                </p>

              </div>

              {/* CERT 3 */}
              <div className="border-b border-slate-800 pb-6">

                <p className="text-slate-500 mb-2">
                  Artificial Intelligence & Innovation
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  AI & Idea Development — Udacity
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Studied modern AI concepts, innovation thinking,
                  and practical approaches for developing intelligent digital solutions.
                </p>

              </div>

              {/* CERT 4 */}
              <div>

                <p className="text-slate-500 mb-2">
                  Entrepreneurship Program
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  Entrepreneurship Certificate — U.S. Embassy
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  Completed entrepreneurship and leadership training
                  focused on innovation, business development,
                  and startup growth strategies.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default Experience