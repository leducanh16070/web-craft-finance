import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Bookmark, Filter } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/viec-lam")({
  head: () => ({
    meta: [
      { title: "Việc làm — Ordinex" },
      { name: "description", content: "Cơ hội nghề nghiệp tại Ordinex và đối tác." },
    ],
  }),
  component: CareersPage,
});

const JOBS = [
  { c: "Amazon", t: "Product Designer", time: "1h ago", level: "Expert", type: "Remote work" },
  { c: "Airbnb", t: "Mobile App Designer", time: "18h ago", level: "Intermediate", type: "Remote work" },
  { c: "Google", t: "Sr. Cloud Engineer", time: "8h ago", level: "Expert", type: "Part time" },
  { c: "Netflix", t: "Jr. UI/UX Designer", time: "4h ago", level: "Internship", type: "Remote work" },
  { c: "Twitter", t: "Quality Assurance", time: "20h ago", level: "Expert", type: "Remote work" },
  { c: "Apple", t: "Product Designer", time: "20h ago", level: "Expert", type: "Remote work" },
];

function CareersPage() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10 grid gap-6 lg:grid-cols-[400px_1fr]">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Công việc mới nhất</h2>
            <button className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm">
              <Filter className="h-3 w-3" /> Lọc
            </button>
          </div>
          <ul className="space-y-3">
            {JOBS.map((j, i) => (
              <li key={i}>
                <button onClick={() => setActive(i)} className={`w-full flex items-center gap-3 rounded-xl border p-3 text-left ${i === active ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-sm font-bold">{j.c[0]}</div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{j.t}</p>
                    <p className="text-xs text-muted-foreground">{j.c} · Posted {j.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{j.type}</p>
                    <p className="text-xs font-medium">{j.level}</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded bg-secondary text-xl font-bold">{job.c[0]}</div>
              <div>
                <h2 className="text-xl font-bold">Senior {job.t}</h2>
                <p className="text-sm text-primary">{job.c}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="rounded-md bg-primary/10 px-3 py-1 text-xs text-primary">Freelancer</span>
              <span className="rounded-md bg-destructive/10 px-3 py-1 text-xs text-destructive">{job.level}</span>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Mô tả công việc:</h3>
            <p className="mt-2 text-sm text-muted-foreground">We are seeking a talented and highly motivated UI/UX designer to join our growing team.</p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Trách nhiệm chính:</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Collaborate with product management and engineering.</li>
              <li>Conduct user research and testing.</li>
              <li>Continuously iterate and improve product design.</li>
              <li>Stay up to date with the latest design trends.</li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Kỹ năng yêu cầu:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {["Wireframing", "Figma", "Adobe XD", "UI/UX Designer", "Team work"].map((s) => (
                <span key={s} className="rounded-full border border-border px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <button className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground">Đăng ký</button>
            <button className="flex items-center gap-2 rounded-md border border-border px-6 py-2 text-sm"><Bookmark className="h-4 w-4" /> Lưu trữ</button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}