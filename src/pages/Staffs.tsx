import { User } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const StaffGrid = ({ title, count }: { title: string; count: number }) => (
  <div>
    <h2 className="mb-6 text-2xl font-bold text-foreground">{title}</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
            <User className="h-12 w-12 text-primary" />
          </div>
          <h3 className="font-semibold text-muted-foreground">Staff Member</h3>
          <p className="text-sm text-muted-foreground">—</p>
        </div>
      ))}
    </div>
  </div>
);

const Staffs = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Staffs" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Our Staffs</h1>
      <p className="mt-2 text-primary-foreground/70">Meet the dedicated team behind our students' success</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto space-y-16 px-4">
        <StaffGrid title="Directorates" count={4} />
        <StaffGrid title="Homeroom Teachers" count={8} />
      </div>
    </section>
  </Layout>
);

export default Staffs;
