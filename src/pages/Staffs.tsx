import { User } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const staff = [
  { name: "Dr. Abebe Tadesse", title: "School Director" },
  { name: "Mrs. Fatuma Ahmed", title: "Vice Director, Academics" },
  { name: "Mr. Tesfaye Bekele", title: "Head of Natural Sciences" },
  { name: "Mrs. Meron Girma", title: "Head of Social Sciences" },
  { name: "Mr. Solomon Hailu", title: "Mathematics Teacher" },
  { name: "Ms. Hana Kebede", title: "English Language Teacher" },
  { name: "Mr. Daniel Worku", title: "Physics Teacher" },
  { name: "Mrs. Sara Tadesse", title: "Chemistry Teacher" },
  { name: "Mr. Yonas Mulugeta", title: "Biology Teacher" },
  { name: "Ms. Rahel Getachew", title: "ICT Teacher" },
  { name: "Mr. Dawit Assefa", title: "History Teacher" },
  { name: "Mrs. Tigist Mekonnen", title: "Civics Teacher" },
];

const Staffs = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Staffs" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Our Faculty</h1>
      <p className="mt-2 text-primary-foreground/70">Meet the dedicated team behind our students' success</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {staff.map((s) => (
            <div key={s.name} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                <User className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Staffs;
