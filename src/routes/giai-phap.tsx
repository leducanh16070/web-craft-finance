import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/giai-phap")({
  head: () => ({
    meta: [
      { title: "Giải pháp quản lý — Ordinex" },
      { name: "description", content: "Asset Structure Map, Money Gate Theory, Debt Domino Model, Decision Infrastructure, OSRI." },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    t: "Asset Structure Map™",
    d: "ORDINEX xây dựng bản đồ toàn diện về tài sản, quyền sở hữu, quyền kiểm soát và dòng tiền trong hệ thống doanh nghiệp. Giải pháp này giúp phát hiện lệch pha cấu trúc, tối ưu vị trí tài sản và đảm bảo tài sản được đặt đúng nơi để tạo giá trị và giảm rủi ro.",
  },
  {
    t: "Debt Domino Model™",
    d: "ORDINEX mô phỏng cách rủi ro lan truyền trong hệ thống đa pháp nhân, từ một sự kiện vi phạm đến sụp đổ dây chuyền. Mô hình giúp doanh nghiệp và tổ chức tài chính chủ động ngăn chặn hiệu ứng domino trước khi nó xảy ra.",
  },
  {
    t: "Money Gate Theory™",
    d: "ORDINEX phân tích dòng tiền và xác định điểm kiểm soát thực sự (money gate) trong hệ thống. Giải pháp đảm bảo tiền được kiểm soát đúng nơi — không bị rò rỉ, không bị chiếm dụng và luôn phục vụ cho mục tiêu chiến lược.",
  },
  {
    t: "Decision Infrastructure™",
    d: "ORDINEX thiết lập lớp hạ tầng kiểm tra ra quyết định, đảm bảo mọi quyết định tài chính quan trọng đều được kiểm tra cấu trúc, mô phỏng rủi ro và xác minh điều kiện trước khi vốn được triển khai.",
  },
  {
    t: "OSRI – Structural Risk Index",
    d: "Chỉ số rủi ro cấu trúc do ORDINEX phát triển nhằm lượng hoá mức độ rủi ro hệ thống của một doanh nghiệp hoặc danh mục tài sản, giúp ban lãnh đạo và nhà đầu tư so sánh, theo dõi và ra quyết định dựa trên dữ liệu.",
  },
];

function SolutionsPage() {
  const [active, setActive] = useState(0);
  const current = SOLUTIONS[active];
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[260px_1fr]">
          <aside>
            <h2 className="text-base font-semibold">Giải pháp quản lý</h2>
            <div className="mt-3 h-px w-full bg-border" />
            <ul className="mt-4 space-y-3">
              {SOLUTIONS.map((s, i) => (
                <li key={s.t}>
                  <button
                    onClick={() => setActive(i)}
                    className={`text-left text-sm transition ${
                      i === active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s.t}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{current.t}</h1>
            <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">{current.d}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ordinex <span className="text-primary">giải đáp</span>
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Bạn vẫn còn thắc mắc? Vui lòng liên hệ qua support@ordinex.vn
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { q: "Làm thế nào để hợp tác với Ordinex?", a: "Truy cập trang web và nhấn nút Đăng ký, làm theo hướng dẫn để bắt đầu." },
            { q: "Tôi cần cung cấp những giấy tờ gì?", a: "Tuỳ thuộc loại hình dịch vụ (CMND, đăng ký doanh nghiệp, báo cáo tài chính...)." },
            { q: "Truy cập tài khoản trực tuyến thế nào?", a: "Đăng nhập an toàn trên trang web với tài khoản đã đăng ký." },
            { q: "Thông tin của tôi có được bảo mật?", a: "Ordinex sử dụng công nghệ mã hoá hàng đầu để bảo vệ thông tin." },
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