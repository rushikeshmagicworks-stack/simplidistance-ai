import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="bg-[#07152D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-400">
              Admissions Open 2025
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Find the Best
              <span className="block text-[#FBBF24]">
                Distance Education
              </span>
              University for Your Career
            </h1>

            <p className="mt-6 text-lg text-slate-300">
              Compare universities, courses, fees and eligibility in one place.
              Get free counselling and admission assistance from experts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#FBBF24] px-6 py-3 font-semibold text-slate-900 hover:bg-[#F59E0B] transition">
                Enquire Now
              </button>

              <button className="rounded-xl border border-slate-500 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                Download Brochure
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-3xl font-bold text-[#FBBF24]">120+</h3>
                <p className="text-slate-400">Universities</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#FBBF24]">85K+</h3>
                <p className="text-slate-400">Students Guided</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#FBBF24]">4.9★</h3>
                <p className="text-slate-400">User Rating</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#FBBF24]">40%</h3>
                <p className="text-slate-400">Fee Savings</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900">
                Enquire Now
              </h3>

              <p className="mt-2 text-slate-500">
                Fill your details and our experts will contact you.
              </p>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-xl border border-slate-300 p-3 text-slate-900"
                />

                <select className="w-full rounded-xl border border-slate-300 p-3 text-slate-900">
                  <option>Select State</option>
                </select>

                <select className="w-full rounded-xl border border-slate-300 p-3 text-slate-900">
                  <option>Select Course</option>
                </select>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#FBBF24] py-3 font-semibold text-slate-900 hover:bg-[#F59E0B]"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}