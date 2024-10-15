"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(props) {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="text-white text-center text-2xl lg:text-xs font-normal flex flex-col lg:flex-row gap-8 justify-end px-1">
        <li>
          <Link
            className={pathname === "/" ? "text-red" : ""}
            href="/"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/events" ? "text-red" : ""}
            href="/events"
            onClick={props.closeMenu}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/djs" ? "text-red" : ""}
            href="/djs"
            onClick={props.closeMenu}
          >
            DJs
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/whats-on-ibiza" ? "text-red" : ""}
            href="/whats-on-ibiza"
            onClick={props.closeMenu}
          >
            What&apos;s On Ibiza
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/contact-us" ? "text-red" : ""}
            href="/contact-us"
            onClick={props.closeMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
