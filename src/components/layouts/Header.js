import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-bold text-2xl" href="">
          NEXT PIZZA ORDER
        </Link>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link
            href={""}
            className="bg-primary text-white px-8 py-2 rounded-full"
          >
            Log in
          </Link>
        </nav>
      </header>
    </>
  );
}
