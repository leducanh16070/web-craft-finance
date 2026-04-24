import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", label: "Trang chủ" },
  { to: "/gioi-thieu", label: "Giới thiệu" },
  { to: "/su-kien", label: "Sự kiện" },
  { to: "/giai-phap", label: "Giải pháp quản lý" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-secondary/40 px-2 py-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="px-4 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-4 py-1.5 text-sm rounded-full bg-background text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/dang-ky" className="text-sm text-muted-foreground hover:text-foreground">
            Đăng ký
          </Link>
          <Link
            to="/dang-nhap"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
}