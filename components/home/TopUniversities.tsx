type University = {
  _id: string;
  name: string;
  fees: string;
  rating: number;
  featured?: boolean;
  slug?: string;
};

interface TopUniversitiesProps {
  universities: University[];
}

export default function TopUniversities({
  universities,
}: TopUniversitiesProps) {
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
              key={uni._id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-yellow-50 to-slate-100">
                <span className="text-lg font-bold text-slate-500">
                  University Logo
                </span>
              </div>

              <div className="p-6">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                  {uni.featured ? "Featured" : "UGC Approved"}
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