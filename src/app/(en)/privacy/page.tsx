import Privacy from "@/app/components/Privacy";

export const metadata = {
  title: "Privacy & cookies · Antonio Zuccon Ghiotto",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", it: "/it/privacy" } },
};

export default function Page() {
  return <Privacy lang="en" />;
}
