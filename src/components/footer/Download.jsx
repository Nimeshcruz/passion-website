import Link from "next/link";
import Image from "next/image";

export default function FooterDownload() {
  return (
    <div className="col flex-1">
      <div className="footer-title text-3xl font-extralight mb-6">
        Passion App
      </div>
      <div className="content font-normal pl-6">
        <p className="mb-9">
          Download the FREE app available for iPhone and Android mobile phones
        </p>
        <Link href="#">
          <Image
            width="160"
            height="300"
            className="w-40 mb-3"
            src="/google-play-btn.png"
            alt="Download passion app from Google Play"
          />
        </Link>
        <Link href="#">
          <Image
            width="160"
            height="300"
            className="w-40"
            src="/app-store-btn.png"
            alt="Download passion app from Apple Store"
          />
        </Link>
      </div>
    </div>
  );
}

