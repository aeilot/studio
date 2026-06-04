import { redirect } from "next/navigation";
import { ABOUT_URL } from "@/lib/site";

export default function AboutPage() {
  redirect(ABOUT_URL);
}
