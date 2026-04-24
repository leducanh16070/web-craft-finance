import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/chinh-sach")({
  head: () => ({
    meta: [
      { title: "Chính sách — Ordinex" },
      { name: "description", content: "Chính sách bảo mật và sử dụng dịch vụ của Ordinex." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside>
          <h3 className="font-semibold pb-2 border-b border-border">Chính sách</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/chinh-sach" className="text-foreground font-medium">Chính sách của Ordinex</Link></li>
            <li><Link to="/dieu-khoan" className="text-muted-foreground">Điều khoản sử dụng</Link></li>
            <li><a href="#" className="text-muted-foreground">Whitepaper</a></li>
          </ul>
        </aside>
        <article className="space-y-6 text-sm">
          <section>
            <h2 className="text-base font-bold">1. Chính sách bảo mật (Privacy Policy)</h2>
            <p className="text-muted-foreground mt-2">ORDINEX cam kết bảo vệ thông tin cá nhân và dữ liệu của khách hàng.</p>
            <p className="font-semibold mt-3">Thu thập thông tin:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>thông tin liên hệ (tên, email, số điện thoại)</li>
              <li>thông tin doanh nghiệp</li>
              <li>dữ liệu tương tác trên website</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base font-bold">2. Chính sách bảo mật thông tin (Confidentiality Policy)</h2>
            <ul className="list-disc pl-6 text-muted-foreground mt-2 space-y-1">
              <li>mọi thông tin khách hàng được xem là thông tin mật</li>
              <li>chỉ sử dụng trong phạm vi cung cấp dịch vụ</li>
              <li>không tiết lộ cho bên thứ ba nếu không có sự đồng ý bằng văn bản</li>
            </ul>
          </section>
          <section>
            <h2 className="text-base font-bold">3. Chính sách dịch vụ (Service Policy)</h2>
            <p className="text-muted-foreground mt-2">phạm vi dịch vụ được xác định trong từng hợp đồng cụ thể.</p>
          </section>
          <section>
            <h2 className="text-base font-bold">4. Tuyên bố miễn trách nhiệm (Disclaimer)</h2>
            <p className="text-muted-foreground mt-2">thông tin và phân tích từ ORDINEX không đảm bảo kết quả tài chính cụ thể.</p>
          </section>
          <section>
            <h2 className="text-base font-bold">5. Chính sách cập nhật</h2>
            <p className="text-muted-foreground mt-2">ORDINEX có quyền điều chỉnh các chính sách này bất kỳ lúc nào.</p>
          </section>
        </article>
      </section>
    </SiteLayout>
  );
}