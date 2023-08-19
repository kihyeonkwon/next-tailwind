export default function TailwindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center  justify-end space-x-5 p-3">
        <a href="/tailwind/fundamentals" className="mylink">
          fundamentals
        </a>
        <a href="/tailwind/mini-projects" className="mylink">
          mini projects
        </a>
        <a href="/tailwind/landingpage" className="mylink">
          landing page
        </a>
      </div>
      {children}
    </div>
  );
}
