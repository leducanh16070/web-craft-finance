import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Giới thiệu — Ordinex" },
      { name: "description", content: "Tìm hiểu về Ordinex — nền tảng Decision Infrastructure cho tài chính." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16">
        <SectionTitle start="Về" accent="Ordinex" />
        <p className="mt-6 max-w-3xl text-muted-foreground">
          Ordinex là nền tảng Decision Infrastructure giúp doanh nghiệp, ngân hàng và quỹ đầu tư kiểm soát cấu trúc, dòng tiền và rủi ro hệ thống trước khi vốn được triển khai. Chúng tôi biến dữ liệu tài chính, tài sản và nghĩa vụ thành một hệ thống kiểm soát ra quyết định rõ ràng, minh bạch.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Sứ mệnh", d: "Đảm bảo mọi quyết định tài chính đều được kiểm tra cấu trúc và mô phỏng rủi ro trước khi thực thi." },
            { t: "Tầm nhìn", d: "Trở thành Decision Infrastructure tin cậy nhất khu vực Đông Nam Á." },
            { t: "Giá trị cốt lõi", d: "Minh bạch — Hệ thống — Khoa học — Đồng hành cùng khách hàng." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-primary">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}