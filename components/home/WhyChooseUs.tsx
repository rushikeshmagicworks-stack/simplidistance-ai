import {
  Users,
  Scale,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Expert Counselling",
    description:
      "Get personalized admission guidance from experienced education experts.",
    icon: Users,
  },
  {
    title: "Compare Universities",
    description:
      "Compare fees, rankings, approvals and placements in one place.",
    icon: Scale,
  },
  {
    title: "Admission Assistance",
    description:
      "End-to-end support from application to final admission.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#07152D] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Why Choose Simplidistance
          </h2>

          <p className="mt-3 text-slate-300">
            Trusted by thousands of students for distance education guidance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                rounded-3xl
                border
                border-slate-700
                bg-[#0B1E3E]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-yellow-500
                "
              >
                <div className="mb-6 inline-flex rounded-2xl bg-yellow-500/10 p-4">
                  <Icon className="h-8 w-8 text-yellow-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}