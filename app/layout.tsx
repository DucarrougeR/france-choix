import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "France Choix - Testez vos idées politiques",
  description: "Découvrez quel parti politique correspond le mieux à vos convictions pour l'élection présidentielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <main className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}
