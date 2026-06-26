export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#07152F] py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full bg-yellow-500/20 px-5 py-2 text-sm font-medium text-yellow-400">
            About Simplidistance
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            Helping Students Make
            <span className="block text-yellow-400">
              Better Career Decisions
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
            Compare universities, courses, fees and eligibility in one place.
            Get expert counselling and admission support.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Simplidistance helps students find the best online and distance
              education universities across India.
            </p>

            <p className="mt-4 text-slate-600 leading-8">
              Our platform makes university comparison easy and transparent.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-100 h-[350px]" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-yellow-500">120+</h3>
              <p className="mt-2 text-slate-600">Universities</p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-yellow-500">85K+</h3>
              <p className="mt-2 text-slate-600">Students Guided</p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-yellow-500">4.9★</h3>
              <p className="mt-2 text-slate-600">Rating</p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-yellow-500">40%</h3>
              <p className="mt-2 text-slate-600">Fee Savings</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07152F] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready To Find Your Perfect University?
          </h2>

          <p className="mt-4 text-slate-300">
            Get free counselling from our experts today.
          </p>

          <button className="mt-8 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-slate-900 hover:bg-yellow-400 transition">
            Get Free Counselling
          </button>

        </div>
      </section>
    </main>
  );
}