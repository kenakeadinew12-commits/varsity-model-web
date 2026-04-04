import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-campus.jpg";

const announcements = [
  { title: "2026 Admissions Now Open", date: "March 28, 2026", excerpt: "Applications for the 2026-2027 academic year are now being accepted. Submit your application before the deadline.", img: "📢" },
  { title: "National Science Fair Winners", date: "March 15, 2026", excerpt: "Our students secured 1st and 3rd place at the Ethiopian National Science Fair competition.", img: "🏆" },
  { title: "Annual Sports Day", date: "April 10, 2026", excerpt: "Join us for the upcoming inter-house sports competition featuring athletics, football, and volleyball.", img: "⚽" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Haramaya University campus" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
          Excellence in Education
        </h1>
        <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
          Haramaya University Model School — shaping the leaders of tomorrow through rigorous academics and holistic development.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 hover:bg-gold-dark"
        >
          Learn More <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>

    {/* Stats strip */}
    <section className="bg-primary py-8">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 text-center md:grid-cols-3">
        {[
          { icon: BookOpen, label: "Academic Programs", value: "15+" },
          { icon: Users, label: "Students Enrolled", value: "1,200+" },
          { icon: Award, label: "Years of Excellence", value: "25+" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <s.icon className="h-8 w-8 text-gold" />
            <span className="text-3xl font-bold text-primary-foreground">{s.value}</span>
            <span className="text-sm text-primary-foreground/70">{s.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Announcements */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-foreground">Latest Announcements</h2>
        <p className="mb-10 text-center text-muted-foreground">Stay updated with school news and events</p>
        <div className="grid gap-6 md:grid-cols-3">
          {announcements.map((a) => (
            <div key={a.title} className="group rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="mb-3 block text-4xl">{a.img}</span>
              <p className="mb-1 text-xs font-medium text-muted-foreground">{a.date}</p>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{a.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{a.excerpt}</p>
              <Link to="/news" className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-gold-dark">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Director's Welcome */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:flex-row">
        <div className="flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-6xl">
          👤
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-bold text-foreground">Director's Welcome</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Welcome to Haramaya University Model School. As an institution proudly affiliated with one of Ethiopia's leading universities, we are committed to providing a world-class education that nurtures critical thinking, creativity, and character. Our dedicated faculty, state-of-the-art facilities, and vibrant campus community create an environment where every student can thrive.
          </p>
          <p className="font-semibold text-foreground">Dr. Abebe Tadesse</p>
          <p className="text-sm text-muted-foreground">School Director</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
