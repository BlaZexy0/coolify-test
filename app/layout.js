import "./globals.css";

export const metadata = {
  title: "Pipeline Blueprint | CI/CD erklärt",
  description: "Vom lokalen Next.js-Build über Coolify bis zur geplanten Hetzner-Infrastruktur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
