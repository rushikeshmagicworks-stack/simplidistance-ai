import {
  GraduationCap,
  Briefcase,
  Laptop,
  Monitor,
  BarChart3,
  FileText,
} from "lucide-react";

const courses = [
  {
    title: "Online MBA",
    icon: GraduationCap,
  },
  {
    title: "BBA",
    icon: Briefcase,
  },
  {
    title: "MCA",
    icon: Laptop,
  },
  {
    title: "BCA",
    icon: Monitor,
  },
  {
    title: "M.Com",
    icon: BarChart3,
  },
  {
    title: "B.Com",
    icon: FileText,
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-[#FFFBEB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            Popular Courses
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Choose Your Perfect Course
          </h2>

          <p className="mt-3 text-slate-600">
            UGC approved online and distance education programs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className="group rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-yellow-100 p-3">
                    <Icon className="h-6 w-6 text-yellow-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {course.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      UGC Approved Program
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600">
                  Flexible online learning with industry-recognized degree
                  programs.
                </p>

                <button className="mt-5 text-sm font-semibold text-yellow-600">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}