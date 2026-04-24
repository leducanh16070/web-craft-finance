import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { Briefcase, Boxes, Wallet, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Quote, Building2, User, BookOpen, TrendingUp, Shield, Coins } from "lucide-react";
import heroImg from "@/assets/hero-finance.png";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ordinex — Giải pháp quản lý tài sản & vận hành tài chính" },
      { name: "description", content: "Ordinex cung cấp giải pháp quản lý, vận hành toàn diện giúp cá nhân và doanh nghiệp bảo vệ và phát triển tài sản." },
      { property: "og:title", content: "Ordinex — Giải pháp tài chính" },
      { property: "og:description", content: "Hành trình đảm bảo tài sản của bạn." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Solutions />
      <Audiences />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_30%,oklch(0.72_0.20_150/0.15),transparent_50%)]" />
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary" /> {t("hero.tag")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("hero.title1")}<br />
            {t("hero.title2")} <span className="text-primary">{t("hero.title3")}</span>{" "}
            <span className="text-primary">{t("hero.title4")}</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            {t("hero.desc")}
          </p>
          <Link to="/giai-phap" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            {t("hero.cta")}
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-4">{t("hero.risk")}</p>
            <ul className="space-y-3">
              {[
                { name: "Joel Kenley", v: "-$68.00", op: 1 },
                { name: "Mark Smith", v: "-$68.00", op: 0.7 },
                { name: "Lenen Roy", v: "-$68.00", op: 0.4 },
              ].map((t) => (
                <li key={t.name} className="flex items-center justify-between rounded-xl bg-secondary/40 p-3" style={{ opacity: t.op }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">Transaction</p>
                      <p className="text-sm font-medium">{t.name}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-destructive">{t.v}</span>
                </li>
              ))}
            </ul>
            <img src={heroImg} alt="Finance growth" className="mt-4 w-full" width={800} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const [tab, setTab] = useState<"biz" | "ind">("biz");
  const { t } = useLanguage();
  const items = [
    { icon: Briefcase, title: t("sol.biz.title"), desc: t("sol.biz.desc") },
    { icon: Boxes, title: t("sol.dec.title"), desc: t("sol.dec.desc") },
    { icon: Wallet, title: t("sol.mgmt.title"), desc: t("sol.mgmt.desc") },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionTitle start={t("sol.title1")} accent={t("sol.title2")} />
          <p className="mt-4 text-muted-foreground">
            {t("sol.desc")}
          </p>
        </div>
        <div className="flex rounded-full bg-secondary/40 p-1">
          <button onClick={() => setTab("biz")} className={`px-5 py-2 text-sm rounded-full ${tab === "biz" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{t("sol.tab.biz")}</button>
          <button onClick={() => setTab("ind")} className={`px-5 py-2 text-sm rounded-full ${tab === "ind" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>{t("sol.tab.ind")}</button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8 text-center hover:border-primary/50 transition">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Audiences() {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle start={t("aud.title1")} accent={t("aud.title2")} />
      <p className="mt-4 max-w-3xl text-muted-foreground">
        {t("aud.desc")}
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: TrendingUp, t: t("aud.ind.1") },
            { icon: Shield, t: t("aud.ind.2") },
            { icon: Building2, t: t("aud.ind.3") },
            { icon: BookOpen, t: t("aud.ind.4") },
          ].map((c) => (
            <div key={c.t} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <c.icon className="h-7 w-7 text-primary" />
              <p className="text-sm">{c.t}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold">{t("aud.ind.head")}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("aud.ind.body")}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[{ n: "78%", l: t("aud.ind.s1") }, { n: "63%", l: t("aud.ind.s2") }, { n: "91%", l: t("aud.ind.s3") }].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-bold text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
          <Link to="/giai-phap" className="mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm">{t("aud.docs")}</Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold">{t("aud.biz.head")}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("aud.biz.body")}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[{ n: "65%", l: t("aud.biz.s1") }, { n: "70%", l: t("aud.biz.s2") }, { n: "45%", l: t("aud.biz.s3") }].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-bold text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
          <Link to="/giai-phap" className="mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm">{t("aud.docs")}</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Briefcase, t: t("aud.biz.1") },
            { icon: Wallet, t: t("aud.biz.2") },
            { icon: TrendingUp, t: t("aud.biz.3") },
            { icon: Coins, t: t("aud.biz.4") },
          ].map((c) => (
            <div key={c.t} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <c.icon className="h-7 w-7 text-primary" />
              <p className="text-sm">{c.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUOTES = [
  { q: "Đối với ngân hàng và quỹ, ORDINEX nâng cấp hệ thống đánh giá rủi ro bằng cách phân tích tận bộ cấu trúc borrower thay vì từng khoản vay riêng lẻ.", a: "Đối tác" },
  { q: "ORDINEX là nền tảng Decision Infrastructure giúp doanh nghiệp, ngân hàng và quỹ đầu tư kiểm soát cấu trúc, dòng tiền và rủi ro hệ thống trước khi vốn được triển khai.", a: "Ordinex" },
  { q: "Thông qua các framework cốt lõi như Structure Map, Debt Domino Model và Money Gate Theory, ORDINEX giúp khách hàng phát hiện điểm gãy hệ thống.", a: "Mr. PhuongLe — CEO" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionTitle start={t("tes.title1")} accent={t("tes.title2")} />
          <p className="mt-4 text-muted-foreground">
            {t("tes.desc")}
          </p>
        </div>
        <div className="flex rounded-full bg-secondary/40 p-1">
          <button className="px-5 py-2 text-sm rounded-full bg-primary text-primary-foreground">{t("tes.tab.biz")}</button>
          <button className="px-5 py-2 text-sm rounded-full text-muted-foreground">{t("tes.tab.ind")}</button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {QUOTES.map((q, idx) => (
          <div key={idx} className={`rounded-2xl border border-border bg-card p-6 transition ${idx === i ? "opacity-100" : "opacity-60"}`}>
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 text-sm text-muted-foreground">{q.q}</p>
            <p className="mt-4 text-sm font-medium text-primary">{q.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => setI((i + 2) % 3)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronLeft className="h-4 w-4" /></button>
        <button onClick={() => setI((i + 1) % 3)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-secondary"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold">
            {t("cta.title1")} <span className="text-primary">Ordinex</span> {t("cta.title2")}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("cta.desc")}
          </p>
        </div>
        <Link to="/dang-ky" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          {t("cta.btn")} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
