export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ backgroundColor: "blue" }}>{children}</div>;
}
