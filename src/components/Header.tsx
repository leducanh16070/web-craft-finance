import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher, useLanguage } from "@/i18n/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/gioi-thieu", label: t("nav.about") },
    { to: "/su-kien", label: t("nav.events") },
    { to: "/giai-phap", label: t("nav.solutions") },
  ] as const;
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
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/dang-ky" className="text-sm text-muted-foreground hover:text-foreground">
            {t("nav.register")}
          </Link>
          <Link
            to="/dang-nhap"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            {t("nav.login")}
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/40"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:bg-secondary/40"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border/50">
              <Link to="/dang-ky" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full border border-border px-4 py-2 text-sm">{t("nav.register")}</Link>
              <Link to="/dang-nhap" onClick={() => setOpen(false)} className="flex-1 text-center rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground">{t("nav.login")}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}