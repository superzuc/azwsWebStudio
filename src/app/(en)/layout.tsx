import "../globals.css";
import "@/app/lib/fonts";
import { buildMetadata } from "@/app/lib/meta";
import Consent from "@/app/components/Consent";
export { viewport } from "@/app/lib/meta";

export const metadata = buildMetadata("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Consent lang="en" />
      </body>
    </html>
  );
}
