'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}

const Navigation = ({navLinks}: Props) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map(({ label, href }, id) => {
        const isActive = pathname === href;
        return (
          <Link key={id} href={href} className={isActive ? "active" : ""}>
            {label}
          </Link>
        )
      })}
    </>
  )
}

export default Navigation;
