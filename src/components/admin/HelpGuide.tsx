import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Users, BarChart3, ShieldCheck, ImageIcon, LifeBuoy } from "lucide-react";

const directors = [
  "Seyoum Shega",
  "Bayush Getahun",
  "Abdi Jemal",
  "Abdurahman Hassen",
  "Feyera Tilahun",
];

const HelpGuide = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <LifeBuoy className="h-5 w-5" /> Welcome, Director
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            This dashboard lets the five school directorates manage the website without touching any code.
            Anything you publish here appears on the public website within seconds.
          </p>
          <div className="rounded-md border bg-secondary p-4">
            <p className="mb-2 font-semibold text-foreground">Authorized Directors</p>
            <ul className="grid gap-1 sm:grid-cols-2">
              {directors.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> {d}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs">
              Each director uses their own email and password to sign in at <code>/auth</code>.
              All five accounts share the same admin privileges shown in this panel.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Newspaper className="h-5 w-5" /> Posting New News &amp; Announcements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the <strong>News</strong> tab at the top of this dashboard.</li>
            <li>Click <strong>Add News</strong> (or edit an existing item).</li>
            <li>Fill in the <strong>Title</strong>, <strong>Date</strong> (e.g. <em>May 20, 2026</em>) and <strong>Description</strong> text boxes.</li>
            <li>
              In the <strong>Image</strong> field, either upload a photo or type the exact filename of an image already
              loaded on the site, for example <code>farm.jpg</code> or <code>finalist.jpg</code>.
            </li>
            <li>Use the <strong>Sort Order</strong> number to control position. Smaller numbers appear first (use negative numbers to pin a story to the top).</li>
            <li>Click <strong>Save</strong>. The story is now live on the Home page and the News page.</li>
          </ol>
          <p className="rounded-md bg-secondary p-3 text-xs">
            <ImageIcon className="mr-1 inline h-3 w-3" /> Tip: Photos look best when they are landscape (wider than tall). The site automatically frames them.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Users className="h-5 w-5" /> Managing Staff Profiles
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-relaxed text-muted-foreground">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the <strong>Staff</strong> tab.</li>
            <li>Find the staff member you want to update and click <strong>Edit</strong>.</li>
            <li>Change the <strong>Name</strong>, <strong>Role</strong> (e.g. <em>Unit Leader</em>), or <strong>Section</strong> as needed.</li>
            <li>To swap a photo, upload a new image or type the filename (e.g. <code>sichale.jpg</code>) into the image field.</li>
            <li>Click <strong>Save</strong>. The staff page updates immediately.</li>
            <li>To add a brand-new staff member, click <strong>Add Staff</strong> and fill the same fields.</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BarChart3 className="h-5 w-5" /> Updating Statistics (Enrollment &amp; Counters)
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-relaxed text-muted-foreground">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open the <strong>Statistics</strong> tab.</li>
            <li>Each row shows a label (such as <em>Total Students</em>) and a number.</li>
            <li>Click on the number, type the new value, and press <strong>Save</strong>.</li>
            <li>The new figures animate on the Home page automatically — no refresh needed for visitors.</li>
          </ol>
          <p className="mt-3 rounded-md bg-secondary p-3 text-xs">
            Only edit the numeric value. Leave the <em>label</em> and <em>key</em> fields alone unless you intentionally want to rename a counter.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-primary">Need help?</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          If anything looks wrong on the live website, simply revisit the matching tab here, correct the entry, and save.
          Every change is stored safely in the school's secure backend.
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpGuide;
