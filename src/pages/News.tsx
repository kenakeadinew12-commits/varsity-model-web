import { CalendarDays } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const news = [
  { date: "March 28, 2026", title: "2026-2027 Admissions Now Open", body: "We are excited to announce that applications for the upcoming academic year are now being accepted. Prospective students and parents are encouraged to visit our campus or contact the admissions office for more information." },
  { date: "March 15, 2026", title: "Students Win National Science Fair", body: "Our students represented the school at the Ethiopian National Science Fair and secured 1st and 3rd place in the physics and biology categories respectively. Congratulations to the winning teams and their mentors!" },
  { date: "March 1, 2026", title: "New Computer Lab Inauguration", body: "A state-of-the-art computer laboratory with 40 workstations has been inaugurated on campus, funded in partnership with Haramaya University's ICT department." },
  { date: "February 20, 2026", title: "Mid-Semester Exam Schedule Released", body: "The mid-semester examination schedule for all grade levels has been published. Students can collect their copies from the academic affairs office." },
  { date: "February 10, 2026", title: "Community Service Week", body: "Students participated in a week-long community service initiative, planting trees and cleaning public areas in Haramaya town." },
  { date: "January 25, 2026", title: "Parent-Teacher Conference", body: "The bi-annual parent-teacher conference was held successfully with record attendance. The next conference is scheduled for June 2026." },
];

const News = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "News" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">News & Events</h1>
      <p className="mt-2 text-primary-foreground/70">Latest updates from our school community</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl space-y-6 px-4">
        {news.map((n) => (
          <article key={n.title} className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              {n.date}
            </div>
            <h2 className="mb-2 text-xl font-semibold text-foreground">{n.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{n.body}</p>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default News;
