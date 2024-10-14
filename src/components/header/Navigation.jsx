import Link from "next/link";

export default function Navigation(props) {
  return (
    <nav>
      <ul className="text-white text-center text-2xl lg:text-xs font-normal flex flex-col lg:flex-row gap-8 justify-end px-1">
        <li>
          <Link
            className={(navData) => (navData.isActive ? "text-red" : "")}
            href="/"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "text-red" : "")}
            href="/events"
            onClick={props.closeMenu}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "text-red" : "")}
            href="/djs"
            onClick={props.closeMenu}
          >
            DJs
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "text-red" : "")}
            href="/whats-on-ibiza"
            onClick={props.closeMenu}
          >
            What&apos;s On Ibiza
          </Link>
        </li>
        <li>
          <Link
            className={(navData) => (navData.isActive ? "text-red" : "")}
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

