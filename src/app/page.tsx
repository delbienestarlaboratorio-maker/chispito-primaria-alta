// Root page for chispito-primaria-alta micro-frontend
// Redirects to primaria-4 as the default grade
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/primaria-4");
}
