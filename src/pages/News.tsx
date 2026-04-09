import { CalendarDays } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import footballImg from "@/assets/football.jpg";
import girlsImg from "@/assets/girls.jpg";
import midexamImg from "@/assets/midexam.jpg";
import modelexamImg from "@/assets/modelexam.jpg";

const news = [
  { date: "April 9, 2026", title: "Model Exam Started", body: "Model exams have officially started for all grade levels. Students are encouraged to prepare thoroughly and give their best effort.", img: modelexamImg },
  { date: "April 8, 2026", title: "Football Matches", body: "Exciting inter-school football matches were held, showcasing our students' athletic talent and team spirit.", img: footballImg },
  { date: "April 4, 2026", title: "Haramaya University Math Competition Winners", body: "Abenezer Nebyu (Grade 9) won 2nd place and Sami Elyas (Grade 10) won 3rd place.", img: null },
  { date: "April 3, 2026", title: "High School Tutorials", body: "Tutorials for high school girls and 12th-grade Entrance preparation.", img: girlsImg },
  { date: "March 30, 2026", title: "Mid Exam Started", body: "Mid-semester examinations have begun across all departments. We wish all students the best of success.", img: midexamImg },
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
          <article key={n.title} className="overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
            {n.img && <img src={n.img} alt={n.title} className="h-56 w-full object-cover" />}
            <div className="p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                {n.date}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-foreground">{n.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{n.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default News;
