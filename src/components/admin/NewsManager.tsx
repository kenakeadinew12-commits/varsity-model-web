import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import ImageUpload from "./ImageUpload";

interface NewsItem {
  id: string; title: string; date: string; description: string;
  image_url: string | null; sort_order: number;
}

const empty = { title: "", date: "", description: "", image_url: null as string | null, sort_order: 0 };

const NewsManager = () => {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [editing, setEditing] = useState<Partial<NewsItem> | null>(null);

  const load = async () => {
    const { data } = await supabase.from("news").select("*").order("sort_order");
    setItems(data ?? []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing?.title || !editing?.date || !editing?.description) {
      toast.error("Title, date, and description are required"); return;
    }
    const payload = {
      title: editing.title, date: editing.date, description: editing.description,
      image_url: editing.image_url ?? null, sort_order: editing.sort_order ?? 0,
    };
    const { error } = editing.id
      ? await supabase.from("news").update(payload).eq("id", editing.id)
      : await supabase.from("news").insert(payload);
    if (error) { toast.error(error.message); return; }
    toast.success("Saved"); setEditing(null); load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this news item?")) return;
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); load(); }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">News Items</h2>
        <Button onClick={() => setEditing({ ...empty })}><Plus className="mr-1 h-4 w-4" />New</Button>
      </div>

      {editing && (
        <Card className="space-y-3 p-4">
          <h3 className="font-semibold">{editing.id ? "Edit" : "New"} News Item</h3>
          <div><Label>Title</Label><Input value={editing.title ?? ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} /></div>
          <div><Label>Date (e.g. May 8, 2026)</Label><Input value={editing.date ?? ""} onChange={(e) => setEditing({ ...editing, date: e.target.value })} /></div>
          <div><Label>Description</Label><Textarea rows={4} value={editing.description ?? ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} /></div>
          <div><Label>Sort Order (lower shows first)</Label><Input type="number" value={editing.sort_order ?? 0} onChange={(e) => setEditing({ ...editing, sort_order: parseInt(e.target.value) || 0 })} /></div>
          <div><Label>Image</Label><ImageUpload value={editing.image_url ?? null} onChange={(url) => setEditing({ ...editing, image_url: url })} /></div>
          <div className="flex gap-2">
            <Button onClick={save}>Save</Button>
            <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
          </div>
        </Card>
      )}

      <div className="space-y-2">
        {items.map((n) => (
          <Card key={n.id} className="flex items-center gap-4 p-3">
            {n.image_url && <img src={n.image_url} alt="" className="h-16 w-16 rounded object-cover" />}
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">{n.date} · sort {n.sort_order}</p>
              <p className="font-semibold">{n.title}</p>
              <p className="line-clamp-1 text-sm text-muted-foreground">{n.description}</p>
            </div>
            <Button size="sm" variant="outline" onClick={() => setEditing(n)}><Pencil className="h-4 w-4" /></Button>
            <Button size="sm" variant="destructive" onClick={() => remove(n.id)}><Trash2 className="h-4 w-4" /></Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsManager;
