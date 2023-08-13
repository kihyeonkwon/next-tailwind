export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-center">Fundamental Layout</h1>
      {children}
    </div>
  );
}
