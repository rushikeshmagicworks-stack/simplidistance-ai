const testimonials = [
  {
    name: "Rahul Sharma",
    course: "Online MBA",
    review:
      "The counselling team helped me choose the perfect university. Admission process was smooth and hassle-free.",
  },
  {
    name: "Priya Patel",
    course: "Distance BBA",
    review:
      "I compared multiple universities in one place and got expert guidance throughout my admission journey.",
  },
  {
    name: "Amit Verma",
    course: "Online MCA",
    review:
      "Very professional support team. They explained fees, approvals and placement opportunities clearly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Student Reviews
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            What Students Say About Us
          </h2>

          <p className="mt-3 text-slate-600">
            Trusted by thousands of learners across India.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="text-xl text-yellow-500">
                ★★★★★
              </div>

              <p className="mt-4 text-slate-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.course}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}