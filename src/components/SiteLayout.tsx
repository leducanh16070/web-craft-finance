import { Header } from "./Header";
import { Footer } from "./Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}