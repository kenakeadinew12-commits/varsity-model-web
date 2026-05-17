import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { supabase } from "@/integrations/supabase/client";

interface NewsItem { id: string; title: string; date: string; description: string; image_url: string | null; }

const News = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  useEffect(() => {
    supabase.from("news").select("*").order("sort_order").then(({ data }) => setItems(data ?? []));
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "News" }]} />

      <section className="bg-primary py-16 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground">News & Events</h1>
        <p className="mt-2 text-primary-foreground/70">Latest updates from our school community</p>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl space-y-6 px-4">
          {items.map((n) => (
            <article key={n.id} className="overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
              {n.image_url && (
                n.image_url.includes("tutorialgirl") ? (
                  <div className="flex h-56 w-full items-center justify-center bg-secondary">
                    <img src={n.image_url} alt={n.title} className="h-full w-full object-contain" />
                  </div>
                ) : (
                  <img
                    src={n.image_url}
                    alt={n.title}
                    className="h-56 w-full object-cover"
                    style={{ objectPosition: n.image_url.includes("malefootball") ? "center 30%" : "center" }}
                  />
                )
              )}
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {n.date}
                </div>
                <h2 className="mb-2 text-xl font-semibold text-foreground">{n.title}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{n.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
