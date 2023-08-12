export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      {children}
      <h1>Bottom</h1>
    </div>
  );
}
