import { useEffect, useState } from "react";
import { User } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { supabase } from "@/integrations/supabase/client";

interface StaffMember { id: string; name: string; role: string; image_url: string | null; section: string; }

const StaffGrid = ({ title, members }: { title: string; members: StaffMember[] }) => (
  <div>
    <h2 className="mb-6 text-2xl font-bold text-foreground">{title}</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((m) => (
        <div key={m.id} className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-secondary">
            {m.image_url ? (
              <img src={m.image_url} alt={m.name} className="h-full w-full object-cover" />
            ) : (
              <User className="h-12 w-12 text-primary" />
            )}
          </div>
          <h3 className="font-semibold text-foreground">{m.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
        </div>
      ))}
    </div>
  </div>
);

const Staffs = () => {
  const [members, setMembers] = useState<StaffMember[]>([]);
  useEffect(() => {
    supabase.from("staff_members").select("*").order("section").order("sort_order")
      .then(({ data }) => setMembers(data ?? []));
  }, []);

  const directorates = members.filter((m) => m.section === "directorates");
  const management = members.filter((m) => m.section === "management");

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Staffs" }]} />

      <section className="bg-primary py-16 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground">Our Staffs</h1>
        <p className="mt-2 text-primary-foreground/70">Meet the dedicated team behind our students' success</p>
      </section>

      <section className="py-16">
        <div className="container mx-auto space-y-16 px-4">
          {directorates.length > 0 && <StaffGrid title="Directorates" members={directorates} />}
          {management.length > 0 && <StaffGrid title="School Management" members={management} />}
        </div>
      </section>
    </Layout>
  );
};

export default Staffs;
