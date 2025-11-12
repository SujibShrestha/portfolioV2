"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./Theme-toggle-btn";

function Navbar() {
  const pathName = usePathname()
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <nav className="w-full flex p-4 justify-center">
      <div className="flex justify-around items-center p-5 border border-accent-foreground mx-auto fixed lg:w-[80vh] w-full backdrop-blur-sm rounded-lg">
        {" "}
        <h1 className="text-3xl font-extrabold ">Sujib</h1>
        <div className="flex text-lg gap-3 ">
          {navItems.map((item,id) => (
          <Link key={id} href={item.href} className={`hover:text-gray-400 ${pathName===item.href?"text-primary font-semibold":""}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
