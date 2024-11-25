import { permanentRedirect } from "next/navigation";
async function AdminPage() {
  permanentRedirect("/admin/profile");
}

export default AdminPage;
