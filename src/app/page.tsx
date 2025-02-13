import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function App() {
  return redirect(ROUTES.DASHBOARD);
}
