import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";
import shapes from "@/assets/about-shapes.png";
import teamIllust from "@/assets/about-team-illust.png";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Ordinex" },
      { name: "description", content: "Ordinex — nền tảng Decision Infrastructure giúp doanh nghiệp, ngân hàng và quỹ đầu tư kiểm soát cấu trúc, dòng tiền và rủi ro." },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  { n: "1000+", l: "Tài sản đang quản lý và vận hành" },
  { n: "250+", l: "Đối tác đồng hành" },
  { n: "500+", l: "Cộng tác viên và chuyên gia" },
  { n: "50M$+", l: "AUM" },
];

const FAQS = [
  {
    q: "Nhiệm vụ chính",
    a: "Nhiệm vụ của ORDINEX là xây dựng một lớp hạ tầng mới cho hệ thống tài chính — nơi các quyết định không còn dựa vào cảm tính hay dữ liệu rời rạc, mà dựa trên cấu trúc, kiểm soát và khả năng chịu đựng rủi ro.",
  },
  { q: "Hiểu rõ toàn bộ hệ thống tài chính của mình", a: "ORDINEX giúp khách hàng nhìn thấy toàn cảnh tài sản, nghĩa vụ và dòng tiền trong một bản đồ thống nhất." },
  { q: "Kiểm soát dòng tiền và tài sản ở cấp cấu trúc", a: "Mọi điểm money gate đều được nhận diện và kiểm soát trước khi vốn được triển khai." },
  { q: "Phát hiện và ngăn chặn rủi ro trước khi xảy ra", a: "Mô hình Debt Domino giúp mô phỏng và ngăn chặn hiệu ứng dây chuyền sớm." },
  { q: "Đảm bảo rằng mọi quyết định chỉ được thực thi khi đủ điều kiện", a: "Decision Infrastructure áp dụng kiểm tra cấu trúc tự động cho từng quyết định." },
];

const TEAM = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=400&fit=crop",
];

function AboutPage() {
  const [open, setOpen] = useState(0);
  return (
    <SiteLayout>
      {/* Intro + stats */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">GIỚI THIỆU</h1>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ORDINEX là nền tảng Decision Infrastructure giúp doanh nghiệp, ngân hàng và quỹ đầu tư kiểm soát cấu trúc tài chính, dòng tiền và rủi ro hệ thống trước khi các quyết định quan trọng được thực thi.
              </p>
              <p>
                Chúng tôi nhìn doanh nghiệp không phải những pháp nhân riêng lẻ, mà như một hệ thống liên kết giữa tài sản, nghĩa vụ, quyền kiểm soát và dòng tiền. Thông qua các framework như Asset Structure Map™, Debt Domino Model™ và Money Gate Theory™, ORDINEX mang lại một góc nhìn toàn diện, giúp khách hàng hiểu rõ hệ thống của mình và kiểm soát một cách chủ động.
              </p>
              <p>
                ORDINEX không thay thế ngân hàng, tư vấn hay kiểm toán. Chúng tôi tạo ra một lớp kiểm soát mới — nằm giữa quyết định và rủi ro.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                TÀI LIỆU
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10">
                Xem video <Play className="h-4 w-4 fill-primary text-primary" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:border-l lg:border-border lg:pl-10">
            {STATS.map((s) => (
              <div key={s.n} className="rounded-2xl bg-card border border-border p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[140px]">
                <p className="text-3xl md:text-4xl font-bold">{s.n}</p>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + FAQ */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <img src={shapes} alt="Ordinex shapes" width={500} height={500} loading="lazy" className="max-w-sm w-full" />
          </div>
          <div className="space-y-2">
            {FAQS.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className={`text-sm md:text-base ${open === i ? "font-semibold" : "font-medium text-muted-foreground"}`}>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Câu chuyện của Ordinex</h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>ORDINEX được hình thành từ một thực tế rõ ràng: phần lớn các thất bại tài chính không đến từ thị trường, mà đến từ cấu trúc.</p>
            <p>Nhiều doanh nghiệp sở hữu tài sản lớn, doanh thu tốt và cơ hội tăng trưởng, nhưng vẫn sụp đổ vì những liên kết nghĩa vụ không được nhìn thấy, dòng tiền không được kiểm soát và các quyết định được đưa ra trong một hệ thống chưa đủ điều kiện để tồn tại.</p>
            <p>Chúng tôi nhận ra rằng vấn đề không nằm ở thiếu vốn hay thiếu cơ hội, mà nằm ở việc thiếu một lớp kiểm tra trước khi quyết định được thực thi.</p>
            <p>Từ đó, ORDINEX ra đời với mục tiêu xây dựng một tiêu chuẩn mới — nơi mọi quyết định tài chính quan trọng đều được nhìn nhận ở cấp hệ thống, được kiểm tra cấu trúc và được kiểm soát trước khi triển khai.</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img src={teamIllust} alt="Ordinex team" width={500} height={360} loading="lazy" className="max-w-md w-full" />
            <Link to="/lien-he" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Đăng ký hợp tác
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Đội ngũ</h2>
          <p className="mt-2 text-sm text-muted-foreground">Khám phá đội ngũ chuyên gia của chúng tôi</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {TEAM.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-t-full rounded-b-full aspect-[3/4] bg-card border border-border">
              <img src={src} alt={`Member ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}