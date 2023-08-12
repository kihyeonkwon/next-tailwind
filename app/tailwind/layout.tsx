export default function TailwindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Tailwind Layout</h1>
      {children}
    </div>
  );
}
