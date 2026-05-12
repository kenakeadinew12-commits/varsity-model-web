import { useEffect, useState } from "react";
import { Baby, BookOpen, GraduationCap, ImageIcon, School, Users } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import AnimatedCounter from "@/components/AnimatedCounter";
import { supabase } from "@/integrations/supabase/client";

const Placeholder = ({ label }: { label: string }) => (
  <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/40 p-4 text-center">
    <ImageIcon className="mb-2 h-8 w-8 text-muted-foreground/60" />
    <p className="text-sm font-medium text-muted-foreground">{label}</p>
    <p className="text-xs text-muted-foreground/70">Coming Soon</p>
  </div>
);

const SectionGallery = ({
  title,
  description,
  groupPhoto,
  groupPhotoCaption,
  images = [],
  placeholderCount = 0,
  placeholderLabel = "Photo",
}: {
  title: string;
  description?: string;
  groupPhoto?: string;
  groupPhotoCaption?: string;
  images?: string[];
  placeholderCount?: number;
  placeholderLabel?: string;
}) => (
  <div className="rounded-xl border bg-card p-6 shadow-sm md:p-8">
    <div className="mb-6">
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
    </div>
    {groupPhoto && (
      <figure className="mb-6 overflow-hidden rounded-lg border">
        <img src={groupPhoto} alt={groupPhotoCaption ?? title} className="h-auto w-full object-cover" />
        {groupPhotoCaption && (
          <figcaption className="bg-secondary px-4 py-2 text-center text-sm text-muted-foreground">{groupPhotoCaption}</figcaption>
        )}
      </figure>
    )}
    {(images.length > 0 || placeholderCount > 0) && (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div key={src} className="overflow-hidden rounded-lg border bg-muted">
            <img src={src} alt={`${title} ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
          </div>
        ))}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <Placeholder key={i} label={placeholderLabel} />
        ))}
      </div>
    )}
  </div>
);

const programs = [
  { icon: Baby, title: "Daycare", desc: "A safe, nurturing environment for our youngest learners, focused on early sensory and social development." },
  { icon: BookOpen, title: "KG (Amharic & Afan Oromo)", desc: "Kindergarten programs in Amharic and Afan Oromo that build foundational literacy, numeracy, and social skills." },
  { icon: School, title: "Grades 1–6 (Afan Oromo & Amharic)", desc: "Primary education in students' mother tongue, ensuring strong fundamentals across core subjects." },
  { icon: GraduationCap, title: "Grades 7–12 (English)", desc: "Middle and secondary education delivered in English, preparing students for national exams and higher education." },
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

const Academics = () => {
  const [totalStudents, setTotalStudents] = useState(studentStats.reduce((s, x) => s + x.total, 0));
  const [totalStaff, setTotalStaff] = useState(staffStats.reduce((s, x) => s + x.total, 0));

  useEffect(() => {
    supabase.from("statistics").select("key,value").then(({ data }) => {
      if (!data) return;
      const map = Object.fromEntries(data.map((d) => [d.key, d.value]));
      if (map.total_students) setTotalStudents(map.total_students);
      if (map.total_staff) setTotalStaff(map.total_staff);
    });
  }, []);

  return (

  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Academics" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Academics</h1>
      <p className="mt-2 text-primary-foreground/70">Our programs, students, and faculty at a glance</p>
    </section>

    {/* Programs */}
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-4">
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

    {/* Galleries by section */}
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Inside Our School</h2>
          <p className="mt-2 text-muted-foreground">Faculty group photos and classroom moments across every level</p>
        </div>
        <div className="space-y-8">
          <SectionGallery
            title="Daycare"
            description="Our youngest learners in a nurturing environment."
            placeholderCount={3}
            placeholderLabel="Daycare Photo"
          />
          <SectionGallery
            title="Kindergarten (KG)"
            description="Foundational learning in Amharic and Afan Oromo."
            groupPhoto="/cms-assets/kgteachers.jpg"
            groupPhotoCaption="KG Teaching Staff"
            images={["/cms-assets/kgstudents1.jpg", "/cms-assets/kgstudents2.jpg", "/cms-assets/kgstudents3.jpg"]}
          />
          <SectionGallery
            title="Primary School (Grades 1–8)"
            description="Strong fundamentals taught in students' mother tongue."
            groupPhoto="/cms-assets/allteachers.jpg"
            groupPhotoCaption="Primary & Secondary Teaching Staff"
            placeholderCount={3}
            placeholderLabel="Primary Photo"
          />
          <SectionGallery
            title="Secondary School (Grades 9–12)"
            description="Preparing students for national exams and higher education."
            groupPhoto="/cms-assets/allteachers.jpg"
            groupPhotoCaption="Primary & Secondary Teaching Staff"
            placeholderCount={3}
            placeholderLabel="Secondary Photo"
          />
        </div>
      </div>
    </section>

    {/* Animated statistics */}
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4">
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
};


export default Academics;
