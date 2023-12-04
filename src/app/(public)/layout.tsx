export const metadata = {
  title: "Login sistema",
  description: "teste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h2> Login - Sistema</h2>
        <hr />
        {children}
      </body>
    </html>
  );
}
