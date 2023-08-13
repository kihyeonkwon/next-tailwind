export default function TailwindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-center">Tailwind Layout</h1>
      {children}
    </div>
  );
}
