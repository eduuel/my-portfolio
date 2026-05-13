function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 bg-slate-900"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT */}
        <div>

          <p className="text-blue-400 text-xl mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Let’s build something amazing together.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            Feel free to contact me for websites,
            dashboard systems, MERN stack projects,
            tracking systems, and future collaborations.
          </p>

        </div>

        {/* RIGHT */}
        <div className="space-y-8">

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <p className="text-slate-400">
              0923595763
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-slate-400">
              eden21alex@gmail.com
            </p>

          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              Telegram
            </h3>

            <p className="text-slate-400">
              @e211312
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact