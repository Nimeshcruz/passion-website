import Link from "next/link";

export default function Button({ className, children }) {
  return (
    <Link
      href="#"
      className={`bg-red text-sm md:text-xs text-white p-4 rounded-md leading-none inline-block mb-12 ${className}`}
    >
      {children}
    </Link>
  );
}
