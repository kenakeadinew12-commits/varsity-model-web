import { Atom, Globe, Shapes } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const natural = ["Mathematics", "Physics", "Chemistry", "Biology", "ICT (Information & Communication Technology)", "English", "Agriculture", "Amharic"];
const social = ["Economics", "Geography", "History", "Civics & Ethical Education", "Mathematics", "Amharic", "English Language"];
const others = ["Health and Physical Education", "Art", "Music", "Career and Technical Education"];

const SubjectGrid = ({ subjects, icon: Icon, title, color }: { subjects: string[]; icon: typeof Atom; title: string; color: string }) => (
  <div>
    <div className="mb-6 flex items-center gap-3">
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
        <Icon className="h-6 w-6 text-gold" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {subjects.map((s) => (
        <div key={s} className="rounded-lg border bg-card px-5 py-4 shadow-sm transition-shadow hover:shadow-md">
          <span className="font-medium text-foreground">{s}</span>
        </div>
      ))}
    </div>
  </div>
);

const Academics = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Academics" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Academics</h1>
      <p className="mt-2 text-primary-foreground/70">Our comprehensive curriculum and subject offerings</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto space-y-16 px-4">
        <SubjectGrid subjects={natural} icon={Atom} title="Natural Sciences" color="bg-primary" />
        <SubjectGrid subjects={social} icon={Globe} title="Social Sciences" color="bg-primary" />
        <SubjectGrid subjects={others} icon={Shapes} title="Others" color="bg-primary" />
      </div>
    </section>
  </Layout>
);

export default Academics;
