import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Calendar, User, Clock } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export const Route = createFileRoute("/tin-tuc")({
  head: () => ({
    meta: [
      { title: "Tin tức — Ordinex" },
      { name: "description", content: "Tin tức và bài viết mới nhất về tài chính từ Ordinex." },
    ],
  }),
  component: NewsPage,
});

const FEATURED = [
  { tag: "NEWS", img: news1, t: "Accessible Target Sizes Cheatsheet" },
  { tag: "BITCOIN", img: news2, t: "The Potentially Dangerous Non-Accessibility Of Cookie" },
  { tag: "ECONOMY", img: news3, t: "The Growing Need For Effective Password Management" },
];

const ARTICLES = [
  { tag: "MARKET", t: "The Game Changing Ar Roadely Breakfast" },
  { tag: "BITCOIN", t: "The Game Changing Ar Roadely Breakfast" },
  { tag: "ECONOMY", t: "The Game Changing Ar Roadely Breakfast" },
  { tag: "NEWS", t: "Racing Games Browned Butte Roadert Cookies Daily" },
  { tag: "MARKET", t: "Racing Games Browned Butte Roadert Cookies Daily" },
];

const SIDEBAR = [
  { tag: "CRYPTO", t: "Communication For Everyday Meetings" },
  { tag: "NEWS", t: "Building Your Security Strategy" },
  { tag: "ECONOMY", t: "Phone Numbers For Web Designers" },
  { tag: "MARKET", t: "The Butter Chocolate Cookies Daily" },
];

function NewsPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED.map((a, i) => (
            <Link key={i} to="/tin-tuc/$slug" params={{ slug: `bai-${i + 1}` }} className="group relative overflow-hidden rounded-2xl">
              <img src={a.img} alt={a.t} loading="lazy" width={800} height={512} className="h-64 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="w-fit rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">{a.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{a.t}</h3>
                <div className="mt-2 flex gap-3 text-xs text-white/70">
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> Admin</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> 27 Aug 2024</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 20 mins</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-xl font-bold border-b-2 border-primary pb-2 inline-block">Bài Viết Mới</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {ARTICLES.map((a, i) => (
                <Link key={i} to="/tin-tuc/$slug" params={{ slug: `article-${i}` }} className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img src={[news1, news2, news3][i % 3]} alt={a.t} loading="lazy" width={400} height={250} className="h-40 w-full object-cover transition group-hover:scale-105" />
                    <span className="absolute top-2 left-2 rounded-md bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">{a.tag}</span>
                  </div>
                  <h4 className="mt-3 text-sm font-semibold">{a.t}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">By Admin · 27 Aug 2024</p>
                </Link>
              ))}
            </div>
          </div>
          <aside>
            <div className="flex gap-2 mb-4">
              <button className="flex-1 rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground">Mới nhất</button>
              <button className="flex-1 rounded-full bg-secondary/40 px-3 py-1.5 text-sm text-muted-foreground">Cũ hơn</button>
            </div>
            <ul className="space-y-3">
              {SIDEBAR.map((s, i) => (
                <li key={i} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                  <img src={[news1, news2, news3][i % 3]} alt="" loading="lazy" width={64} height={64} className="h-16 w-16 rounded object-cover" />
                  <div>
                    <span className="text-[10px] font-semibold text-primary">{s.tag}</span>
                    <p className="text-sm font-medium leading-tight mt-1">{s.t}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">27 Aug 2024</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}