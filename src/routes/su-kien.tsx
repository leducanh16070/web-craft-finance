import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, Clock, MapPin, Users, Search } from "lucide-react";
import heroImg from "@/assets/events-hero.jpg";
import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";

export const Route = createFileRoute("/su-kien")({
  head: () => ({
    meta: [
      { title: "Sự kiện — Ordinex" },
      { name: "description", content: "Hội thảo, workshop và sự kiện cộng đồng của Ordinex." },
      { property: "og:image", content: "/src/assets/events-hero.jpg" },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  { tag: "Book Club", cap: "12/20", t: "Book Club: Classic Literature", d: "November 18, 2025", h: "6:00 PM – 8:00 PM", l: "Reading Room A" },
  { tag: "Kids", cap: "8/15", t: "Children's Story Time", d: "November 20, 2025", h: "10:00 AM – 11:00 AM", l: "Children's Section" },
  { tag: "Workshop", cap: "15/25", t: "Creative Writing Workshop", d: "November 22, 2025", h: "2:00 PM – 4:00 PM", l: "Community Hall" },
  { tag: "Workshop", cap: "15/25", t: "Decision Infrastructure Talk", d: "November 25, 2025", h: "3:00 PM – 5:00 PM", l: "Main Auditorium" },
];

const PAST = [
  { img: e1, cat: "Fiction", t: "The Midnight Library", a: "Matt Haig", s: "Available" },
  { img: e2, cat: "Self-Help", t: "Atomic Habits", a: "James Clear", s: "Available" },
  { img: e3, cat: "Mystery", t: "The Silent Patient", a: "Alex Michaelides", s: "On Loan" },
  { img: e1, cat: "Biography", t: "Educated", a: "Tara Westover", s: "Available" },
  { img: e2, cat: "Biography", t: "Educated", a: "Tara Westover", s: "Available" },
];

function EventsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={heroImg} alt="Sự kiện Ordinex" width={1600} height={500} className="h-[300px] md:h-[420px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Chào mừng bạn đến với các sự kiện của Ordinex
            </h1>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl">
              Trung tâm cộng đồng và tổ chức các sự kiện dành cho tri thức, kết nối và phát triển. Khám phá hàng ngàn cuốn sách được quyên tặng, tham gia các sự kiện hấp dẫn và trở thành một phần của cộng đồng sôi động cùng chúng tôi.
            </p>
            <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <Search className="h-4 w-4" /> Tìm sự kiện
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Các sự kiện sắp tới</h2>
            <p className="mt-1 text-sm text-muted-foreground">Hãy tham gia các hoạt động cộng đồng và hội thảo của chúng tôi.</p>
          </div>
          <button className="rounded-full border border-border px-5 py-2 text-sm hover:bg-secondary w-fit">View Calendar</button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {UPCOMING.map((e) => (
            <div key={e.t} className="rounded-2xl border border-border bg-card p-5 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{e.tag}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="h-3 w-3" /> {e.cap}</span>
              </div>
              <h3 className="mt-4 font-semibold">{e.t}</h3>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground flex-1">
                <li className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-primary" /> {e.d}</li>
                <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" /> {e.h}</li>
                <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> {e.l}</li>
              </ul>
              <button className="mt-4 w-full rounded-full bg-primary py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="container mx-auto px-4 py-10 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Các sự kiện đã diễn ra</h2>
            <p className="mt-1 text-sm text-muted-foreground">Những sự kiện đã diễn ra trước đây.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PAST.map((p, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative">
                <img src={p.img} alt={p.t} loading="lazy" width={400} height={300} className="h-40 w-full object-cover" />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${p.s === "Available" ? "bg-primary/90 text-primary-foreground" : "bg-orange-500/90 text-white"}`}>
                  {p.s}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">{p.cat}</p>
                <h3 className="mt-1 font-semibold text-sm">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="rounded-full border border-border px-5 py-2 text-sm hover:bg-secondary">View All</button>
        </div>
      </section>
    </SiteLayout>
  );
}