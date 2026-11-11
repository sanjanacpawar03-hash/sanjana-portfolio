import "./globals.css";

export const metadata = {
  title: "Sanjana Pawar | Data Science & Data Analytics",
  description:
    "MCA graduate passionate about Data Science, Data Analytics, Machine Learning and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}