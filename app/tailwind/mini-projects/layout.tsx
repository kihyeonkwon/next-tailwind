export default function TailwindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center  justify-end space-x-5">
        <a
          href="/tailwind/mini-projects/email-subscribe-card"
          className="mylink"
        >
          email-subscribe-card
        </a>
        <a href="/tailwind/mini-projects/image-gallery" className="mylink">
          image-gallery
        </a>
        <a href="/tailwind/mini-projects/login-modal" className="mylink">
          login-modal
        </a>
        <a href="/tailwind/mini-projects/pricing-grids" className="mylink">
          pricing-grids
        </a>
        <a href="/tailwind/mini-projects/product-modal" className="mylink">
          product-modal
        </a>
      </div>
      {children}
    </div>
  );
}
