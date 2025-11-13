"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Theme-toggle-btn";

function Navbar() {
  const pathName = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-background/60 border-b border-border">
      <div className="flex justify-between items-center px-6 py-3 max-w-4xl w-full">
        {/* Brand */}
        <h1 className="text-2xl font-extrabold tracking-wide text-primary">
          Sujib
        </h1>

        {/* Nav links */}
        <div className="flex text-base gap-6">
          {navItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              className={`transition-colors hover:text-primary/80 ${
                pathName === item.href ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mode toggle */}
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
