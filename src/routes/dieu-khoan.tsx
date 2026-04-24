import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/dieu-khoan")({
  head: () => ({
    meta: [
      { title: "Điều khoản sử dụng — Ordinex" },
      { name: "description", content: "Điều khoản sử dụng dịch vụ Ordinex." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside>
          <h3 className="font-semibold pb-2 border-b border-border">Chính sách</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/chinh-sach" className="text-muted-foreground">Chính sách của Ordinex</Link></li>
            <li><Link to="/dieu-khoan" className="text-foreground font-medium">Điều khoản sử dụng</Link></li>
            <li><a href="#" className="text-muted-foreground">Whitepaper</a></li>
          </ul>
        </aside>
        <article className="space-y-5 text-sm">
          <h1 className="text-base font-bold">ĐIỀU KHOẢN SỬ DỤNG (TERMS OF USE)</h1>
          {[
            { t: "1. Chấp nhận điều khoản", d: "Khi truy cập và sử dụng website ORDINEX, người dùng đồng ý tuân thủ các điều khoản và điều kiện." },
            { t: "2. Mục đích sử dụng", d: "Website ORDINEX cung cấp thông tin về dịch vụ, framework và nội dung nghiên cứu liên quan đến Decision Infrastructure." },
            { t: "3. Phạm vi dịch vụ", d: "ORDINEX cung cấp các dịch vụ phân tích cấu trúc, mô phỏng rủi ro và hỗ trợ ra quyết định." },
            { t: "4. Quyền sở hữu trí tuệ", d: "Tất cả nội dung trên website (Asset Structure Map™, Debt Domino Model™, Money Gate Theory™...) đều thuộc quyền sở hữu của ORDINEX." },
            { t: "5. Hành vi bị cấm", d: "Người dùng không được sử dụng website cho mục đích trái pháp luật hoặc thu thập dữ liệu trái phép." },
            { t: "6. Giới hạn trách nhiệm", d: "ORDINEX không chịu trách nhiệm với bất kỳ thiệt hại nào phát sinh từ việc sử dụng thông tin trên website." },
            { t: "7. Thay đổi điều khoản", d: "ORDINEX có quyền cập nhật hoặc thay đổi điều khoản sử dụng bất kỳ lúc nào." },
          ].map((s) => (
            <section key={s.t}>
              <h2 className="font-semibold">{s.t}</h2>
              <p className="text-muted-foreground mt-1">{s.d}</p>
            </section>
          ))}
        </article>
      </section>
    </SiteLayout>
  );
}