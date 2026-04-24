import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <Link to="/tin-tuc" className="hover:text-foreground">{t("footer.news")}</Link>
            <Link to="/lien-he" className="hover:text-foreground">{t("footer.contact")}</Link>
            <Link to="/viec-lam" className="hover:text-foreground">{t("footer.jobs")}</Link>
            <Link to="/hoc-vien" className="hover:text-foreground">{t("footer.academy")}</Link>
          </nav>
          <div className="h-px w-full bg-border/50" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /><span>hello@ordinex.vn</span></span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /><span>+(84)919 111 419</span></span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><span>{t("footer.address")}</span></span>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/50 pt-6">
          <div className="flex gap-3">
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition"><Linkedin className="h-4 w-4" /></a>
          </div>
          <p className="text-xs text-muted-foreground">{t("footer.rights")}</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to="/chinh-sach" className="hover:text-foreground">{t("footer.policy")}</Link>
            <span>|</span>
            <Link to="/dieu-khoan" className="hover:text-foreground">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}