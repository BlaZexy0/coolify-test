import "./globals.css";

export const metadata = {
  title: "Pipeline Pulse | CI/CD Test",
  description: "Eine statische Next.js-Testseite für erfolgreiche Deployments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
