import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện — Ordinex" },
      { name: "description", content: "Hội thảo, workshop và sự kiện sắp tới của Ordinex." },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { d: "15/05/2026", t: "Workshop: Decision Infrastructure cho CFO", l: "Hồ Chí Minh" },
  { d: "22/05/2026", t: "Hội thảo: Quản trị rủi ro dòng tiền", l: "Hà Nội" },
  { d: "10/06/2026", t: "Ordinex Summit 2026", l: "Đà Nẵng" },
];

function EventsPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16">
        <SectionTitle start="Sự kiện" accent="sắp tới" />
        <div className="mt-10 grid gap-4">
          {EVENTS.map((e) => (
            <div key={e.t} className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
              <div>
                <h3 className="text-lg font-semibold">{e.t}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {e.d}</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {e.l}</span>
                </div>
              </div>
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Đăng ký</button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}