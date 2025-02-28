export const metadata = {
  title: "Company Info",
  description: "View company details and directors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
