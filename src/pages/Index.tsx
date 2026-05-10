import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import excellenceImg from "@/assets/excellence.jpg";
import directorImg from "@/assets/director.jpg";
import { supabase } from "@/integrations/supabase/client";

interface NewsItem { id: string; title: string; date: string; description: string; image_url: string | null; }

const Index = () => {
  const [announcements, setAnnouncements] = useState<NewsItem[]>([]);
  useEffect(() => {
    supabase.from("news").select("*").order("sort_order").limit(4)
      .then(({ data }) => setAnnouncements(data ?? []));
  }, []);

  return (
    <Layout>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <img src={excellenceImg} alt="Haramaya University Model School campus" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            Excellence in Education
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Haramaya University Model School — shaping the leaders of tomorrow through rigorous academics and holistic development.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-gold-dark">
            Learn More <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Latest Announcements</h2>
          <p className="mb-10 text-center text-muted-foreground">Stay updated with school news and events</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {announcements.map((a) => (
              <div key={a.id} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
                {a.image_url ? (
                  a.image_url.includes("tutorialgirl") ? (
                    <div className="flex h-56 w-full items-center justify-center bg-secondary">
                      <img src={a.image_url} alt={a.title} className="h-full w-full object-contain" />
                    </div>
                  ) : (
                    <img
                      src={a.image_url}
                      alt={a.title}
                      className="h-56 w-full object-cover"
                      style={{ objectPosition: a.image_url.includes("malefootball") ? "center bottom" : "center" }}
                    />
                  )
                ) : (
                  <div className="flex h-56 items-center justify-center bg-secondary text-6xl">🏆</div>
                )}
                <div className="p-6">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">{a.date}</p>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{a.title}</h3>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{a.description}</p>
                  <Link to="/news" className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-gold-dark">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
          <img src={directorImg} alt="Mr. Seyoum Shega" className="h-48 w-48 flex-shrink-0 rounded-full object-cover shadow-lg" />
          <div>
            <h2 className="mb-2 text-2xl font-bold text-foreground">Director's Welcome</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Welcome to Haramaya University Model School. As an institution proudly affiliated with one of Ethiopia's leading universities, we are committed to providing a world-class education that nurtures critical thinking, creativity, and character. Our dedicated faculty, state-of-the-art facilities, and vibrant campus community create an environment where every student can thrive.
            </p>
            <p className="font-semibold text-foreground">Mr. Seyoum Shega</p>
            <p className="text-sm text-muted-foreground">School Director</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
