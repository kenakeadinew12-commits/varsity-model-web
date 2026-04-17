import { BookOpen, Eye, History, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import toppersImg from "@/assets/top.jpg";
import studentsImg from "@/assets/students.jpg";
import msImg from "@/assets/MS.jpg";

const values = [
  "Embody a culture of motivation and initiative",
  "Integrity",
  "Justice",
  "Creativity",
  "Transparency",
  "Providing prompt responses",
  "Adaptability and flexibility",
];

const About = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "About" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">About Us</h1>
      <p className="mt-2 text-primary-foreground/70">Learn about our mission, vision, and history</p>
    </section>

    {/* Mission & Vision */}
    <section className="py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm">
          <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
            <img src={toppersImg} alt="Top students" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              To deliver quality education to the university and the surrounding community children and to share experiences with nearby schools.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm">
          <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
            <img src={studentsImg} alt="Students" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="leading-relaxed text-muted-foreground">
              To provide quality education that fosters problem-solving and critical thinking among students, making them capable of competing in East Ethiopia's schools, and to see the institution as a model by 2030.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Goals & Values */}
    <section className="py-16">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Target className="h-6 w-6 text-gold" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground">Our Goals</h2>
          <p className="leading-relaxed text-muted-foreground">
            To ensure quality education through the implementation of quality assurance packages and to provide quality education to the university community's children, achieving specific objectives.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-6 w-6 text-gold" />
          </div>
          <h2 className="mb-3 text-2xl font-bold text-foreground">Our Values</h2>
          <ul className="space-y-2 text-muted-foreground">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* History */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <History className="h-6 w-6 text-gold" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our History</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Haramaya University Model School was established in 1955 A.D. by Emperor Haile Selassie at Haramaya College of Agriculture. Initially, it served the children of American teachers at the college, and the institution gradually expanded to Haramaya University (HU), improving step by step. Since its founding, Haramaya Model School has been dedicated to providing high-quality education in rural areas, focusing on early childhood and primary education. Currently, it offers education from kindergarten through 12th grade in three languages: Amharic, Oromiffa and English.
            </p>
            <p>
              The school also strives to support students with an interest in learning, prepare capable students for examinations, and nurture and develop students who are ready for higher education. Its programs include:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Nursery and Kindergarten in Amharic and Oromiffa (Pre-primary school)</li>
              <li>Grades 1–6 in Oromiffa and Amharic</li>
              <li>Grades 7–8 in English</li>
              <li>Grades 9–12 in English (Secondary school)</li>
            </ul>
            <p>
              The school's education sector aligns with the economic sector, emphasizing human resources, financial, and material assets to operate effectively.
            </p>
          </div>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <img src={msImg} alt="Haramaya University Model School campus" className="mb-4 w-full rounded-lg object-cover shadow-md" />
            <p>
              Being the first of its kind among the schools in the eastern part of our country, Haramaya Model School is recognized for its quality education and strives to serve the university and local community. The school aims to improve student performance and capacity through continuous efforts, enhancing its reputation as a resilient and experienced institution in the surrounding schools.
            </p>
            <p>
              The purpose of the establishment is to serve the university's teachers, administrative staff, PhD students, and the children of the local community by providing quality education. Additionally, it seeks to retain staff within the university, offer better services for children, and create a strong, experienced institution that benefits the surrounding schools and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
