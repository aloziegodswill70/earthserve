
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="bg-earth-950 px-4 py-2 text-center text-xs text-white sm:text-sm">
      <p>
        Building a cleaner earth, creating lasting impact.
        {" "}
        <Link
          href="/get-involved"
          className="ml-1 font-bold text-gold underline-offset-4 hover:underline"
        >
          Join Our Mission →
        </Link>
      </p>
    </div>
  );
}
