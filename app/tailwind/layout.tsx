export default function TailwindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center  justify-end space-x-5">
        <a href="/tailwind/fundamentals" className="mylink">
          fundamentals
        </a>
        <a href="/tailwind/mini-projects" className="mylink">
          mini projects
        </a>
      </div>
      {children}
    </div>
  );
}
