export default function TrustBar() {
  return (
    <section className="relative bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Glass container */}
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm">
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            <div className="p-6 text-center hover:bg-slate-50 transition">
              <h3 className="text-3xl font-bold text-slate-900">120+</h3>
              <p className="text-slate-500 mt-1 text-sm">Universities</p>
            </div>

            <div className="p-6 text-center hover:bg-slate-50 transition">
              <h3 className="text-3xl font-bold text-slate-900">85K+</h3>
              <p className="text-slate-500 mt-1 text-sm">Students Guided</p>
            </div>

            <div className="p-6 text-center hover:bg-slate-50 transition">
              <h3 className="text-3xl font-bold text-slate-900">4.9★</h3>
              <p className="text-slate-500 mt-1 text-sm">User Rating</p>
            </div>

            <div className="p-6 text-center hover:bg-slate-50 transition">
              <h3 className="text-3xl font-bold text-slate-900">40%</h3>
              <p className="text-slate-500 mt-1 text-sm">Fee Savings</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}