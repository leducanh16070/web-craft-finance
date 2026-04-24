import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { BookOpen, Users, Award } from "lucide-react";

export const Route = createFileRoute("/hoc-vien")({
  head: () => ({
    meta: [
      { title: "Học viện Ordinex" },
      { name: "description", content: "Chương trình đào tạo về quản trị tài chính và Decision Infrastructure." },
    ],
  }),
  component: AcademyPage,
});

function AcademyPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16">
        <SectionTitle start="Học viện" accent="Ordinex" />
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Các khoá đào tạo chuyên sâu về quản trị tài sản, cấu trúc doanh nghiệp và ra quyết định tài chính.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: BookOpen, t: "Foundations of Decision Infrastructure", d: "Khoá nền tảng 8 tuần dành cho CFO và quản lý tài chính." },
            { icon: Users, t: "Asset Structure Workshop", d: "Workshop 2 ngày về xây dựng bản đồ tài sản doanh nghiệp." },
            { icon: Award, t: "Money Gate Masterclass", d: "Chương trình chuyên gia về kiểm soát dòng tiền hệ thống." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <c.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}