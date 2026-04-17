import { Atom, Globe, Shapes, Baby, BookOpen, GraduationCap, School, Users } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedCounter from "@/components/AnimatedCounter";

const programs = [
  {
    icon: Baby,
    title: "Daycare",
    desc: "A safe, nurturing environment for our youngest learners, focused on early sensory and social development.",
  },
  {
    icon: BookOpen,
    title: "KG (Amharic & Afan Oromo)",
    desc: "Kindergarten programs in Amharic and Afan Oromo that build foundational literacy, numeracy, and social skills.",
  },
  {
    icon: School,
    title: "Grades 1–6 (Afan Oromo & Amharic)",
    desc: "Primary education in students' mother tongue, ensuring strong fundamentals across core subjects.",
  },
  {
    icon: GraduationCap,
    title: "Grades 7–12 (English)",
    desc: "Middle and secondary education delivered in English, preparing students for national exams and higher education.",
  },
];

const studentStats = [
  { label: "Day-Care (1 & 2)", total: 108, male: 58, female: 50 },
  { label: "KG (1 & 2)", total: 297, male: 159, female: 138 },
  { label: "Grades 1–8 Regular", total: 1005, male: 542, female: 463 },
  { label: "Grades 1–8 Night", total: 228, male: 103, female: 125 },
  { label: "Grades 9–12 Regular", total: 231, male: 120, female: 111 },
  { label: "Grades 9–12 Night", total: 92, male: 42, female: 50 },
];

const staffStats = [
  { label: "Day-Care Staff", total: 2, male: 0, female: 2 },
  { label: "KG Staff", total: 13, male: 0, female: 13 },
  { label: "Primary School (1–8) Staff", total: 47, male: 23, female: 24 },
  { label: "Secondary School (9–12) Staff", total: 32, male: 26, female: 6 },
];

const totalStudents = studentStats.reduce((s, x) => s + x.total, 0);
const totalStaff = staffStats.reduce((s, x) => s + x.total, 0);

const Academics = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Academics" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Academics</h1>
      <p className="mt-2 text-primary-foreground/70">Our programs, students, and faculty at a glance</p>
    </section>

    {/* Programs */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our Programs</h2>
          <p className="mt-2 text-muted-foreground">From daycare through 12th grade, taught in Amharic, Afan Oromo, and English</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.title} className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <p.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Animated statistics */}
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our School in Numbers</h2>
          <p className="mt-2 text-primary-foreground/70">A snapshot of our students and staff</p>
        </div>

        {/* Headline counters */}
        <div className="mx-auto mb-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm">
            <Users className="mx-auto mb-2 h-8 w-8 text-gold" />
            <AnimatedCounter end={totalStudents} className="block text-5xl font-extrabold text-gold" />
            <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/80">Total Students</p>
          </div>
          <div className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-8 text-center backdrop-blur-sm">
            <GraduationCap className="mx-auto mb-2 h-8 w-8 text-gold" />
            <AnimatedCounter end={totalStaff} className="block text-5xl font-extrabold text-gold" />
            <p className="mt-2 text-sm uppercase tracking-wide text-primary-foreground/80">Total Staff</p>
          </div>
        </div>

        {/* Student breakdown */}
        <h3 className="mb-4 text-center text-xl font-semibold text-gold">Student Breakdown</h3>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studentStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-5">
              <p className="text-sm font-medium text-primary-foreground/80">{s.label}</p>
              <AnimatedCounter end={s.total} className="my-1 block text-3xl font-bold text-gold" />
              <div className="flex justify-between text-xs text-primary-foreground/70">
                <span>Male: <AnimatedCounter end={s.male} className="font-semibold text-primary-foreground" /></span>
                <span>Female: <AnimatedCounter end={s.female} className="font-semibold text-primary-foreground" /></span>
              </div>
            </div>
          ))}
        </div>

        {/* Staff breakdown */}
        <h3 className="mb-4 text-center text-xl font-semibold text-gold">Staff Breakdown by Cycle</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {staffStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-5">
              <p className="text-sm font-medium text-primary-foreground/80">{s.label}</p>
              <AnimatedCounter end={s.total} className="my-1 block text-3xl font-bold text-gold" />
              <div className="flex justify-between text-xs text-primary-foreground/70">
                <span>Male: <AnimatedCounter end={s.male} className="font-semibold text-primary-foreground" /></span>
                <span>Female: <AnimatedCounter end={s.female} className="font-semibold text-primary-foreground" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Academics;
