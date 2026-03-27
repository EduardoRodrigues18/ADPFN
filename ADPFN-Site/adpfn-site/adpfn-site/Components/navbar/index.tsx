import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "../NavItem";

export default function Navbar() {
    const items: NavItemInterface[] = [
        { href: "/about",
 label: "About" },
        { href: "/contact", label: "Contact" },
    ];
  return (
    <header>
        <nav className="navbar">
            <Link href="/" className="navbar-logo">
                <Image src="public/IconADPFN.png" 
                alt="Logo" 
                width={50} 
                height={50} />
            </Link>  
            <ul className="nav-items">
                {items.map((item, index) => (
                    <NavItem 
                    key={index}
                    href={item.href} 
                    label={item.label} 
                    />
                ))}
            </ul>

            <button className="btn-default">
                Contatar
            </button>

        </nav>
    </header>
  );
}