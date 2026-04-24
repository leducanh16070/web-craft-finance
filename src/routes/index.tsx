import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { Briefcase, Boxes, Wallet, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, Quote, Building2, User, BookOpen, TrendingUp, Shield, Coins } from "lucide-react";
import heroImg from "@/assets/hero-finance.png";
import { useState } from "react";

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
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_30%,oklch(0.72_0.20_150/0.15),transparent_50%)]" />
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary" /> Ordinex Group Co., Ltd.
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Chào mừng đến với Ordinex<br />
            Hành trình đảm bảo <span className="text-primary">Tài sản</span>{" "}
            <span className="text-primary">của bạn!</span>
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Tại Ordinex, sứ mệnh của chúng tôi là cung cấp các giải pháp quản lý, vận hành toàn diện, giúp cá nhân và doanh nghiệp đạt được mục tiêu bảo vệ và phát triển tài sản. Chúng tôi cam kết cung cấp các dịch vụ cá nhân hoá và đổi mới, ưu tiên nhu cầu của khách hàng.
          </p>
          <Link to="/giai-phap" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            Tải tài liệu
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-4">Rủi ro tài sản bị giảm giá trị</p>
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
            <img src={heroImg} alt="Tăng trưởng tài chính" className="mt-4 w-full" width={800} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}

const SOLUTIONS = [
  { icon: Briefcase, title: "Business structure", desc: "ORDINEX phân tích và tái cấu trúc hệ thống doanh nghiệp ở cấp toàn cục, giúp làm rõ mối quan hệ giữa các pháp nhân, nghĩa vụ và dòng tiền." },
  { icon: Boxes, title: "Decision structure", desc: "ORDINEX thiết lập hệ thống Decision Infrastructure, đảm bảo mọi quyết định tài chính quan trọng đều được kiểm tra cấu trúc, mô phỏng rủi ro." },
  { icon: Wallet, title: "Management and operation", desc: "ORDINEX giúp doanh nghiệp kiểm soát tài sản theo cách hệ thống, từ ownership, control đến dòng tiền và tài sản đảm bảo." },
];

function Solutions() {
  const [tab, setTab] = useState<"biz" | "ind">("biz");
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionTitle start="Ordinex" accent="cung cấp giải pháp" />
          <p className="mt-4 text-muted-foreground">
            Khám phá hàng loạt sản phẩm dịch vụ quản lý và vận hành toàn diện và có thể tuỳ chỉnh tại Ordinex, được thiết kế để phù hợp với nhu cầu và nguyện vọng tài chính riêng của bạn.
          </p>
        </div>
        <div className="flex rounded-full bg-secondary/40 p-1">
          <button onClick={() => setTab("biz")} className={`px-5 py-2 text-sm rounded-full ${tab === "biz" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Dành cho doanh nghiệp</button>
          <button onClick={() => setTab("ind")} className={`px-5 py-2 text-sm rounded-full ${tab === "ind" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Dành cho cá nhân</button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SOLUTIONS.map((s) => (
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
  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle start="Ordinex" accent="và các nhóm khách hàng" />
      <p className="mt-4 max-w-3xl text-muted-foreground">
        Tại Ordinex, chúng tôi đáp ứng nhu cầu đa dạng của cá nhân và doanh nghiệp, cung cấp nhiều giải pháp quản lý và vận hành khác nhau.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: TrendingUp, t: "Quản lý tài sản cá nhân" },
            { icon: Shield, t: "Giải pháp quản lý quyết định đầu tư" },
            { icon: Building2, t: "Quản lý vận hành toà nhà, bất động sản dịch vụ" },
            { icon: BookOpen, t: "Các hoạt động đào tạo nội bộ, đào tạo riêng" },
          ].map((c) => (
            <div key={c.t} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
              <c.icon className="h-7 w-7 text-primary" />
              <p className="text-sm">{c.t}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold">Dành cho cá nhân</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Đối với cá nhân, dịch vụ đồng hành của chúng tôi mở đường cho việc quản lý và ra quyết định đối với tài sản, cung cấp sự hỗ trợ thiết yếu trong nhiều cột mốc quan trọng của cuộc đời.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[{ n: "78%", l: "Kế hoạch nghỉ hưu an toàn" }, { n: "63%", l: "Quản lý cấu trúc nợ" }, { n: "91%", l: "Giảm bớt nỗi lo quản lý" }].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-bold text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
          <Link to="/giai-phap" className="mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm">Tài liệu</Link>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold">Ordinex và giải pháp cho doanh nghiệp</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Đối với doanh nghiệp, chúng tôi thúc đẩy tăng trưởng bằng các giải pháp quản lý và vận hành vốn lưu động nhằm tối ưu hoá dòng tiền.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[{ n: "65%", l: "Quản lý cấu trúc dòng tiền" }, { n: "70%", l: "Quản lý và vận hành tài sản" }, { n: "45%", l: "Cấu trúc doanh nghiệp" }].map((s) => (
              <div key={s.n}>
                <p className="text-3xl font-bold text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
          <Link to="/giai-phap" className="mt-6 inline-block rounded-full bg-secondary px-5 py-2 text-sm">Tài liệu</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Briefcase, t: "Các công ty khởi nghiệp và doanh nhân" },
            { icon: Wallet, t: "Quản lý dòng tiền" },
            { icon: TrendingUp, t: "Mở rộng kinh doanh" },
            { icon: Coins, t: "Quản lý rủi ro" },
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
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionTitle start="Ordinex" accent="và phản hồi" />
          <p className="mt-4 text-muted-foreground">
            Khám phá cách Ordinex đã thay đổi cuộc sống bằng các giải pháp kỹ thuật số tiên tiến về quản lý quyết định và dịch vụ khách hàng cá nhân hoá.
          </p>
        </div>
        <div className="flex rounded-full bg-secondary/40 p-1">
          <button className="px-5 py-2 text-sm rounded-full bg-primary text-primary-foreground">Doanh nghiệp</button>
          <button className="px-5 py-2 text-sm rounded-full text-muted-foreground">Cá nhân</button>
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
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold">
            Hãy bắt đầu hành trình thịnh vượng của bạn với <span className="text-primary">Ordinex</span> ngay hôm nay!
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Bạn đã sẵn sàng làm chủ tài chính của mình chưa? Hãy tham gia đồng hành cùng Ordinex ngay bây giờ.
          </p>
        </div>
        <Link to="/dang-ky" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Đăng ký ngay <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
