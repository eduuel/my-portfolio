import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa"
import profile from "../assets/eden.jpg"
import resume from "../assets/resume.pdf"
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 px-8 md:px-20 pt-32"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 text-2xl mb-5">
           Hi there! I'm  Eden Alemu
          </p>

         

          <h2 className="text-3xl md:text-4xl text-slate-300 mb-8">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
           With 2+ years of full-stack development experience, 
           I am recognized as 🌟 Top Rated Plus on Upwork (Top 3%), with ✅ 100% Job Success. 
           I focus on quality, reliability, and long-term client relationships 
           🤝 through scalable, user-focused solutions.
          </p>
{/* STATS */}
{/* STATS */}
<div className="flex flex-wrap gap-2 mt-6">

  <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs md:text-sm">
    🏅 Top Rated Plus
  </div>

  <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs md:text-sm">
    ✅ 100% Job Success
  </div>

  <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-xs md:text-sm">
    🚀 Top 3% Talent
  </div>

</div>
          {/* BUTTONS */}
          <div className="flex gap-6 flex-wrap mt-10">

          <a
  href={resume}
  target="_blank"
  className="bg-slate-900 border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-2xl text-lg transition"
>
  Explore Resume
</a>

            <a
              href="#contact"
               className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg transition"
            >
              Get in touch
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-8 text-4xl mt-12">

            <a
              href="https://github.com/eduuel"
              target="_blank"
            >
              <FaGithub className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/eden-alemu-2a21a8359"
              target="_blank"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://t.me/e211312"
              target="_blank"
            >
              <FaTelegram className="hover:text-blue-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 blur-3xl opacity-30 absolute"></div>

          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-[40px] border border-slate-800 bg-slate-900 flex items-center justify-center text-center p-10">

<div className="relative flex justify-center items-center">

  {/* GLOW EFFECT */}
  <div className="absolute w-[260px] h-[260px] bg-blue-500/30 blur-3xl rounded-full"></div>

  {/* PROFILE IMAGE */}
  <img
    src={profile}
    alt="Eden Alemu"
    className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] object-cover rounded-full border-4 border-slate-800 shadow-2xl"
  />

</div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero