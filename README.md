# Haramaya University Model School — Admin User Guide

This site uses a built-in backend (Lovable Cloud) and an `/admin` dashboard so you
can update content without touching code.

## 1. First-time login

1. Go to `/auth` on your site (e.g. `https://your-site.com/auth`).
2. Click **Sign Up** and register with your email and a password.
   - The **first account ever created** is automatically promoted to **Admin**.
   - Any later sign-ups are regular users — an existing admin must promote them.
3. After signing in, open `/admin` to access the dashboard.
4. For future logins, just go to `/auth` and use **Sign In**.

> Tip: bookmark `/admin`. If you are logged out you'll be redirected to `/auth`.

## 2. Adding a news item (auto-shows on Home)

1. Go to `/admin` → **News** tab.
2. Click **New**.
3. Fill in:
   - **Title** — e.g. "Football Final Results".
   - **Date** — free text shown to visitors, e.g. `May 10, 2026`.
   - **Description** — full body text.
   - **Sort Order** — lower number appears first. Use `0` to push to the top.
   - **Image** — upload a photo (stored in cloud storage automatically).
4. Click **Save**.

The Home page shows the **first 4** news items (lowest `sort_order`) automatically,
and the News page shows all of them. No code changes or redeploys needed.

## 3. Updating student population numbers (e.g. 1,869 total)

1. Go to `/admin` → **Statistics** tab.
2. Find the row for the number you want to change (Male, Female, Total, etc.).
3. Edit the **Value** field, then click **Save** on that row.
4. The new number appears on the site immediately.

To add a brand-new statistic, use the **Add New Statistic** card at the bottom
(Key must be unique, e.g. `teachers_total`).

## 4. Changing a staff member's position or photo

1. Go to `/admin` → **Staff** tab.
2. Find the staff member under **Directorates** or **School Management**.
3. Click the pencil (Edit) icon.
4. Change the **Role / Position**, upload a new **Photo**, or move them between
   sections via the **Section** dropdown.
5. Click **Save**. The Staff page updates automatically.

To remove someone, click the trash icon. To add someone new, click **New**.

---

## Deployment notes

- `vite.config.ts` keeps `base: './'` so the build works on Netlify and any
  static host with relative asset paths. Do not remove this.
- Uploaded images are served from cloud storage, so they continue to work
  regardless of where the site is deployed.
