import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Ordinex" },
      { name: "description", content: "Liên hệ với đội ngũ Ordinex." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-center text-3xl md:text-4xl font-bold">Liên hệ với chúng tôi</h1>
        <p className="mt-3 text-center text-sm text-muted-foreground">Bạn có câu hỏi hoặc nhận xét gì? Hãy gửi tin nhắn cho chúng tôi</p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-serif">Let's Talk</h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Bạn có ý tưởng lớn hoặc thương hiệu nào muốn phát triển và cần sự trợ giúp? Hãy liên hệ với chúng tôi.
            </p>
            <div className="mt-8">
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">info@ordinex.vn</p>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold">Socials</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li><a href="#" className="underline">Instagram</a></li>
                <li><a href="#" className="underline">Twitter</a></li>
                <li><a href="#" className="underline">Facebook</a></li>
              </ul>
            </div>
          </div>
          <form className="space-y-4">
            {[
              { l: "Name", t: "text" },
              { l: "Email", t: "email" },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-sm mb-1">{f.l}</label>
                <input type={f.t} className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
              </div>
            ))}
            <div>
              <label className="block text-sm mb-1">What service are you interested in</label>
              <select className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm">
                <option>Select project type</option>
                <option>Quản lý tài sản cá nhân</option>
                <option>Giải pháp doanh nghiệp</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Budget</label>
              <select className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm">
                <option>Select project budget</option>
                <option>&lt; $10,000</option>
                <option>$10,000 - $50,000</option>
                <option>&gt; $50,000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea rows={5} className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm" />
            </div>
            <button type="submit" className="w-full rounded-md bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
              Submit
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}