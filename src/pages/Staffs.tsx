import { User } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import seyoumImg from "@/assets/staff/seyoum.jpg";
import bayushImg from "@/assets/staff/bayush.jpg";
import abdiImg from "@/assets/staff/abdi.jpg";
import abdroImg from "@/assets/staff/abdro.jpg";
import feyeraImg from "@/assets/staff/feyera.jpg";
import fikruImg from "@/assets/staff/fikru.jpg";
import ebisaImg from "@/assets/staff/ebisa.jpg";
import almazImg from "@/assets/staff/almaz.jpg";
import tatekImg from "@/assets/staff/tatek.jpg";
import bontuImg from "@/assets/staff/unkown.jpg";

interface StaffMember {
  name: string;
  role: string;
  image?: string;
}

const directorates: StaffMember[] = [
  { name: "Seyoum Shega", role: "Director", image: seyoumImg },
  { name: "Bayush Getahun", role: "KG Vice Director & Daycare Coordinator", image: bayushImg },
  { name: "Abdi Jemal Ousman", role: "Vice Director for Primary School (1–8)", image: abdiImg },
  { name: "Abdurahman Hassen", role: "Vice Director for Primary School (1–8)", image: abdroImg },
  { name: "Feyera Tilahun", role: "Vice Director for High School", image: feyeraImg },
];

const management: StaffMember[] = [
  { name: "Tatek Mekonin", role: "Unit Leader", image: tatekImg },
  { name: "Mulugeta Gudissa", role: "English Department Head" },
  { name: "Bontu Tesfaye", role: "Mathematics Department Head", image: bontuImg },
  { name: "Ebisa Belay", role: "Natural Sciences Department Head", image: ebisaImg },
  { name: "Almaz Digafe", role: "Amharic Department Head", image: almazImg },
  { name: "Sichale Idosa", role: "Afan Oromo Department Head" },
  { name: "Misrak Fanta", role: "Social Sciences Department Head" },
  { name: "Jemal Abdo", role: "Unit Leader" },
  { name: "Gizachew Tadesse", role: "Unit Leader" },
  { name: "Bikile Gadisa", role: "Unit Leader" },
  { name: "Shelema Ketema", role: "Unit Leader" },
  { name: "Mahlet Zeleke", role: "Unit Leader" },
  { name: "Fikru Bekele", role: "Sport Department Head (1–8)", image: fikruImg },
  { name: "Yared Shimelis", role: "Sport Department Head (9–12)" },
  { name: "Rome Teklu", role: "Mathematics Department (9–12)" },
  { name: "Alemeshet Zewedie", role: "Languages' Department Head" },
  { name: "Gemechis Ejigu", role: "Social Science Department Head" },
  { name: "Arif Mohammed", role: "Natural Science Department Head" },
  { name: "Tamiru Wogi", role: "Teachers Association" },
];

const StaffGrid = ({ title, members }: { title: string; members: StaffMember[] }) => (
  <div>
    <h2 className="mb-6 text-2xl font-bold text-foreground">{title}</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((m) => (
        <div
          key={m.name}
          className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-secondary">
            {m.image ? (
              <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
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

const Staffs = () => (
  <Layout>
    <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Staffs" }]} />

    <section className="bg-primary py-16 text-center">
      <h1 className="text-4xl font-bold text-primary-foreground">Our Staffs</h1>
      <p className="mt-2 text-primary-foreground/70">Meet the dedicated team behind our students' success</p>
    </section>

    <section className="py-16">
      <div className="container mx-auto space-y-16 px-4">
        <StaffGrid title="Directorates" members={directorates} />
        <StaffGrid title="School Management" members={management} />
      </div>
    </section>
  </Layout>
);

export default Staffs;
