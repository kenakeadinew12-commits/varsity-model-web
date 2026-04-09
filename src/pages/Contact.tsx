import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Home", path: "/" }, { label: "Contact" }]} />

      <section className="bg-primary py-16 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground">Contact Us</h1>
        <p className="mt-2 text-primary-foreground/70">We'd love to hear from you</p>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground">Send a Message</h2>
            {(["name", "email", "subject"] as const).map((f) => (
              <div key={f}>
                <label className="mb-1 block text-sm font-medium capitalize text-foreground">{f}</label>
                <input
                  type={f === "email" ? "email" : "text"}
                  required
                  value={form[f]}
                  onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring focus:ring-2"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-gold px-8 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105 hover:bg-gold-dark"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
            <ul className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "Haramaya University Campus, Haramaya, Oromia, Ethiopia" },
                { icon: Phone, label: "Phone", value: "+251901357102" },
                { icon: Mail, label: "Email", value: "info@humodelschool.edu.et" },
                { icon: Clock, label: "Office Hours", value: "Mon - Fri: 8:00 AM - 5:00 PM" },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                    <c.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-lg border shadow-sm">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0!2d42.0!3d9.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjQnMDAuMCJOIDQywrAwMCcwMC4wIkU!5e0!3m2!1sen!2set!4v1600000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
