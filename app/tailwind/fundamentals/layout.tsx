export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center  justify-end space-x-5">
        <a href="/tailwind/fundamentals/1-utility" className="mylink">
          1-utility
        </a>
        <a href="/tailwind/fundamentals/2-colors" className="mylink">
          2-colors
        </a>
        <a href="/tailwind/fundamentals/3-spacing" className="mylink">
          3-spacing
        </a>
        <a href="/tailwind/fundamentals/4-fonts" className="mylink">
          4-fonts
        </a>
        <a href="/tailwind/fundamentals/5-width" className="mylink">
          5-width
        </a>
        <a href="/tailwind/fundamentals/6-positioning" className="mylink">
          6-positioning
        </a>
        <a href="/tailwind/fundamentals/7-background" className="mylink">
          7-background
        </a>
        <a href="/tailwind/fundamentals/8-radius" className="mylink">
          8-radius
        </a>
        <a href="/tailwind/fundamentals/9-filters" className="mylink">
          9-filters
        </a>
        <a href="/tailwind/fundamentals/10-interactivity" className="mylink">
          10-interactivity
        </a>
        <a href="/tailwind/fundamentals/11-breakpoints" className="mylink">
          11-breakpoints
        </a>
        <a href="/tailwind/fundamentals/12-columns" className="mylink">
          12-columns
        </a>
        <a href="/tailwind/fundamentals/13-flexbox" className="mylink">
          13-flexbox
        </a>
        <a href="/tailwind/fundamentals/14-grid" className="mylink">
          14-grid
        </a>
        <a
          href="/tailwind/fundamentals/15-transform-transition"
          className="mylink"
        >
          15-transform-transition
        </a>
        <a href="/tailwind/fundamentals/16-animation" className="mylink">
          16-animation
        </a>
        <a href="/tailwind/fundamentals/17-customization" className="mylink">
          17-customization
        </a>
        <a href="/tailwind/fundamentals/18-darkmode" className="mylink">
          18-darkmode
        </a>
      </div>
      {children}
    </div>
  );
}
