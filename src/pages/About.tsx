import { BookOpen, Eye, History } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import toppersImg from "@/assets/top.jpg";
import studentsImg from "@/assets/students.jpg";
import msImg from "@/assets/MS.jpg";

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
        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
          <img src={toppersImg} alt="Top students" className="w-full object-contain" />
          <div className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality education that fosters academic excellence, moral integrity, and social responsibility, preparing students to become competent global citizens who contribute to the advancement of society and the development of Ethiopia.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
          <img src={studentsImg} alt="Students" className="h-48 w-full object-cover" />
          <div className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Eye className="h-6 w-6 text-gold" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be a leading model school in East Africa, recognized for academic rigor, innovative teaching methodologies, and the holistic development of students who are prepared to excel in higher education and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* History */}
    <section className="bg-secondary py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <History className="h-6 w-6 text-gold" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our History</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Haramaya University Model School was established as an integral part of Haramaya University, one of Ethiopia's oldest and most distinguished institutions of higher learning. Founded with the vision of creating a center of academic excellence at the pre-university level, the school has grown to become one of the most respected educational institutions in the Oromia region and beyond.
            </p>
            <p>
              The school benefits from its unique affiliation with Haramaya University, giving students access to university-level resources including laboratories, libraries, and mentorship programs from university faculty.
            </p>
            <p>
              Over the decades, our alumni have gone on to attend top universities across Ethiopia and abroad, becoming leaders in fields ranging from medicine and engineering to public policy and the arts.
            </p>
          </div>
          <img src={msImg} alt="Haramaya University Model School campus" className="rounded-lg object-cover shadow-md w-full h-full max-h-80" />
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
