"use client";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { usePopup } from "@/context/PopupContext";
import { ArrowRight } from "lucide-react";

const openings = [
  {
    title: "Senior Brand Strategist",
    department: "Strategy",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Visual Identity Designer",
    department: "Design",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Retail Branding Specialist",
    department: "Retail Branding",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Account Manager",
    department: "Client Services",
    location: "Bangalore",
    type: "Full-time",
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Remote / Bangalore",
    type: "Full-time",
  },
  {
    title: "Intern — Brand Design",
    department: "Design",
    location: "Bangalore",
    type: "Internship",
  },
];

export function CareersOpenings() {
  const { openCareerPopup } = usePopup();

  return (
    <div className="space-y-4">
      {openings.map((job, i) => (
        <AnimatedReveal key={job.title} delay={i * 0.05}>
          <div className="bg-white border border-border p-6 md:p-8 flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-4 hover:shadow-md transition-shadow">
            <div className="w-full md:w-auto">
              <h3 className="font-serif text-xl font-medium text-foreground">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted justify-center md:justify-start">
                <span>{job.department}</span>
                <span>·</span>
                <span>{job.location}</span>
                <span>·</span>
                <span>{job.type}</span>
              </div>
            </div>
            <button
              onClick={() => openCareerPopup(job.title)}
              className="flex w-full md:w-auto items-center justify-center gap-2 text-sm tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-white transition-colors shrink-0"
            >
              Apply Now
              <ArrowRight size={14} />
            </button>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
