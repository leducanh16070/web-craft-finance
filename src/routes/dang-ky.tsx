import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/dang-ky")({
  head: () => ({ meta: [{ title: "Đăng ký — Ordinex" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20 max-w-md">
        <h1 className="text-3xl font-bold text-center">Đăng ký</h1>
        <form className="mt-8 space-y-4">
          <input placeholder="Họ tên" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
          <input type="email" placeholder="Email" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
          <input type="password" placeholder="Mật khẩu" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
          <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground">Tạo tài khoản</button>
        </form>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Đã có tài khoản? <Link to="/dang-nhap" className="text-primary">Đăng nhập</Link>
        </p>
      </section>
    </SiteLayout>
  );
}