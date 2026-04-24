import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/giai-phap")({
  head: () => ({
    meta: [
      { title: "Giải pháp quản lý — Ordinex" },
      { name: "description", content: "Asset Structure Map, Money Gate Theory, Debt Domino Model, Decision Infrastructure." },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { t: "Asset Structure Map™", d: "ORDINEX xây dựng bản đồ toàn diện về tài sản, quyền sở hữu, quyền kiểm soát và dòng tiền trong hệ thống doanh nghiệp." },
  { t: "Money Gate Theory™", d: "ORDINEX phân tích dòng tiền và xác định điểm kiểm soát thực sự trong hệ thống. Giải pháp đảm bảo tiền được kiểm soát đúng nơi." },
  { t: "Debt Domino Model™", d: "ORDINEX mô phỏng cách rủi ro lan truyền trong hệ thống đa pháp nhân, từ một sự kiện vi phạm đến sụp đổ dây chuyền." },
  { t: "Decision Infrastructure™", d: "ORDINEX thiết lập lớp kiểm soát ra quyết định, đảm bảo mọi quyết định tài chính quan trọng đều được kiểm tra cấu trúc." },
];

const TABS = ["Decision Infrastructure", "Whitepaper", "Đào tạo"] as const;

function SolutionsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Decision Infrastructure");
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16">
        <SectionTitle start="Ordinex" accent="giải pháp quản lý" />
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Trải nghiệm hàng loạt đặc tính về nguyên tắc hợp tác mạnh mẽ tại Ordinex, bao gồm dịch vụ quản lý và vận hành trực tuyến liền mạch, an toàn về các quyết định sử dụng vốn và thông tin tài chính cá nhân hoá.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[200px_1fr]">
          <aside className="flex lg:flex-col gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm text-left ${tab === t ? "bg-primary text-primary-foreground" : "bg-secondary/40 text-muted-foreground"}`}
              >
                {t}
              </button>
            ))}
          </aside>
          <div className="grid gap-6 sm:grid-cols-2">
            {SOLUTIONS.map((s) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{s.t}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <SectionTitle start="Ordinex" accent="giải đáp" />
        <p className="mt-4 text-sm text-muted-foreground">
          Bạn vẫn còn thắc mắc? Vui lòng liên hệ với nhóm hỗ trợ qua support@ordinex.vn
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { q: "Làm thế nào để hợp tác với Ordinex?", a: "Việc hợp tác với Ordinex rất dễ dàng. Chỉ cần truy cập trang web và nhấn nút Đăng ký, làm theo hướng dẫn." },
            { q: "Tôi cần cung cấp những giấy tờ gì để hợp tác?", a: "Các giấy tờ cần thiết tuỳ thuộc vào loại hình dịch vụ bạn đang có nhu cầu (CMND, bằng lái xe, chứng minh thu nhập...)." },
            { q: "Làm thế nào để truy cập tài khoản quản lý trực tuyến?", a: "Truy cập tài khoản trực tuyến rất đơn giản và an toàn — đăng nhập tại trang web." },
            { q: "Tài sản và thông tin cá nhân của tôi có được bảo mật?", a: "Tại Ordinex, chúng tôi ưu tiên bảo mật các giao dịch và thông tin với công nghệ mã hoá hàng đầu." },
          ].map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}