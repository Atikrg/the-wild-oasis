import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/navigation";
export default function Home() {
  return (
    <>
    <h1>Welcome to wild oasis!</h1>
    <Link href="/cabins">Explore Luxury cabins</Link>
    </>
  );
}
