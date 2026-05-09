import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsManager from "@/components/admin/NewsManager";
import StaffManager from "@/components/admin/StaffManager";
import StatsManager from "@/components/admin/StatsManager";
import { LogOut, Home } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [user, loading, navigate]);

  if (loading) return <div className="flex min-h-screen items-center justify-center">Loading…</div>;
  if (!user) return null;

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">Your account does not have admin permissions.</p>
        <Button onClick={async () => { await signOut(); navigate("/auth"); }}>Sign Out</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <header className="border-b bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 rounded-full" />
            <div>
              <h1 className="font-bold">Admin Dashboard</h1>
              <p className="text-xs text-primary-foreground/70">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" asChild>
              <Link to="/"><Home className="mr-2 h-4 w-4" />View Site</Link>
            </Button>
            <Button variant="secondary" size="sm" onClick={async () => { await signOut(); navigate("/auth"); }}>
              <LogOut className="mr-2 h-4 w-4" />Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news">
          <TabsList className="mb-6">
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="staff">Staff</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          <TabsContent value="news"><NewsManager /></TabsContent>
          <TabsContent value="staff"><StaffManager /></TabsContent>
          <TabsContent value="stats"><StatsManager /></TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
