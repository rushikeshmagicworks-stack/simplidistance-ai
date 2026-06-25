"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is distance education valid in India?",
    answer:
      "Yes, UGC approved distance education degrees are valid for jobs and higher studies.",
  },
  {
    question: "Which university is best for Online MBA?",
    answer:
      "Amity, Manipal, LPU, Jain and Chandigarh University are popular choices.",
  },
  {
    question: "Can I study while working?",
    answer:
      "Yes. Distance and online programs are designed for working professionals.",
  },
  {
    question: "Do you provide admission assistance?",
    answer:
      "Yes, our experts guide you throughout the admission process.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#FFFBEB] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}