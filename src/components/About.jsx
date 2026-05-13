import { motion } from "framer-motion"

function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-slate-900"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 text-xl mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Building modern digital experiences with clean UI & powerful systems.
          </h2>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            💼 I help businesses turn ideas into modern web products with tailored solutions, 
            responsive user experiences, and efficient backend systems. My approach combines clean code, 
            clear communication, and on-time delivery 
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
           ⏱️, with ongoing support 🔧 to keep projects fast, 
            secure, and maintainable. I am passionate about future-proof solutions and long-term 
            collaborations that create real business impact.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            My goal is to build premium digital products that are
            modern, scalable, and impactful.
          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default About