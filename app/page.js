import Image from "next/image";
import Link from "next/link";
import Navigation from "./_components/navigation";
import bg from "@/public/bg.png";
export default function Home() {
    return (
        <>
            <main className="mt-24">
                <Image
                    src={bg}
                    fill
                    className="object-cover object-top"
                    placeholder="blur"
                    quality={80}
                    alt="Mountains and forests with two cabins"
                />

                <div className="relative z-10 text-center">
                    <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
                        Welcome to paradise.
                    </h1>

                    <Link
                        href="/cabins"
                        className="bg-orange-300 px-8 py-6 text-black text-lg font-semibold hover:bg-orange-600 transition-all"
                    >
                        Explore Luxury cabins
                    </Link>
                </div>
            </main>
            <h1>Welcome to wild oasis!</h1>
            <Link href="/cabins">Explore Luxury cabins</Link>
        </>
    );
}
