import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Stat { id: string; key: string; label: string; value: number; sort_order: number; }

const StatsManager = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [newStat, setNewStat] = useState({ key: "", label: "", value: 0, sort_order: 0 });

  const load = async () => {
    const { data } = await supabase.from("statistics").select("*").order("sort_order");
    setStats(data ?? []);
  };
  useEffect(() => { load(); }, []);

  const update = async (s: Stat) => {
    const { error } = await supabase.from("statistics")
      .update({ label: s.label, value: s.value, sort_order: s.sort_order })
      .eq("id", s.id);
    if (error) toast.error(error.message); else toast.success("Updated");
  };

  const add = async () => {
    if (!newStat.key || !newStat.label) { toast.error("Key and label required"); return; }
    const { error } = await supabase.from("statistics").insert(newStat);
    if (error) toast.error(error.message);
    else { toast.success("Added"); setNewStat({ key: "", label: "", value: 0, sort_order: 0 }); load(); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this statistic?")) return;
    const { error } = await supabase.from("statistics").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Deleted"); load(); }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Student & Staff Statistics</h2>

      <div className="space-y-2">
        {stats.map((s) => (
          <Card key={s.id} className="grid grid-cols-1 gap-3 p-3 md:grid-cols-[1fr_2fr_1fr_1fr_auto_auto] md:items-end">
            <div><Label className="text-xs">Key</Label><Input value={s.key} disabled /></div>
            <div><Label className="text-xs">Label</Label><Input value={s.label} onChange={(e) => setStats(stats.map(x => x.id === s.id ? { ...x, label: e.target.value } : x))} /></div>
            <div><Label className="text-xs">Value</Label><Input type="number" value={s.value} onChange={(e) => setStats(stats.map(x => x.id === s.id ? { ...x, value: parseInt(e.target.value) || 0 } : x))} /></div>
            <div><Label className="text-xs">Sort</Label><Input type="number" value={s.sort_order} onChange={(e) => setStats(stats.map(x => x.id === s.id ? { ...x, sort_order: parseInt(e.target.value) || 0 } : x))} /></div>
            <Button size="sm" onClick={() => update(s)}>Save</Button>
            <Button size="sm" variant="destructive" onClick={() => remove(s.id)}><Trash2 className="h-4 w-4" /></Button>
          </Card>
        ))}
      </div>

      <Card className="space-y-3 p-4">
        <h3 className="font-semibold"><Plus className="mr-1 inline h-4 w-4" />Add New Statistic</h3>
        <div className="grid gap-3 md:grid-cols-4">
          <div><Label>Key (unique)</Label><Input value={newStat.key} onChange={(e) => setNewStat({ ...newStat, key: e.target.value })} /></div>
          <div><Label>Label</Label><Input value={newStat.label} onChange={(e) => setNewStat({ ...newStat, label: e.target.value })} /></div>
          <div><Label>Value</Label><Input type="number" value={newStat.value} onChange={(e) => setNewStat({ ...newStat, value: parseInt(e.target.value) || 0 })} /></div>
          <div><Label>Sort</Label><Input type="number" value={newStat.sort_order} onChange={(e) => setNewStat({ ...newStat, sort_order: parseInt(e.target.value) || 0 })} /></div>
        </div>
        <Button onClick={add}>Add Statistic</Button>
      </Card>
    </div>
  );
};

export default StatsManager;
