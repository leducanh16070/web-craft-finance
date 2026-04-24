import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/dang-nhap")({
  head: () => ({ meta: [{ title: "Đăng nhập — Ordinex" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-20 max-w-md">
        <h1 className="text-3xl font-bold text-center">Đăng nhập</h1>
        <form className="mt-8 space-y-4">
          <input type="email" placeholder="Email" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
          <input type="password" placeholder="Mật khẩu" className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
          <button className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground">Đăng nhập</button>
        </form>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Chưa có tài khoản? <Link to="/dang-ky" className="text-primary">Đăng ký</Link>
        </p>
      </section>
    </SiteLayout>
  );
}