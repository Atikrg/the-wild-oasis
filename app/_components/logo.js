import Image from "next/image";
import Link from "next/link";

function Logo() {
    return (
        <>
            <Link
                href="/"
                className="flex items-center gap-4 text-orange-700 z-10"
            >
                <Image
                    src="/logo.png"
                    alt="The Wild Oasis Logo"
                    width={60}
                    height={60}
                />
            </Link>
            <span className="text-xl font-semibold text-primary-100">
                The Wild Oasis
            </span>
        </>
    );
}

export default Logo;
