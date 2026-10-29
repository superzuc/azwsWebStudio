import Privacy from "@/app/components/Privacy";

export const metadata = {
  title: "Privacy e cookie · Antonio Zuccon Ghiotto",
  alternates: { canonical: "/it/privacy", languages: { en: "/privacy", it: "/it/privacy" } },
};

export default function Page() {
  return <Privacy lang="it" />;
}
