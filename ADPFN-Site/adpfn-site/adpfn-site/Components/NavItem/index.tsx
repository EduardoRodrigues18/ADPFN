import Link from "next/link";
export interface NavItemInterface {
    href: string;
    label: string;
}

export default function NavItem(props: NavItemInterface) {
    return (
        <li className="nav-item">
            <Link href={props.href}>{props.label}</Link>
        </li>
    );
}