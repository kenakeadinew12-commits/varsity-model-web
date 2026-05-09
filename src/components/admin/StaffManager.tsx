import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "./ImageUpload";

interface StaffRow {
  id: string; name: string; role: string;
  image_url: string | null; section: string; sort_order: number;
}

const empty = { name: "", role: "", image_url: null as string | null, section: "management", sort_order: 0 };

const StaffManager = () => {
  const [items, setItems] = useState<StaffRow[]>([]);
  const [editing, setEditing] = useState<Partial<StaffRow> | null>(null);

  const load = async () => {
    const { data } = await supabase.from("staff_members").select("*").order("section").order("sort_order");
    setItems(data ?? []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing?.name || !editing?.role || !editing?.section) {
      toast.error("Name, role, and section required"); return;
    }
    const payload = {
      name: editing.name, role: editing.role,
      image_url: editing.image_url ?? null,
      section: editing.section, sort_order: editing.sort_order ?? 0,
    };
    const { error } = editing.id
      ? await supabase.from("staff_members").update(payload).eq("id", editing.id)
      : await supabase.from("staff_members").insert(payload);
    if (error) { toast.error(error.message); return; }
    toast.success("Saved"); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this staff member?")) return;
    const { error } = await supabase.from("staff_members").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); load(); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Staff Members</h2>
        <Button onClick={() => setEditing({ ...empty })}><Plus className="mr-1 h-4 w-4" />New</Button>
      </div>

      {editing && (
        <Card className="space-y-3 p-4">
          <h3 className="font-semibold">{editing.id ? "Edit" : "New"} Staff Member</h3>
          <div><Label>Name</Label><Input value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></div>
          <div><Label>Role / Position</Label><Input value={editing.role ?? ""} onChange={(e) => setEditing({ ...editing, role: e.target.value })} /></div>
          <div>
            <Label>Section</Label>
            <Select value={editing.section ?? "management"} onValueChange={(v) => setEditing({ ...editing, section: v })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="directorates">Directorates</SelectItem>
                <SelectItem value="management">School Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div><Label>Sort Order</Label><Input type="number" value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} /></div>
          <div><Label>Photo</Label><ImageUpload value={editing.image_url ?? null} onChange={(url) => setEditing({ ...editing, image_url: url })} /></div>
          <div className="flex gap-2">
            <Button onClick={save}>Save</Button>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
          </div>
        </Card>
      )}

      {["directorates", "management"].map((sec) => (
        <div key={sec}>
          <h3 className="mb-2 mt-6 font-semibold capitalize">{sec === "management" ? "School Management" : sec}</h3>
          <div className="space-y-2">
            {items.filter((i) => i.section === sec).map((m) => (
              <Card key={m.id} className="flex items-center gap-4 p-3">
                {m.image_url && <img src={m.image_url} alt="" className="h-12 w-12 rounded-full object-cover" />}
                <div className="flex-1">
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => setEditing(m)}><Pencil className="h-4 w-4" /></Button>
                <Button size="sm" variant="destructive" onClick={() => remove(m.id)}><Trash2 className="h-4 w-4" /></Button>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaffManager;
