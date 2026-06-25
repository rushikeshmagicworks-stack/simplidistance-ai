export default function CTASection() {
  return (
    <section className="bg-[#07152D] pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] p-10 lg:p-14">
          
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
                Need Help Choosing a University?
              </h2>

              <p className="mt-3 text-slate-800">
                Get free counselling from our admission experts.
              </p>
            </div>

            <button className="rounded-xl bg-[#07152D] px-8 py-4 font-semibold text-white transition hover:bg-[#0B1E3E]">
              Get Free Counselling →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}