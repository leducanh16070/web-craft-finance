import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export const Route = createFileRoute("/tin-tuc/$slug")({
  head: () => ({
    meta: [
      { title: "Bài viết — Ordinex" },
      { name: "description", content: "Chi tiết bài viết tài chính." },
    ],
  }),
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-3">
          {[news1, news2, news3, news1].map((img, i) => (
            <Link key={i} to="/tin-tuc/$slug" params={{ slug: `relate-${i}` }} className="flex gap-3 rounded-lg border border-border bg-card p-3">
              <img src={img} alt="" loading="lazy" width={64} height={64} className="h-16 w-16 rounded object-cover" />
              <div>
                <span className="text-[10px] font-semibold text-primary">CRYPTO</span>
                <p className="text-sm font-medium leading-tight mt-1">Communication For Everyday Meetings</p>
                <p className="text-[10px] text-muted-foreground mt-1">27 Aug 2024</p>
              </div>
            </Link>
          ))}
        </aside>
        <article>
          <h1 className="text-2xl font-bold">Hồ Ngọc Hà: 'Tôi ủng hộ Subeo có bạn gái, như đàn ông trưởng thành' — {slug}</h1>
          <p className="mt-2 text-xs text-muted-foreground">Thứ Sáu, ngày 17/04/2026 15:38 Pm (GMT+7)</p>
          <div className="prose prose-invert mt-6 max-w-none text-sm text-muted-foreground space-y-4">
            <p>Ca sĩ Hồ Ngọc Hà cho biết cô ủng hộ mối quan hệ của Subeo với bạn gái và hy vọng khán giả đừng soi xét, bình luận tiêu cực ảnh hưởng đến tinh thần các con.</p>
            <p>Hôm 17/4, Hồ Ngọc Hà bày tỏ về Subeo cũng như mối quan hệ của con trai đầu lòng với bạn gái được chú ý gần đây.</p>
            <img src={news2} alt="" loading="lazy" width={800} height={512} className="rounded-xl my-6 w-full" />
            <p>Theo Hồ Ngọc Hà, cô và Kim Lý thường xuyên dõi theo, trò chuyện với Subeo cũng như bạn gái của cậu. Dù thuộc hai thế hệ, vợ chồng cô có cùng gu âm nhạc với các con.</p>
          </div>
        </article>
      </section>
    </SiteLayout>
  );
}