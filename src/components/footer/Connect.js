import Link from "next/link";
import { React } from "react";

export default function FooterConnect() {
  return (
    <div className="col flex-1">
      <div className="footer-title text-3xl font-extralight mb-6">Connect</div>
      <nav>
        <ul className="font-normal pl-6 child:pb-5">
          <li>
            <Link href="/">Facebook</Link>
          </li>
          <li>
            <Link href="/events">Instagram</Link>
          </li>
          <li>
            <Link href="/djs">YouTube</Link>
          </li>
          <li>
            <Link href="/djs">Snapchat</Link>
          </li>
          <li>
            <Link href="/djs">TikTok</Link>
          </li>
          <li>
            <Link href="/djs">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
