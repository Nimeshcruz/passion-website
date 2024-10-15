import Link from "next/link";

export default function FooterSitemap() {
  return (
    <div className="col flex-1">
      <div className="footer-title text-3xl font-extralight mb-6">Sitemap</div>
      <nav>
        <ul className="font-normal pl-6 child:pb-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/djs">DJs</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
