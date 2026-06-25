const universities = [
  {
    name: "Amity University Online",
    fees: "₹45,000 / Year",
    rating: "4.8",
    badge: "UGC Approved",
  },
  {
    name: "Manipal University Jaipur",
    fees: "₹42,000 / Year",
    rating: "4.7",
    badge: "NAAC A+",
  },
  {
    name: "LPU Online",
    fees: "₹39,000 / Year",
    rating: "4.8",
    badge: "Top Ranked",
  },
];

export default function TopUniversities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Top Universities
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Top Distance Education Universities
          </h2>

          <p className="mt-3 text-slate-600">
            Compare fees, approvals, rankings and courses.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Logo Area */}
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200" />

              <div className="p-6">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                  {uni.badge}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {uni.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Annual Fees
                    </p>

                    <p className="font-semibold text-slate-900">
                      {uni.fees}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-slate-500">
                      Rating
                    </p>

                    <p className="font-semibold text-yellow-600">
                      ⭐ {uni.rating}
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-xl bg-[#FBBF24] py-3 font-semibold text-slate-900 transition hover:bg-[#F59E0B]">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}